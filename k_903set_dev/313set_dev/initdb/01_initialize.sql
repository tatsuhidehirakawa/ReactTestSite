-- DB作成
--CREATE DATABASE hogedb; 

-- 作成したDBへ切り替え
--\c hogedb

-- スキーマ作成
--CREATE SCHEMA hogeschema;

-- ロールの作成
CREATE ROLE ${PGSQL_ID} WITH LOGIN PASSWORD '${PGSQL_PW}';

-- 権限追加
--GRANT ALL PRIVILEGES ON SCHEMA hogeschema TO hoge;
GRANT ALL PRIVILEGES ON *.* TO hoge;