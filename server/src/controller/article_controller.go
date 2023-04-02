package controller

import (
	"database/sql"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"trieutrng.dev/tech-blog/business"
	"trieutrng.dev/tech-blog/database"
	"trieutrng.dev/tech-blog/util"
)

// create article
type CreateArticleResponse struct {
	ID   int64  `json:"id"`
	Slug string `json:"slug"`
}

func (c Controller) CreateArticle(db *sql.DB) gin.HandlerFunc {
	storage := database.NewStorage(db)
	buz := business.NewBusiness(storage)

	return func(ctx *gin.Context) {
		result, err := buz.CreateArticleWithTags(ctx)

		if err != nil {
			fmt.Printf("Can not create article - %v\n", err)
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}

		ctx.JSON(http.StatusOK, result)
	}
}

func (c Controller) UpdateArticle(db *sql.DB) gin.HandlerFunc {
	storage := database.NewStorage(db)
	buz := business.NewBusiness(storage)

	return func(ctx *gin.Context) {
		result, err := buz.UpdateArticleWithTags(ctx)

		if err != nil {
			fmt.Printf("Can not update article - %v\n", err)
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}

		ctx.JSON(http.StatusOK, result)
	}
}

// Get all brief articles
type BriefArticleResponse struct {
	ID          int64    `json:"id"`
	Title       string   `json:"title"`
	Slug        string   `json:"slug"`
	Description string   `json:"description"`
	Banner      string   `json:"banner"`
	Tags        []string `json:"tags"`
	CreatedAt   string   `json:"created_at"`
}

func (c Controller) GetAllArticles(db *sql.DB) gin.HandlerFunc {
	storage := database.NewStorage(db)
	buz := business.NewBusiness(storage)

	return func(ctx *gin.Context) {
		result, err := buz.GetAllArticles(ctx)

		if err != nil {
			fmt.Printf("Can not get all articles - %v\n", err)
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}

		allArticles := make([]BriefArticleResponse, 0)

		for _, item := range result {
			briefArticle := BriefArticleResponse{
				ID:          item.ID,
				Title:       item.Title,
				Slug:        item.Slug,
				Description: item.Description,
				Banner:      item.Banner,
				Tags:        item.Tags,
				CreatedAt:   util.ConvertTimeToStringFormatted(item.CreatedAt),
			}
			allArticles = append(allArticles, briefArticle)
		}

		ctx.JSON(http.StatusOK, allArticles)
	}
}

func (c Controller) GetArticlesByTag(db *sql.DB) gin.HandlerFunc {
	storage := database.NewStorage(db)
	buz := business.NewBusiness(storage)

	return func(ctx *gin.Context) {
		result, err := buz.GetArticlesByTag(ctx)

		if err != nil {
			fmt.Printf("Can not get all articles - %v\n", err)
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}

		allArticles := make([]BriefArticleResponse, 0)

		for _, item := range result {
			briefArticle := BriefArticleResponse{
				ID:          item.ID,
				Title:       item.Title,
				Slug:        item.Slug,
				Description: item.Description,
				Banner:      item.Banner,
				Tags:        item.Tags,
				CreatedAt:   util.ConvertTimeToStringFormatted(item.CreatedAt),
			}
			allArticles = append(allArticles, briefArticle)
		}

		ctx.JSON(http.StatusOK, allArticles)
	}
}

// Get detail  article by slug
type ArticleResponse struct {
	ID          int64    `json:"id"`
	Title       string   `json:"title"`
	Slug        string   `json:"slug"`
	Content     string   `json:"content"`
	Description string   `json:"description"`
	Banner      string   `json:"banner"`
	Tags        []string `json:"tags"`
	CreatedAt   string   `json:"created_at"`
}

func (c Controller) GetArticleBySlug(db *sql.DB) gin.HandlerFunc {
	storage := database.NewStorage(db)
	buz := business.NewBusiness(storage)

	return func(ctx *gin.Context) {
		result, err := buz.GetArticleBySlug(ctx)

		if err != nil {
			fmt.Printf("Can not get article by slug - %v\n", err)
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}

		article := ArticleResponse{
			ID:          result.ID,
			Title:       result.Title,
			Slug:        result.Slug,
			Content:     result.Content,
			Description: result.Description,
			Banner:      result.Banner,
			Tags:        result.Tags,
			CreatedAt:   util.ConvertTimeToStringFormatted(result.CreatedAt),
		}

		ctx.JSON(http.StatusOK, article)
	}
}

func (c Controller) RemoveArticle(db *sql.DB) gin.HandlerFunc {
	storage := database.NewStorage(db)
	buz := business.NewBusiness(storage)

	return func(ctx *gin.Context) {
		id, err := buz.RemoveArticle(ctx)

		if err != nil {
			fmt.Printf("Can not remove article - %v\n", err)
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}

		ctx.JSON(http.StatusOK, gin.H{
			"id": id,
		})
	}
}
