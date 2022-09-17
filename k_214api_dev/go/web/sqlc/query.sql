-- name: GetAccount_master :one
SELECT * FROM account_master
WHERE user_id = ? LIMIT 1;

-- name: ListAccount_master :many
SELECT * FROM account_master
ORDER BY user_id;

-- name: CreateAccount_master :execresult
INSERT INTO account_master (
  user_id, account_name, mail_addless, password, zip_code, barth_date, time_zone, language, status, registration_date, rate
) VALUES (
  ?, ?
);

-- name: DeleteAccount_master :exec
DELETE FROM account_master
WHERE user_id = ?;


-- name: GetAccount_attribute :one
SELECT * FROM account_attribute
WHERE account_id = ? LIMIT 1;

-- name: ListAccount_attribute :many
SELECT * FROM account_attribute
ORDER BY account_id;

-- name: CreateAccount_attribute :execresult
INSERT INTO account_attribute (
  account_id, self_introduction, twitter_url, facebook_url, instagram_url, youtube_channel, update_date, update_id, pic_id_01, pic_id_02, pic_id_03, skill
) VALUES (
  ?, ?
);

-- name: DeleteAccount_attribute :exec
DELETE FROM account_attribute
WHERE account_id = ?;