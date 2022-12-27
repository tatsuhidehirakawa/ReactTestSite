package persistence

import (
	"STGprd_devpkg/domain/repository"
	"STGprd_devpkg/io"
)

type Repositories struct {
	db        *io.SQLdatabase
	OfferList repository.IOfferListRepository
}

func NewRepositories(db *io.SQLdatabase) (*Repositories, error) {
	return &Repositories{
		db:        db,
		OfferList: NewOfferListRepository(db),
	}, nil
}
