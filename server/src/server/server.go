package server

import (
	"database/sql"
	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"trieutrng.dev/tech-blog/config"
	"trieutrng.dev/tech-blog/middleware"

	"github.com/gin-gonic/gin"
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

func getCorsConfig() gin.HandlerFunc {
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{
		"http://localhost:3000",
		"http://localhost:3001",
	}
	config.AllowCredentials = true
	return cors.New(config)
}

func (s *server) setupRouter() {
	router := gin.Default()

	// set cors policy
	router.Use(sessions.Sessions("session", cookie.NewStore(config.CookieSecret)))
	router.Use(getCorsConfig())

	publicGroup := router.Group("/api")
	s.setPublicRoutes(publicGroup)

	privateGroup := router.Group("/api")
	privateGroup.Use(middleware.AuthRequired)
	s.setPrivateRoutes(privateGroup)

	s.router = router
}

func (s *server) SetupAndStart(address string) error {
	return s.router.Run(address)
}
