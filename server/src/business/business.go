package business

import "trieutrng.dev/tech-blog/database"

type StorageInterface interface {
	database.Querier
}

type business struct {
	storage StorageInterface
}

func NewBusiness(storage StorageInterface) *business {
	return &business{
		storage: storage,
	}
}
