package business

import (
	"github.com/gin-gonic/gin"
	"trieutrng.dev/tech-blog/database"
)

// create new tag request
type CreateTagForm struct {
	Name *string `form:"name" binding:"required,min=1"`
}

func (b *business) CreateTag(ctx *gin.Context) (tag database.Tag, err error) {
	var form CreateTagForm

	if err := ctx.Bind(&form); err != nil {
		return tag, err
	}

	reqCtx := ctx.Request.Context()
	tag, err = b.storage.CreateTag(reqCtx, *form.Name)
	if err != nil {
		return tag, err
	}

	return tag, nil
}

func (b *business) GetAllTags(ctx *gin.Context) ([]database.Tag, error) {
	reqCtx := ctx.Request.Context()

	tags, err := b.storage.GetAllTags(reqCtx)
	if err != nil {
		return tags, err
	}

	return tags, nil
}

// remove tag request
type RemoveTagForm struct {
	Name *string `form:"name" binding:"required,min=1"`
}

func (b *business) RemoveTag(ctx *gin.Context) error {
	var form RemoveTagForm

	if err := ctx.Bind(&form); err != nil {
		return err
	}

	reqCtx := ctx.Request.Context()
	err := b.storage.RemoveTagByName(reqCtx, *form.Name)

	if err != nil {
		return err
	}

	return nil
}
