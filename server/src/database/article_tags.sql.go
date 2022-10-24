// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.15.0
// source: article_tags.sql

package database

import (
	"context"
)

const addTag = `-- name: AddTag :one
INSERT INTO articles_tags (
	article_id, tag_id
) VALUES (
	$1, $2
) 
RETURNING article_id, tag_id
`

type AddTagParams struct {
	ArticleID int64 `json:"article_id"`
	TagID     int64 `json:"tag_id"`
}

func (q *Queries) AddTag(ctx context.Context, arg AddTagParams) (ArticlesTag, error) {
	row := q.db.QueryRowContext(ctx, addTag, arg.ArticleID, arg.TagID)
	var i ArticlesTag
	err := row.Scan(&i.ArticleID, &i.TagID)
	return i, err
}

const getArticlesByTagID = `-- name: GetArticlesByTagID :many
SELECT a.id, a.title, a.content, a.slug, a.description, a.banner, a.created_at
FROM articles_tags atag
JOIN articles a ON atag.article_id = a.id
WHERE atag.tag_id = $1
ORDER BY a.created_at DESC
`

func (q *Queries) GetArticlesByTagID(ctx context.Context, tagID int64) ([]Article, error) {
	rows, err := q.db.QueryContext(ctx, getArticlesByTagID, tagID)
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

const getTagsByArticleID = `-- name: GetTagsByArticleID :many
SELECT t.name
FROM articles_tags a 
JOIN tags t ON a.tag_id = t.id
WHERE a.article_id = $1
`

func (q *Queries) GetTagsByArticleID(ctx context.Context, articleID int64) ([]string, error) {
	rows, err := q.db.QueryContext(ctx, getTagsByArticleID, articleID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []string
	for rows.Next() {
		var name string
		if err := rows.Scan(&name); err != nil {
			return nil, err
		}
		items = append(items, name)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const removeAllArticleTags = `-- name: RemoveAllArticleTags :exec
DELETE FROM articles_tags WHERE article_id = $1
`

func (q *Queries) RemoveAllArticleTags(ctx context.Context, articleID int64) error {
	_, err := q.db.ExecContext(ctx, removeAllArticleTags, articleID)
	return err
}
