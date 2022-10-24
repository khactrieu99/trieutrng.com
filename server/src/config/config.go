package config

import (
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	DBHost     string
	DBUsername string
	DBPassword string
	DBDatabase string
}

func LoadConfig() (config Config, err error) {
	err = godotenv.Load()
	if err != nil {
		return config, err
	}

	config = Config{
		DBHost:     os.Getenv("DB_HOST"),
		DBUsername: os.Getenv("DB_USERNAME"),
		DBPassword: os.Getenv("DB_PASSWORD"),
		DBDatabase: os.Getenv("DB_DATABASE"),
	}

	return
}
