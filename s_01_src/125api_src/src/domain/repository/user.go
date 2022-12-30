package repository

import (
	"context"

	"github.com/tatsuhidehirakawa/STGprd_devpkg/domain/entity"
)

type IUserRepository interface {
	GetUser(ctx context.Context, userID string) (*entity.User, error)
}
