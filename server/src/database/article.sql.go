// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0
// source: article.sql

package database

import (
	"context"
)

const createArticle = `-- name: CreateArticle :one
INSERT INTO articles (
	title, content, slug, description, banner
) VALUES (
	$1, $2, $3, $4, $5
)
RETURNING id, title, content, slug, description, banner, created_at
`

type CreateArticleParams struct {
	Title       string `json:"title"`
	Content     string `json:"content"`
	Slug        string `json:"slug"`
	Description string `json:"description"`
	Banner      string `json:"banner"`
}

func (q *Queries) CreateArticle(ctx context.Context, arg CreateArticleParams) (Article, error) {
	row := q.db.QueryRowContext(ctx, createArticle,
		arg.Title,
		arg.Content,
		arg.Slug,
		arg.Description,
		arg.Banner,
	)
	var i Article
	err := row.Scan(
		&i.ID,
		&i.Title,
		&i.Content,
		&i.Slug,
		&i.Description,
		&i.Banner,
		&i.CreatedAt,
	)
	return i, err
}

const getAllArticles = `-- name: GetAllArticles :many
SELECT id, title, content, slug, description, banner, created_at
FROM articles
ORDER BY created_at DESC
`

func (q *Queries) GetAllArticles(ctx context.Context) ([]Article, error) {
	rows, err := q.db.QueryContext(ctx, getAllArticles)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Article
	for rows.Next() {
		var i Article
		if err := rows.Scan(
			&i.ID,
			&i.Title,
			&i.Content,
			&i.Slug,
			&i.Description,
			&i.Banner,
			&i.CreatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getArticleBySlug = `-- name: GetArticleBySlug :one
SELECT id, title, content, slug, description, banner, created_at
FROM articles a
WHERE a.slug = $1
LIMIT 1
`

func (q *Queries) GetArticleBySlug(ctx context.Context, slug string) (Article, error) {
	row := q.db.QueryRowContext(ctx, getArticleBySlug, slug)
	var i Article
	err := row.Scan(
		&i.ID,
		&i.Title,
		&i.Content,
		&i.Slug,
		&i.Description,
		&i.Banner,
		&i.CreatedAt,
	)
	return i, err
}

const removeArticle = `-- name: RemoveArticle :exec
DELETE FROM articles WHERE id = $1
`

func (q *Queries) RemoveArticle(ctx context.Context, id int64) error {
	_, err := q.db.ExecContext(ctx, removeArticle, id)
	return err
}

const updateArticle = `-- name: UpdateArticle :one
UPDATE articles
SET title = $2, content = $3, slug = $4, description = $5, banner = $6
WHERE id = $1
RETURNING id, title, content, slug, description, banner, created_at
`

type UpdateArticleParams struct {
	ID          int64  `json:"id"`
	Title       string `json:"title"`
	Content     string `json:"content"`
	Slug        string `json:"slug"`
	Description string `json:"description"`
	Banner      string `json:"banner"`
}

func (q *Queries) UpdateArticle(ctx context.Context, arg UpdateArticleParams) (Article, error) {
	row := q.db.QueryRowContext(ctx, updateArticle,
		arg.ID,
		arg.Title,
		arg.Content,
		arg.Slug,
		arg.Description,
		arg.Banner,
	)
	var i Article
	err := row.Scan(
		&i.ID,
		&i.Title,
		&i.Content,
		&i.Slug,
		&i.Description,
		&i.Banner,
		&i.CreatedAt,
	)
	return i, err
}
