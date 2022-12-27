package repository

import (
	"STGprd_devpkg/domain/entity"
	"context"
)

type IOfferListRepository interface {
	GetOfferList(ctx context.Context, offerlistOfferID string) (*entity.OfferList, error)
}
