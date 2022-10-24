package database

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
	"trieutrng.dev/tech-blog/config"
)

const (
	dbDriver = "postgres"
	dsn      = "postgresql://%s:%s@%s/%s?sslmode=disable"
)

func NewConn(config config.Config) (*sql.DB, error) {
	// data source name
	dsn := fmt.Sprintf(dsn,
		config.DBUsername,
		config.DBPassword,
		config.DBHost,
		config.DBDatabase,
	)

	db, err := sql.Open(dbDriver, dsn)
	if err != nil {
		return nil, err
	}

	err = db.Ping()
	if err != nil {
		db.Close()
		return nil, err
	}

	return db, nil
}
