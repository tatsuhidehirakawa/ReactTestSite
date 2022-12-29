// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0
// source: query.sql

package sqlc_pkg

import (
	"context"
	"database/sql"
	"time"
)

const createAccount_attribute = `-- name: CreateAccount_attribute :execresult
INSERT INTO account_attribute (
  account_id, self_introduction, twitter_uri, facebook_uri, instagram_uri, youtube_channel_uri, skill, rate, status, create_date, update_date
) VALUES (
  $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
)
`

type CreateAccount_attributeParams struct {
	AccountID         string         `json:"account_id"`
	SelfIntroduction  sql.NullString `json:"self_introduction"`
	TwitterUri        sql.NullString `json:"twitter_uri"`
	FacebookUri       sql.NullString `json:"facebook_uri"`
	InstagramUri      sql.NullString `json:"instagram_uri"`
	YoutubeChannelUri sql.NullString `json:"youtube_channel_uri"`
	Skill             string         `json:"skill"`
	Rate              sql.NullString `json:"rate"`
	Status            sql.NullString `json:"status"`
	CreateDate        time.Time      `json:"create_date"`
	UpdateDate        time.Time      `json:"update_date"`
}

// account_id, self_introduction, twitter_uri, facebook_uri, instagram_uri, youtube_channel_uri, skill, rate, status, create_date, update_date
func (q *Queries) CreateAccount_attribute(ctx context.Context, arg CreateAccount_attributeParams) (sql.Result, error) {
	return q.db.ExecContext(ctx, createAccount_attribute,
		arg.AccountID,
		arg.SelfIntroduction,
		arg.TwitterUri,
		arg.FacebookUri,
		arg.InstagramUri,
		arg.YoutubeChannelUri,
		arg.Skill,
		arg.Rate,
		arg.Status,
		arg.CreateDate,
		arg.UpdateDate,
	)
}

const createAccount_master = `-- name: CreateAccount_master :execresult
INSERT INTO account_master (
  account_id, account_name, mail_addless, password, zip_code, barth_date, time_zone, language, registration_date, create_date, update_date
) VALUES (
  $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
)
`

type CreateAccount_masterParams struct {
	AccountID        string    `json:"account_id"`
	AccountName      string    `json:"account_name"`
	MailAddless      string    `json:"mail_addless"`
	Password         string    `json:"password"`
	ZipCode          string    `json:"zip_code"`
	BarthDate        time.Time `json:"barth_date"`
	TimeZone         string    `json:"time_zone"`
	Language         string    `json:"language"`
	RegistrationDate time.Time `json:"registration_date"`
	CreateDate       time.Time `json:"create_date"`
	UpdateDate       time.Time `json:"update_date"`
}

// account_id, account_name, mail_addless, password, zip_code, barth_date, time_zone, language, registration_date, create_date, update_date
func (q *Queries) CreateAccount_master(ctx context.Context, arg CreateAccount_masterParams) (sql.Result, error) {
	return q.db.ExecContext(ctx, createAccount_master,
		arg.AccountID,
		arg.AccountName,
		arg.MailAddless,
		arg.Password,
		arg.ZipCode,
		arg.BarthDate,
		arg.TimeZone,
		arg.Language,
		arg.RegistrationDate,
		arg.CreateDate,
		arg.UpdateDate,
	)
}

const createOffer_list = `-- name: CreateOffer_list :execresult
INSERT INTO offer_list (
  offer_id, account_id, offer_type, offer_title, offer_severity, offer_catagory, offer_location, offer_status, offer_text, create_date, update_date
) VALUES (
  $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
)
`

type CreateOffer_listParams struct {
	OfferID       string         `json:"offer_id"`
	AccountID     string         `json:"account_id"`
	OfferType     string         `json:"offer_type"`
	OfferTitle    string         `json:"offer_title"`
	OfferSeverity sql.NullString `json:"offer_severity"`
	OfferCatagory sql.NullString `json:"offer_catagory"`
	OfferLocation sql.NullString `json:"offer_location"`
	OfferStatus   string         `json:"offer_status"`
	OfferText     string         `json:"offer_text"`
	CreateDate    time.Time      `json:"create_date"`
	UpdateDate    time.Time      `json:"update_date"`
}

// offer_id, account_id, offer_type, offer_title, offer_severity, offer_catagory, offer_location, offer_status, offer_text, create_date, update_date
func (q *Queries) CreateOffer_list(ctx context.Context, arg CreateOffer_listParams) (sql.Result, error) {
	return q.db.ExecContext(ctx, createOffer_list,
		arg.OfferID,
		arg.AccountID,
		arg.OfferType,
		arg.OfferTitle,
		arg.OfferSeverity,
		arg.OfferCatagory,
		arg.OfferLocation,
		arg.OfferStatus,
		arg.OfferText,
		arg.CreateDate,
		arg.UpdateDate,
	)
}

const createPurchase_histroy = `-- name: CreatePurchase_histroy :execresult
INSERT INTO purchase_histroy (
  purchase_id, purchase_date, purchase_time, payer_account_id, payee_account_id, amount, create_date, update_date
) VALUES (
  $1, $2, $3, $4, $5, $6, $7, $8
)
`

type CreatePurchase_histroyParams struct {
	PurchaseID     string    `json:"purchase_id"`
	PurchaseDate   string    `json:"purchase_date"`
	PurchaseTime   string    `json:"purchase_time"`
	PayerAccountID string    `json:"payer_account_id"`
	PayeeAccountID string    `json:"payee_account_id"`
	Amount         string    `json:"amount"`
	CreateDate     time.Time `json:"create_date"`
	UpdateDate     time.Time `json:"update_date"`
}

// purchase_id, purchase_date, purchase_time, payer_account_id, payee_account_id, amount, create_date, update_date
func (q *Queries) CreatePurchase_histroy(ctx context.Context, arg CreatePurchase_histroyParams) (sql.Result, error) {
	return q.db.ExecContext(ctx, createPurchase_histroy,
		arg.PurchaseID,
		arg.PurchaseDate,
		arg.PurchaseTime,
		arg.PayerAccountID,
		arg.PayeeAccountID,
		arg.Amount,
		arg.CreateDate,
		arg.UpdateDate,
	)
}

const deleteAccount_attribute = `-- name: DeleteAccount_attribute :exec
DELETE FROM account_attribute
WHERE account_id = $1
`

func (q *Queries) DeleteAccount_attribute(ctx context.Context, accountID string) error {
	_, err := q.db.ExecContext(ctx, deleteAccount_attribute, accountID)
	return err
}

const deleteAccount_master = `-- name: DeleteAccount_master :exec
DELETE FROM account_master
WHERE account_id = $1
`

func (q *Queries) DeleteAccount_master(ctx context.Context, accountID string) error {
	_, err := q.db.ExecContext(ctx, deleteAccount_master, accountID)
	return err
}

const deleteOffer_list = `-- name: DeleteOffer_list :exec
DELETE FROM offer_list
WHERE offer_id = $1
`

func (q *Queries) DeleteOffer_list(ctx context.Context, offerID string) error {
	_, err := q.db.ExecContext(ctx, deleteOffer_list, offerID)
	return err
}

const deletePurchase_histroy = `-- name: DeletePurchase_histroy :exec
DELETE FROM purchase_histroy
WHERE purchase_id = $1
`

func (q *Queries) DeletePurchase_histroy(ctx context.Context, purchaseID string) error {
	_, err := q.db.ExecContext(ctx, deletePurchase_histroy, purchaseID)
	return err
}

const getAccount_attribute = `-- name: GetAccount_attribute :one
SELECT account_id, self_introduction, twitter_uri, facebook_uri, instagram_uri, youtube_channel_uri, skill, rate, status, create_date, update_date FROM account_attribute
WHERE account_id = ? LIMIT 1
`

func (q *Queries) GetAccount_attribute(ctx context.Context, accountID string) (AccountAttribute, error) {
	row := q.db.QueryRowContext(ctx, getAccount_attribute, accountID)
	var i AccountAttribute
	err := row.Scan(
		&i.AccountID,
		&i.SelfIntroduction,
		&i.TwitterUri,
		&i.FacebookUri,
		&i.InstagramUri,
		&i.YoutubeChannelUri,
		&i.Skill,
		&i.Rate,
		&i.Status,
		&i.CreateDate,
		&i.UpdateDate,
	)
	return i, err
}

const getAccount_master = `-- name: GetAccount_master :one
SELECT account_id, account_name, mail_addless, password, zip_code, barth_date, time_zone, language, registration_date, create_date, update_date FROM account_master
WHERE account_id = ? LIMIT 1
`

func (q *Queries) GetAccount_master(ctx context.Context, accountID string) (AccountMaster, error) {
	row := q.db.QueryRowContext(ctx, getAccount_master, accountID)
	var i AccountMaster
	err := row.Scan(
		&i.AccountID,
		&i.AccountName,
		&i.MailAddless,
		&i.Password,
		&i.ZipCode,
		&i.BarthDate,
		&i.TimeZone,
		&i.Language,
		&i.RegistrationDate,
		&i.CreateDate,
		&i.UpdateDate,
	)
	return i, err
}

const getOffer_list = `-- name: GetOffer_list :one
SELECT offer_id, account_id, offer_type, offer_title, offer_severity, offer_catagory, offer_location, offer_status, offer_text, create_date, update_date FROM offer_list
WHERE offer_id = ? LIMIT 1
`

func (q *Queries) GetOffer_list(ctx context.Context, offerID string) (OfferList, error) {
	row := q.db.QueryRowContext(ctx, getOffer_list, offerID)
	var i OfferList
	err := row.Scan(
		&i.OfferID,
		&i.AccountID,
		&i.OfferType,
		&i.OfferTitle,
		&i.OfferSeverity,
		&i.OfferCatagory,
		&i.OfferLocation,
		&i.OfferStatus,
		&i.OfferText,
		&i.CreateDate,
		&i.UpdateDate,
	)
	return i, err
}

const getPurchase_histroy = `-- name: GetPurchase_histroy :one
SELECT purchase_id, purchase_date, purchase_time, payer_account_id, payee_account_id, amount, create_date, update_date FROM purchase_histroy
WHERE purchase_id = ? LIMIT 1
`

func (q *Queries) GetPurchase_histroy(ctx context.Context, purchaseID string) (PurchaseHistroy, error) {
	row := q.db.QueryRowContext(ctx, getPurchase_histroy, purchaseID)
	var i PurchaseHistroy
	err := row.Scan(
		&i.PurchaseID,
		&i.PurchaseDate,
		&i.PurchaseTime,
		&i.PayerAccountID,
		&i.PayeeAccountID,
		&i.Amount,
		&i.CreateDate,
		&i.UpdateDate,
	)
	return i, err
}

const listAccount_attribute = `-- name: ListAccount_attribute :many
SELECT account_id, self_introduction, twitter_uri, facebook_uri, instagram_uri, youtube_channel_uri, skill, rate, status, create_date, update_date FROM account_attribute
ORDER BY account_id
`

func (q *Queries) ListAccount_attribute(ctx context.Context) ([]AccountAttribute, error) {
	rows, err := q.db.QueryContext(ctx, listAccount_attribute)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []AccountAttribute
	for rows.Next() {
		var i AccountAttribute
		if err := rows.Scan(
			&i.AccountID,
			&i.SelfIntroduction,
			&i.TwitterUri,
			&i.FacebookUri,
			&i.InstagramUri,
			&i.YoutubeChannelUri,
			&i.Skill,
			&i.Rate,
			&i.Status,
			&i.CreateDate,
			&i.UpdateDate,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const listAccount_master = `-- name: ListAccount_master :many
SELECT account_id, account_name, mail_addless, password, zip_code, barth_date, time_zone, language, registration_date, create_date, update_date FROM account_master
ORDER BY account_id
`

func (q *Queries) ListAccount_master(ctx context.Context) ([]AccountMaster, error) {
	rows, err := q.db.QueryContext(ctx, listAccount_master)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []AccountMaster
	for rows.Next() {
		var i AccountMaster
		if err := rows.Scan(
			&i.AccountID,
			&i.AccountName,
			&i.MailAddless,
			&i.Password,
			&i.ZipCode,
			&i.BarthDate,
			&i.TimeZone,
			&i.Language,
			&i.RegistrationDate,
			&i.CreateDate,
			&i.UpdateDate,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const listOffer_list = `-- name: ListOffer_list :many
SELECT offer_id, account_id, offer_type, offer_title, offer_severity, offer_catagory, offer_location, offer_status, offer_text, create_date, update_date FROM offer_list
ORDER BY offer_id
`

func (q *Queries) ListOffer_list(ctx context.Context) ([]OfferList, error) {
	rows, err := q.db.QueryContext(ctx, listOffer_list)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []OfferList
	for rows.Next() {
		var i OfferList
		if err := rows.Scan(
			&i.OfferID,
			&i.AccountID,
			&i.OfferType,
			&i.OfferTitle,
			&i.OfferSeverity,
			&i.OfferCatagory,
			&i.OfferLocation,
			&i.OfferStatus,
			&i.OfferText,
			&i.CreateDate,
			&i.UpdateDate,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const listPurchase_histroy = `-- name: ListPurchase_histroy :many
SELECT purchase_id, purchase_date, purchase_time, payer_account_id, payee_account_id, amount, create_date, update_date FROM purchase_histroy
ORDER BY purchase_id
`

func (q *Queries) ListPurchase_histroy(ctx context.Context) ([]PurchaseHistroy, error) {
	rows, err := q.db.QueryContext(ctx, listPurchase_histroy)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []PurchaseHistroy
	for rows.Next() {
		var i PurchaseHistroy
		if err := rows.Scan(
			&i.PurchaseID,
			&i.PurchaseDate,
			&i.PurchaseTime,
			&i.PayerAccountID,
			&i.PayeeAccountID,
			&i.Amount,
			&i.CreateDate,
			&i.UpdateDate,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const updateAccount_attribute = `-- name: UpdateAccount_attribute :execresult
UPDATE account_attribute SET self_introduction=$2, twitter_uri=$3, facebook_uri=$4,instagram_uri=$5, youtube_channel_uri=$6, skill=$7, rate=$8, status=$9, create_date=$10, update_date=$11
WHERE account_id=$1
`

type UpdateAccount_attributeParams struct {
	AccountID         string         `json:"account_id"`
	SelfIntroduction  sql.NullString `json:"self_introduction"`
	TwitterUri        sql.NullString `json:"twitter_uri"`
	FacebookUri       sql.NullString `json:"facebook_uri"`
	InstagramUri      sql.NullString `json:"instagram_uri"`
	YoutubeChannelUri sql.NullString `json:"youtube_channel_uri"`
	Skill             string         `json:"skill"`
	Rate              sql.NullString `json:"rate"`
	Status            sql.NullString `json:"status"`
	CreateDate        time.Time      `json:"create_date"`
	UpdateDate        time.Time      `json:"update_date"`
}

func (q *Queries) UpdateAccount_attribute(ctx context.Context, arg UpdateAccount_attributeParams) (sql.Result, error) {
	return q.db.ExecContext(ctx, updateAccount_attribute,
		arg.AccountID,
		arg.SelfIntroduction,
		arg.TwitterUri,
		arg.FacebookUri,
		arg.InstagramUri,
		arg.YoutubeChannelUri,
		arg.Skill,
		arg.Rate,
		arg.Status,
		arg.CreateDate,
		arg.UpdateDate,
	)
}

const updateAccount_master = `-- name: UpdateAccount_master :execresult
UPDATE account_master SET account_name=$2, mail_addless=$3, password=$4, zip_code=$5, barth_date=$6, time_zone=$7, language=$8, registration_date=$9, create_date=$10, update_date=$11
WHERE account_id=$1
`

type UpdateAccount_masterParams struct {
	AccountID        string    `json:"account_id"`
	AccountName      string    `json:"account_name"`
	MailAddless      string    `json:"mail_addless"`
	Password         string    `json:"password"`
	ZipCode          string    `json:"zip_code"`
	BarthDate        time.Time `json:"barth_date"`
	TimeZone         string    `json:"time_zone"`
	Language         string    `json:"language"`
	RegistrationDate time.Time `json:"registration_date"`
	CreateDate       time.Time `json:"create_date"`
	UpdateDate       time.Time `json:"update_date"`
}

func (q *Queries) UpdateAccount_master(ctx context.Context, arg UpdateAccount_masterParams) (sql.Result, error) {
	return q.db.ExecContext(ctx, updateAccount_master,
		arg.AccountID,
		arg.AccountName,
		arg.MailAddless,
		arg.Password,
		arg.ZipCode,
		arg.BarthDate,
		arg.TimeZone,
		arg.Language,
		arg.RegistrationDate,
		arg.CreateDate,
		arg.UpdateDate,
	)
}

const updateOffer_list = `-- name: UpdateOffer_list :execresult
UPDATE offer_list SET account_id=$2, offer_type=$3, offer_title=$4,offer_severity=$5, offer_catagory=$6, offer_location=$7, offer_status=$8, offer_text=$9, create_date=$10, update_date=$11
WHERE offer_id=$1
`

type UpdateOffer_listParams struct {
	OfferID       string         `json:"offer_id"`
	AccountID     string         `json:"account_id"`
	OfferType     string         `json:"offer_type"`
	OfferTitle    string         `json:"offer_title"`
	OfferSeverity sql.NullString `json:"offer_severity"`
	OfferCatagory sql.NullString `json:"offer_catagory"`
	OfferLocation sql.NullString `json:"offer_location"`
	OfferStatus   string         `json:"offer_status"`
	OfferText     string         `json:"offer_text"`
	CreateDate    time.Time      `json:"create_date"`
	UpdateDate    time.Time      `json:"update_date"`
}

func (q *Queries) UpdateOffer_list(ctx context.Context, arg UpdateOffer_listParams) (sql.Result, error) {
	return q.db.ExecContext(ctx, updateOffer_list,
		arg.OfferID,
		arg.AccountID,
		arg.OfferType,
		arg.OfferTitle,
		arg.OfferSeverity,
		arg.OfferCatagory,
		arg.OfferLocation,
		arg.OfferStatus,
		arg.OfferText,
		arg.CreateDate,
		arg.UpdateDate,
	)
}

const updatePurchase_histroy = `-- name: UpdatePurchase_histroy :execresult
UPDATE purchase_histroy SET purchase_date=$2, purchase_time=$3, payer_account_id=$4,payee_account_id=$5, amount=$6, create_date=$7, update_date=$8
WHERE purchase_id=$1
`

type UpdatePurchase_histroyParams struct {
	PurchaseID     string    `json:"purchase_id"`
	PurchaseDate   string    `json:"purchase_date"`
	PurchaseTime   string    `json:"purchase_time"`
	PayerAccountID string    `json:"payer_account_id"`
	PayeeAccountID string    `json:"payee_account_id"`
	Amount         string    `json:"amount"`
	CreateDate     time.Time `json:"create_date"`
	UpdateDate     time.Time `json:"update_date"`
}

func (q *Queries) UpdatePurchase_histroy(ctx context.Context, arg UpdatePurchase_histroyParams) (sql.Result, error) {
	return q.db.ExecContext(ctx, updatePurchase_histroy,
		arg.PurchaseID,
		arg.PurchaseDate,
		arg.PurchaseTime,
		arg.PayerAccountID,
		arg.PayeeAccountID,
		arg.Amount,
		arg.CreateDate,
		arg.UpdateDate,
	)
}