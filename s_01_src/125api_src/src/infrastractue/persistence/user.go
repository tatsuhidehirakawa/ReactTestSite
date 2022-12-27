// O/Rマッパー
package persistence

import (
	"context"
	"database/sql"

	"github.com/tatsuhidehirakawa/STGprd_devpkg/domain/entity"
	"github.com/tatsuhidehirakawa/STGprd_devpkg/domain/repository"
	"github.com/tatsuhidehirakawa/STGprd_devpkg/io"
)

type OfferListRepository struct {
	database *io.SQLdatabase
}

var _ repository.IOfferListRepository = (*OfferListRepository)(nil)

func NewOfferListRepository(db *io.SQLdatabase) *OfferListRepository {
	return &OfferListRepository{
		database: db,
	}
}

func (r *OfferListRepository) GetOfferList(ctx context.Context, offerlistOfferID string) (*entity.OfferList, error) {
	var offerlist entity.OfferList
	err := r.database.SQLX.Get(&offerlist, "SELECT offer_id, account_id FROM offerlist WHERE id=$1", offerlistOfferID)
	if err != nil {
		switch err {
		case sql.ErrNoRows:
			return nil, nil
		default:
			return nil, err
		}
	}
	return &offerlist, nil
}
