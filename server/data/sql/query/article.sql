-- name: CreateArticle :one
INSERT INTO articles (
	title, content, slug, description, banner
) VALUES (
	$1, $2, $3, $4, $5
)
RETURNING *;

-- name: GetAllArticles :many
SELECT *
FROM articles
ORDER BY created_at DESC;

-- name: GetArticleBySlug :one
SELECT *
FROM articles a
WHERE a.slug = $1
LIMIT 1;

-- name: UpdateArticle :one
UPDATE articles
SET title = $2, content = $3, slug = $4, description = $5, banner = $6
WHERE id = $1
RETURNING *;
