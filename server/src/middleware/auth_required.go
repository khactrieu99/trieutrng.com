package middleware

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"trieutrng.dev/tech-blog/config"
)

func AuthRequired(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get(config.CookieUserKey)
	if user == nil {
		log.Println("User not logged in")
		c.JSON(http.StatusUnauthorized, gin.H{
			"error": "Not logged in",
		})
		c.Abort()
		return
	}
	c.Next()
}
