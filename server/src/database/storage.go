package database

import (
	"context"
	"database/sql"
	"fmt"
	"time"

	"golang.org/x/exp/slices"
)

// store wraps simple queries and extends their functionalities with transactions
type storage struct {
	db *sql.DB
	*Queries
}

func NewStorage(db *sql.DB) *storage {
	return &storage{
		db:      db,
		Queries: New(db),
	}
}

// execute queries in multi table with transactions
func (s *storage) execTX(ctx context.Context, fn func(*Queries) error) error {
	tx, err := s.db.BeginTx(ctx, nil)

	if err != nil {
		return err
	}

	queries := s.WithTx(tx)
	err = fn(queries)

	if err != nil {
		if rbErr := tx.Rollback(); rbErr != nil {
			return fmt.Errorf("transactions error: %v, rollback error: %v", err, rbErr)
		}
		return err
	}

	return tx.Commit()
}

// create new article with tags provided
type CreateArticleWithTagsParams struct {
	Title       string   `json:"title"`
	Content     string   `json:"content"`
	Slug        string   `json:"slug"`
	Description string   `json:"description"`
	Banner      string   `json:"banner"`
	Tags        []string `json:"tags"`
}

type CreateArticleWithTagsResult struct {
	ID          int64     `json:"id"`
	Title       string    `json:"title"`
	Content     string    `json:"content"`
	Slug        string    `json:"slug"`
	Description string    `json:"description"`
	Banner      string    `json:"banner"`
	Tags        []string  `json:"tags"`
	CreatedAt   time.Time `json:"created_at"`
}

func (s *storage) CreateArticleWithTags(ctx context.Context, arg CreateArticleWithTagsParams) (CreateArticleWithTagsResult, error) {
	var result CreateArticleWithTagsResult

	err := s.execTX(ctx, func(q *Queries) error {
		var article Article
		var err error

		article, err = q.CreateArticle(ctx, CreateArticleParams{
			Title:       arg.Title,
			Content:     arg.Content,
			Slug:        arg.Slug,
			Description: arg.Description,
			Banner:      arg.Banner,
		})

		if err != nil {
			return err
		}

		tags, err := q.GetAllTags(ctx)

		if err != nil {
			return err
		}

		availableTags := make([]string, 0)
		for _, tag := range tags {
			availableTags = append(availableTags, tag.Name)
		}

		// check if provided tags is available
		for _, tagname := range arg.Tags {
			if !slices.Contains(availableTags, tagname) {
				return fmt.Errorf("Invalid data: tag '%s' does not exist", tagname)
			}
		}

		var tagIDs []int64
		for _, tag := range tags {
			for _, tagname := range arg.Tags {
				if tag.Name == tagname {
					tagIDs = append(tagIDs, tag.ID)
					break
				}
			}
		}
		for _, tagId := range tagIDs {
			_, err := q.AddTag(ctx, AddTagParams{
				ArticleID: article.ID,
				TagID:     tagId,
			})
			if err != nil {
				return err
			}
		}

		result = CreateArticleWithTagsResult{
			ID:          article.ID,
			Title:       article.Title,
			Content:     article.Content,
			Slug:        article.Slug,
			Description: article.Description,
			Banner:      article.Banner,
			Tags:        arg.Tags,
			CreatedAt:   article.CreatedAt,
		}

		return err
	})

	return result, err
}

// update article with tags provided
type UpdateArticleWithTagsParams struct {
	ID          int64    `json:"id"`
	Title       string   `json:"title"`
	Content     string   `json:"content"`
	Slug        string   `json:"slug"`
	Description string   `json:"description"`
	Banner      string   `json:"banner"`
	Tags        []string `json:"tags"`
}
type UpdateArticleWithTagsResult struct {
	ID          int64     `json:"id"`
	Title       string    `json:"title"`
	Content     string    `json:"content"`
	Slug        string    `json:"slug"`
	Description string    `json:"description"`
	Banner      string    `json:"banner"`
	Tags        []string  `json:"tags"`
	CreatedAt   time.Time `json:"created_at"`
}

func (s *storage) UpdateArticleWithTags(ctx context.Context, arg UpdateArticleWithTagsParams) (UpdateArticleWithTagsResult, error) {
	var result UpdateArticleWithTagsResult

	err := s.execTX(ctx, func(q *Queries) error {
		newArticle, err := q.UpdateArticle(ctx, UpdateArticleParams{
			ID:          arg.ID,
			Title:       arg.Title,
			Content:     arg.Content,
			Slug:        arg.Slug,
			Description: arg.Description,
			Banner:      arg.Banner,
		})

		if err != nil {
			return err
		}

		tags, err := q.GetAllTags(ctx)

		if err != nil {
			return err
		}

		availableTags := make([]string, 0)
		for _, tag := range tags {
			availableTags = append(availableTags, tag.Name)
		}

		// check if provided tags is available
		for _, tagname := range arg.Tags {
			if !slices.Contains(availableTags, tagname) {
				return fmt.Errorf("Invalid data: tag '%s' does not exist", tagname)
			}
		}

		if err := q.RemoveAllArticleTags(ctx, arg.ID); err != nil {
			return err
		}

		var tagIDs []int64
		for _, tag := range tags {
			for _, tagname := range arg.Tags {
				if tag.Name == tagname {
					tagIDs = append(tagIDs, tag.ID)
					break
				}
			}
		}
		for _, tagId := range tagIDs {
			_, err := q.AddTag(ctx, AddTagParams{
				ArticleID: arg.ID,
				TagID:     tagId,
			})
			if err != nil {
				return err
			}
		}

		result = UpdateArticleWithTagsResult{
			ID:          newArticle.ID,
			Title:       newArticle.Title,
			Content:     newArticle.Content,
			Slug:        newArticle.Slug,
			Description: newArticle.Description,
			Banner:      newArticle.Banner,
			Tags:        arg.Tags,
			CreatedAt:   newArticle.CreatedAt,
		}

		return err
	})

	return result, err
}

// get article and its tags
type ArticleWithTag struct {
	ID          int64     `json:"id"`
	Title       string    `json:"title"`
	Content     string    `json:"content"`
	Slug        string    `json:"slug"`
	Description string    `json:"description"`
	Banner      string    `json:"banner"`
	Tags        []string  `json:"tags"`
	CreatedAt   time.Time `json:"created_at"`
}

func (s *storage) GetAllArticlesWithTags(ctx context.Context) ([]ArticleWithTag, error) {
	var result []ArticleWithTag

	err := s.execTX(ctx, func(q *Queries) error {
		var articles []Article
		var err error

		articles, err = q.GetAllArticles(ctx)
		if err != nil {
			return err
		}

		for _, article := range articles {
			tags, err := q.GetTagsByArticleID(ctx, article.ID)
			if err != nil {
				return err
			}

			result = append(result, ArticleWithTag{
				ID:          article.ID,
				Title:       article.Title,
				Content:     article.Content,
				Slug:        article.Slug,
				Description: article.Description,
				Banner:      article.Banner,
				Tags:        tags,
				CreatedAt:   article.CreatedAt,
			})
		}

		return err
	})

	return result, err
}

// get all articles by provided tag
type GetArticlesByTagParams struct {
	Tag string `json:"tag"`
}

func (s *storage) GetArticlesWithTagsByTag(ctx context.Context, arg GetArticlesByTagParams) ([]ArticleWithTag, error) {
	var result []ArticleWithTag

	err := s.execTX(ctx, func(q *Queries) error {
		var articles []Article
		var err error

		tag, err := q.GetTagByName(ctx, arg.Tag)
		if err != nil {
			return err
		}

		articles, err = q.GetArticlesByTagID(ctx, tag.ID)
		if err != nil {
			return err
		}

		for _, article := range articles {
			tags, err := q.GetTagsByArticleID(ctx, article.ID)
			if err != nil {
				return err
			}

			result = append(result, ArticleWithTag{
				ID:          article.ID,
				Title:       article.Title,
				Content:     article.Content,
				Slug:        article.Slug,
				Description: article.Description,
				Banner:      article.Banner,
				Tags:        tags,
				CreatedAt:   article.CreatedAt,
			})
		}

		return err
	})

	return result, err
}

// get article which matches slug
type GetArticleBySlugParams struct {
	Slug string `json:"slug"`
}

func (s *storage) GetArticleWithTagsBySlug(ctx context.Context, arg GetArticleBySlugParams) (ArticleWithTag, error) {
	var result ArticleWithTag

	err := s.execTX(ctx, func(q *Queries) error {
		var article Article
		var err error

		article, err = q.GetArticleBySlug(ctx, arg.Slug)
		if err != nil {
			return err
		}

		tags, err := q.GetTagsByArticleID(ctx, article.ID)
		if err != nil {
			return err
		}

		result = ArticleWithTag{
			ID:          article.ID,
			Title:       article.Title,
			Content:     article.Content,
			Slug:        article.Slug,
			Description: article.Description,
			Banner:      article.Banner,
			Tags:        tags,
			CreatedAt:   article.CreatedAt,
		}

		return err
	})

	return result, err
}
