-- name: GetAccount_master :one
SELECT * FROM account_master
WHERE user_id = ? LIMIT 1;

-- name: ListAccount_master :many
SELECT * FROM account_master
ORDER BY user_id;

-- name: CreateAccount_master :execresult
INSERT INTO account_master (
-- user_id, account_name, mail_addless, password, zip_code, barth_date, time_zone, language, status, registration_date, rate
  user_id, account_name, mail_addless, password, zip_code, barth_date, time_zone, language, status, registration_date, rate
) VALUES (
  $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
);

-- name: UpdateAccount_master :execresult
UPDATE account_master SET account_name=$2, mail_addless=$3, password=$4, zip_code=$5, barth_date=$6, time_zone=$7, language=$8, status=$9, registration_date=$10, rate=$11
WHERE user_id=$1;

-- name: DeleteAccount_master :exec
DELETE FROM account_master
WHERE user_id = $1;

-- name: GetAccount_attribute :one
SELECT * FROM account_attribute
WHERE account_id = ? LIMIT 1;

-- name: ListAccount_attribute :many
SELECT * FROM account_attribute
ORDER BY account_id;

-- name: CreateAccount_attribute :execresult
INSERT INTO account_attribute (
-- account_id, self_introduction, twitter_url, facebook_url, instagram_url, youtube_channel, update_date, update_id, pic_id_01, pic_id_02, pic_id_03, skill
  account_id, self_introduction, twitter_url, facebook_url, instagram_url, youtube_channel, update_date, update_id, pic_id_01, pic_id_02, pic_id_03, skill
) VALUES (
  $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12
);

-- name: UpdateAccount_attribute :execresult
UPDATE account_attribute SET self_introduction=$2, twitter_url=$3, facebook_url=$4,instagram_url=$5, youtube_channel=$6, update_date=$7, update_id=$8, pic_id_01=$9, pic_id_02=$10, pic_id_03=$11, skill=$12
WHERE account_id=$1; 

-- name: DeleteAccount_attribute :exec
DELETE FROM account_attribute
WHERE account_id = $1;