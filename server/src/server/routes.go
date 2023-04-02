package server

import (
	"github.com/gin-gonic/gin"
	controllerIndex "trieutrng.dev/tech-blog/controller"
)

func (s *server) setPublicRoutes(apiGroup *gin.RouterGroup) {
	var controller controllerIndex.Controller

	apiGroup.POST("/login", controller.Login())

	articleRoutes := apiGroup.Group("/article")
	articleRoutes.GET("/", controller.GetAllArticles(s.db))
	articleRoutes.GET("/:slug", controller.GetArticleBySlug(s.db))

	tagRoutes := apiGroup.Group("/tag")
	tagRoutes.GET("/:tag", controller.GetArticlesByTag(s.db))
}

func (s *server) setPrivateRoutes(apiGroup *gin.RouterGroup) {
	var controller controllerIndex.Controller

	apiGroup.GET("/logout", controller.Logout())

	articleRoutes := apiGroup.Group("/article")
	articleRoutes.POST("/create", controller.CreateArticle(s.db))
	articleRoutes.POST("/update", controller.UpdateArticle(s.db))
	articleRoutes.POST("/remove", controller.RemoveArticle(s.db))

	tagRoutes := apiGroup.Group("/tag")
	tagRoutes.GET("/", controller.GetAllTags(s.db))
	tagRoutes.POST("/create", controller.CreateTag(s.db))
	tagRoutes.POST("/remove", controller.RemoveTag(s.db))
}
