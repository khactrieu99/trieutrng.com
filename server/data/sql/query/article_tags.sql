-- name: AddTag :one
INSERT INTO articles_tags (
	article_id, tag_id
) VALUES (
	$1, $2
) 
RETURNING *;

-- name: GetTagsByArticleID :many
SELECT t.name
FROM articles_tags a 
JOIN tags t ON a.tag_id = t.id
WHERE a.article_id = $1;

-- name: GetArticlesByTagID :many
SELECT a.*
FROM articles_tags atag
JOIN articles a ON atag.article_id = a.id
WHERE atag.tag_id = $1
ORDER BY a.created_at DESC;

-- name: RemoveAllArticleTags :exec
DELETE FROM articles_tags WHERE article_id = $1;
