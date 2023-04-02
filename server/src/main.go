package main

import (
	"log"
	"os"
	"trieutrng.dev/tech-blog/config"
	"trieutrng.dev/tech-blog/database"
	"trieutrng.dev/tech-blog/server"
)

func main() {
	config, err := config.LoadConfig()
	if err != nil {
		log.Fatal("Error loading .env file - ", err)
		os.Exit(0)
	}

	db, err := database.NewConn(config)
	if err != nil {
		log.Fatal("Error connect to database - ", err)
		os.Exit(0)
	}

	server := server.NewServer(db)
	if err := server.SetupAndStart(":5678"); err != nil {
		log.Fatal("Can not start server - ", err)
	}
}
