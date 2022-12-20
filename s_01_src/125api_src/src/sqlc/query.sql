-- name: GetAccount_master :one
SELECT * FROM account_master
WHERE account_id = ? LIMIT 1;

-- name: ListAccount_master :many
SELECT * FROM account_master
ORDER BY account_id;

-- name: CreateAccount_master :execresult
INSERT INTO account_master (
-- account_id, account_name, mail_addless, password, zip_code, barth_date, time_zone, language, registration_date, create_date, update_date
  account_id, account_name, mail_addless, password, zip_code, barth_date, time_zone, language, registration_date, create_date, update_date
) VALUES (
  $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
);

-- name: UpdateAccount_master :execresult
UPDATE account_master SET account_name=$2, mail_addless=$3, password=$4, zip_code=$5, barth_date=$6, time_zone=$7, language=$8, registration_date=$9, create_date=$10, update_date=$11
WHERE account_id=$1;

-- name: DeleteAccount_master :exec
DELETE FROM account_master
WHERE account_id = $1;


-- name: GetAccount_attribute :one
SELECT * FROM account_attribute
WHERE account_id = ? LIMIT 1;

-- name: ListAccount_attribute :many
SELECT * FROM account_attribute
ORDER BY account_id;

-- name: CreateAccount_attribute :execresult
INSERT INTO account_attribute (
-- account_id, self_introduction, twitter_uri, facebook_uri, instagram_uri, youtube_channel_uri, skill, rate, status, create_date, update_date
  account_id, self_introduction, twitter_uri, facebook_uri, instagram_uri, youtube_channel_uri, skill, rate, status, create_date, update_date
) VALUES (
  $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
);

-- name: UpdateAccount_attribute :execresult
UPDATE account_attribute SET self_introduction=$2, twitter_uri=$3, facebook_uri=$4,instagram_uri=$5, youtube_channel_uri=$6, skill=$7, rate=$8, status=$9, create_date=$10, update_date=$11
WHERE account_id=$1; 

-- name: DeleteAccount_attribute :exec
DELETE FROM account_attribute
WHERE account_id = $1;


-- name: GetOffer_list :one
SELECT * FROM offer_list
WHERE offer_id = ? LIMIT 1;

-- name: ListOffer_list :many
SELECT * FROM offer_list
ORDER BY offer_id;

-- name: CreateOffer_list :execresult
INSERT INTO offer_list (
-- offer_id, account_id, offer_type, offer_title, offer_severity, offer_catagory, offer_location, offer_status, offer_text, create_date, update_date
  offer_id, account_id, offer_type, offer_title, offer_severity, offer_catagory, offer_location, offer_status, offer_text, create_date, update_date
) VALUES (
  $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
);

-- name: UpdateOffer_list :execresult
UPDATE offer_list SET account_id=$2, offer_type=$3, offer_title=$4,offer_severity=$5, offer_catagory=$6, offer_location=$7, offer_status=$8, offer_text=$9, create_date=$10, update_date=$11
WHERE offer_id=$1; 

-- name: DeleteOffer_list :exec
DELETE FROM offer_list
WHERE offer_id = $1;

-- name: GetPurchase_histroy :one
SELECT * FROM purchase_histroy
WHERE purchase_id = ? LIMIT 1;

-- name: ListPurchase_histroy :many
SELECT * FROM purchase_histroy
ORDER BY purchase_id;

-- name: CreatePurchase_histroy :execresult
INSERT INTO purchase_histroy (
-- purchase_id, purchase_date, purchase_time, payer_account_id, payee_account_id, amount, create_date, update_date
  purchase_id, purchase_date, purchase_time, payer_account_id, payee_account_id, amount, create_date, update_date
) VALUES (
  $1, $2, $3, $4, $5, $6, $7, $8
);

-- name: UpdatePurchase_histroy :execresult
UPDATE purchase_histroy SET purchase_date=$2, purchase_time=$3, payer_account_id=$4,payee_account_id=$5, amount=$6, create_date=$7, update_date=$8
WHERE purchase_id=$1; 

-- name: DeletePurchase_histroy :exec
DELETE FROM purchase_histroy
WHERE purchase_id = $1;