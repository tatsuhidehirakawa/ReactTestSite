package persistence

import (
	"github.com/tatsuhidehirakawa/STGprd_devpkg/domain/repository"
	"github.com/tatsuhidehirakawa/STGprd_devpkg/io"
)

type Repositories struct {
	db   *io.SQLdatabase
	User repository.IUserRepository
}

func NewRepositories(db *io.SQLdatabase) (*Repositories, error) {
	return &Repositories{
		db:   db,
		User: NewUserRepository(db),
	}, nil
}
