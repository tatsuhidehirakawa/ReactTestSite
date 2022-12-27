// GraphQLのスキーマとO/Rマッパーの間を取り持つGo構造体
package entity

type OfferList struct {
	OfferID       string `db:"offerId"`
	AccountID     string `db:"accountId"`
	OfferType     string `db:"offerType"`
	OfferTitle    string `db:"offerTitle"`
	OfferSeverity string `db:"offerSeverity"`
	OfferCatagory string `db:"offerCatagory"`
	OfferLocation string `db:"offerLocation"`
	OfferStatus   string `db:"offerStatus"`
	OfferText     string `db:"offerText"`
	CreateDate    string `db:"createDate"`
	UpdateDate    string `db:"updateDate"`
}
