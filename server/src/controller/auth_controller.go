package controller

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"trieutrng.dev/tech-blog/config"
	"trieutrng.dev/tech-blog/model"
)

func (c Controller) Login() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		user := session.Get(config.CookieUserKey)
		if user != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"error": "Already logged in",
			})
			return
		}

		username := ctx.PostForm("username")
		password := ctx.PostForm("password")

		if model.EmptyUserPass(username, password) || !model.Authenticate(username, password) {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"error": "Wrong auth info",
			})
			return
		}

		session.Set(config.CookieUserKey, username)
		if err := session.Save(); err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to save session",
			})
			return
		}

		ctx.JSON(http.StatusOK, gin.H{
			"msg": "success",
		})
	}
}

func (c Controller) Logout() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		user := session.Get(config.CookieUserKey)
		log.Println("logging out user:", user)
		if user == nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"error": "Wrong auth info",
			})
			return
		}
		session.Delete(config.CookieUserKey)
		if err := session.Save(); err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to delete session",
			})
			return
		}

		session.Clear()
		session.Save()

		ctx.JSON(http.StatusOK, gin.H{
			"msg": "success",
		})
	}
}
