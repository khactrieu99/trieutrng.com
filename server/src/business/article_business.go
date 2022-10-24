package business

import (
	"fmt"
	"strings"

	"github.com/gin-gonic/gin"
	"trieutrng.dev/tech-blog/database"
)

// create new article request
type CreateArticleWithTagsForm struct {
	Title       *string `form:"title" binding:"required,omitempty"`
	Content     *string `form:"content" binding:"required"`
	Slug        *string `form:"slug" binding:"required"`
	Description *string `form:"description" binding:"required"`
	Banner      *string `form:"banner" binding:"required"`
	Tags        *string `form:"tags" binding:"required,min=1"`
}

func (b *business) CreateArticleWithTags(ctx *gin.Context) (result database.CreateArticleWithTagsResult, err error) {
	var form CreateArticleWithTagsForm

	if err := ctx.Bind(&form); err != nil {
		return result, err
	}

	tags := strings.Split(*form.Tags, ",")
	if len(tags) == 1 && len(tags[0]) == 0 {
		return result, fmt.Errorf("Invalid data: tags can not be empty")
	}

	reqCtx := ctx.Request.Context()
	result, err = b.storage.CreateArticleWithTags(reqCtx, database.CreateArticleWithTagsParams{
		Title:       *form.Title,
		Content:     *form.Content,
		Slug:        *form.Slug,
		Description: *form.Description,
		Banner:      *form.Banner,
		Tags:        tags,
	})

	if err != nil {
		return result, err
	}

	return result, nil
}

// update article request
type UpdateArticleWithTagsForm struct {
	ID          *int64  `form:"id" binding:"required,min=0"`
	Title       *string `form:"title" binding:"required,omitempty"`
	Content     *string `form:"content" binding:"required"`
	Slug        *string `form:"slug" binding:"required"`
	Description *string `form:"description" binding:"required"`
	Banner      *string `form:"banner" binding:"required"`
	Tags        *string `form:"tags" binding:"required,min=1"`
}

func (b *business) UpdateArticleWithTags(ctx *gin.Context) (result database.UpdateArticleWithTagsResult, err error) {
	var form UpdateArticleWithTagsForm

	if err := ctx.Bind(&form); err != nil {
		return result, err
	}

	tags := strings.Split(*form.Tags, ",")
	if len(tags) == 1 && len(tags[0]) == 0 {
		return result, fmt.Errorf("Invalid data: tags can not be empty")
	}

	reqCtx := ctx.Request.Context()
	result, err = b.storage.UpdateArticleWithTags(reqCtx, database.UpdateArticleWithTagsParams{
		ID:          *form.ID,
		Title:       *form.Title,
		Content:     *form.Content,
		Slug:        *form.Slug,
		Description: *form.Description,
		Banner:      *form.Banner,
		Tags:        tags,
	})

	if err != nil {
		return result, err
	}

	return result, nil
}

func (b *business) GetAllArticles(ctx *gin.Context) ([]database.ArticleWithTag, error) {
	reqCtx := ctx.Request.Context()
	result, err := b.storage.GetAllArticlesWithTags(reqCtx)

	if err != nil {
		return result, err
	}

	return result, nil
}

// get article by tag
func (b *business) GetArticlesByTag(ctx *gin.Context) (result []database.ArticleWithTag, err error) {
	tag := ctx.Param("tag")
	reqCtx := ctx.Request.Context()
	result, err = b.storage.GetArticlesWithTagsByTag(reqCtx, database.GetArticlesByTagParams{
		Tag: tag,
	})

	if err != nil {
		return result, err
	}

	return result, nil
}

func (b *business) GetArticleBySlug(ctx *gin.Context) (result database.ArticleWithTag, err error) {
	slug := ctx.Param("slug")
	reqCtx := ctx.Request.Context()
	result, err = b.storage.GetArticleWithTagsBySlug(reqCtx, database.GetArticleBySlugParams{
		Slug: slug,
	})

	if err != nil {
		return result, err
	}

	return result, nil
}
