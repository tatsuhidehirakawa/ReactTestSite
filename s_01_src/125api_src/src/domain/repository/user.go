package repository

import (
	"context"

	"github.com/tatsuhidehirakawa/STGprd_devpkg/domain/entity"
)

type IOfferListRepository interface {
	GetOfferList(ctx context.Context, offerlistOfferID string) (*entity.OfferList, error)
}
