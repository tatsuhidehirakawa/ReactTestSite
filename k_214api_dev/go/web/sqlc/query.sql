-- name: GetAccount_master :one
SELECT * FROM account_master
WHERE account_id = ? LIMIT 1;

-- name: ListAccount_master :many
SELECT * FROM account_master
ORDER BY name;

-- name: CreateAccount_master :execresult
INSERT INTO account_master (
  update_date, update_id, pic_id_01, skill
) VALUES (
  ?, ?
);

-- name: DeleteAccount_master :exec
DELETE FROM account_master
WHERE account_id = ?;


-- name: GetAccount_attribute :one
SELECT * FROM account_attribute
WHERE account_id = ? LIMIT 1;

-- name: ListAccount_attribute :many
SELECT * FROM account_attribute
ORDER BY name;

-- name: CreateAccount_attribute :execresult
INSERT INTO account_attribute (
  update_date, update_id, pic_id_01, skill
) VALUES (
  ?, ?
);

-- name: DeleteAccount_attribute :exec
DELETE FROM account_attribute
WHERE account_id = ?;