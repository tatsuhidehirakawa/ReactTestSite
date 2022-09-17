SELECT
    *
FROM
    user
WHERE
    id = ?
LIMIT
    1;
 
-- name: ListUsers :many
SELECT
    *
FROM
    user
ORDER BY
    created_at ASC;
 
-- name: CreateUser :execresult
INSERT INTO
    user (id, name, created_at, updated_at)
VALUES
    (?, ?, ?, ?);
 
-- name: UpdateUserName :execresult
UPDATE
    user
SET
    name = ?,
    updated_at = ?
WHERE
    id = ?;
 
-- name: UpsertUser :execresult
INSERT INTO
    user (id, name, created_at, updated_at)
VALUES
    (?, ?, ?, ?) ON DUPLICATE KEY
UPDATE
    name = ?,
    updated_at = ?;
 
-- name: DeleteUser :execrows
DELETE FROM
    user
WHERE
    id = ?;
 
-- name: ListUserDepartment :many
SELECT
    u.name AS user_name,
    d.name AS department_name
FROM
    user_department_relation AS udr
    LEFT JOIN user AS u ON udr.user_id = u.id
    LEFT JOIN department AS d ON udr.department_id = d.id;