package server

import (
	"database/sql"

	"github.com/gin-gonic/gin"

	controllerIndex "trieutrng.dev/tech-blog/controller"
)

type server struct {
	db     *sql.DB
	router *gin.Engine
}

func NewServer(db *sql.DB) *server {
	s := &server{
		db: db,
	}
	s.setupRouter()
	return s
}

func (s *server) setupRouter() {
	router := gin.Default()

	var controller controllerIndex.Controller
	apiRoutes := router.Group("/api")
	{
		articleRoutes := apiRoutes.Group("/article")
		articleRoutes.GET("/", controller.GetAllArticles(s.db))
		articleRoutes.GET("/:slug", controller.GetArticleBySlug(s.db))
		articleRoutes.POST("/create", controller.CreateArticle(s.db))
		articleRoutes.POST("/update", controller.UpdateArticle(s.db))

		tagRoutes := apiRoutes.Group("/tag")
		tagRoutes.GET("/", controller.GetAllTags(s.db))
		tagRoutes.GET("/:tag", controller.GetArticlesByTag(s.db))
		tagRoutes.POST("/create", controller.CreateTag(s.db))
		tagRoutes.POST("/remove", controller.RemoveTag(s.db))
	}

	s.router = router
}

func (s *server) SetupAndStart(address string) error {
	return s.router.Run(address)
}
