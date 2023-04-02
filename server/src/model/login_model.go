package model

import (
	"log"
	"strings"
	"trieutrng.dev/tech-blog/config"
)

func Authenticate(username, password string) bool {
	log.Println("start checking login info")
	return username == config.AuthUsername && password == config.AuthPassword
}

func EmptyUserPass(username, password string) bool {
	return strings.Trim(username, " ") == "" || strings.Trim(password, " ") == ""
}
