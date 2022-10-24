// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.15.0

package database

import (
	"time"
)

type Article struct {
	ID          int64     `json:"id"`
	Title       string    `json:"title"`
	Content     string    `json:"content"`
	Slug        string    `json:"slug"`
	Description string    `json:"description"`
	Banner      string    `json:"banner"`
	CreatedAt   time.Time `json:"created_at"`
}

type ArticlesTag struct {
	ArticleID int64 `json:"article_id"`
	TagID     int64 `json:"tag_id"`
}

type Tag struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}