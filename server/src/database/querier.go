package database

import "context"

type Querier interface {
	CreateArticleWithTags(ctx context.Context, arg CreateArticleWithTagsParams) (CreateArticleWithTagsResult, error)
	UpdateArticleWithTags(ctx context.Context, arg UpdateArticleWithTagsParams) (UpdateArticleWithTagsResult, error)
	GetAllArticlesWithTags(ctx context.Context) ([]ArticleWithTag, error)
	GetArticlesWithTagsByTag(ctx context.Context, arg GetArticlesByTagParams) ([]ArticleWithTag, error)
	GetArticleWithTagsBySlug(ctx context.Context, arg GetArticleBySlugParams) (ArticleWithTag, error)
	RemoveArticleWithTags(ctx context.Context, id int64) error
	RemoveArticle(ctx context.Context, id int64) error
	CreateTag(ctx context.Context, name string) (Tag, error)
	RemoveTagByName(ctx context.Context, name string) error
	GetAllTags(ctx context.Context) ([]Tag, error)
}
