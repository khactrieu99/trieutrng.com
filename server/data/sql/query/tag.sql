-- name: CreateTag :one
INSERT INTO tags (
	name
) VALUES (
	$1
)
RETURNING *;

-- name: GetAllTags :many
SELECT * FROM tags;

-- name: GetTagByName :one
SELECT * 
FROM tags
WHERE tags.name = $1;

-- name: RemoveTagByName :exec
DELETE FROM tags WHERE name = $1;
