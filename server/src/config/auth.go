package config

import (
	"github.com/joho/godotenv"
	"log"
	"os"
)

var CookieSecret []byte
var CookieUserKey string
var AuthUsername string
var AuthPassword string

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error initialize global variables - ", err)
	}

	CookieSecret = []byte(os.Getenv("TRIEU_TRUONG_COOKIE_SECRET"))
	CookieUserKey = os.Getenv("TRIEU_TRUONG_USER_KEY")

	AuthUsername = os.Getenv("TRIEU_TRUONG_USERNAME")
	AuthPassword = os.Getenv("TRIEU_TRUONG_PASSWORD")
}
