package controller

import (
	"database/sql"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"trieutrng.dev/tech-blog/business"
	"trieutrng.dev/tech-blog/database"
)

// Create tag
type CreateTagResponse struct {
	Id   int64  `json:"id"`
	Name string `json:"name"`
}

func (c Controller) CreateTag(db *sql.DB) gin.HandlerFunc {
	storage := database.NewStorage(db)
	buz := business.NewBusiness(storage)

	return func(ctx *gin.Context) {
		result, err := buz.CreateTag(ctx)

		if err != nil {
			fmt.Printf("Can not create new tag - %v\n", err)
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}

		response := CreateTagResponse{
			Id:   result.ID,
			Name: result.Name,
		}

		ctx.JSON(http.StatusOK, response)
	}
}

// Get all tags
func (c Controller) GetAllTags(db *sql.DB) gin.HandlerFunc {
	storage := database.NewStorage(db)
	buz := business.NewBusiness(storage)

	return func(ctx *gin.Context) {
		result, err := buz.GetAllTags(ctx)

		if err != nil {
			fmt.Printf("Can not get all tags - %v\n", err)
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}

		tagnames := make([]string, 0)
		for _, item := range result {
			tagnames = append(tagnames, item.Name)
		}

		ctx.JSON(http.StatusOK, tagnames)
	}
}

func (c Controller) RemoveTag(db *sql.DB) gin.HandlerFunc {
	storage := database.NewStorage(db)
	buz := business.NewBusiness(storage)

	return func(ctx *gin.Context) {
		err := buz.RemoveTag(ctx)

		if err != nil {
			fmt.Printf("Can not remove tag - %v\n", err)
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}

		ctx.JSON(http.StatusOK, gin.H{})
	}
}
