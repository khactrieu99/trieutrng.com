createdb:
	docker exec -it postgres createdb --username=postgres --owner=postgres tech_blog

dropdb:
	docker exec -it postgres dropdb -U postgres tech_blog

migrate_up:
	migrate -path sql/migration -database "postgresql://postgres:postgres@localhost:5432/tech_blog?sslmode=disable" -verbose up

migrate_down:
	migrate -path sql/migration -database "postgresql://postgres:postgres@localhost:5432/tech_blog?sslmode=disable" -verbose down

sqlc:
	sqlc generate --file ./sql/sqlc.yaml

.PHONY: createdb dropdb migrate_up migrate_down sqlc
