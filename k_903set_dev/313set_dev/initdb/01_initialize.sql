-- DB作成
--CREATE DATABASE hogedb; 

-- 作成したDBへ切り替え
--\c hogedb

-- スキーマ作成
--CREATE SCHEMA hogeschema;

-- ロールの作成
CREATE ROLE hoge WITH LOGIN PASSWORD 'passw0rd';

-- 権限追加
--GRANT ALL PRIVILEGES ON SCHEMA hogeschema TO hoge;
GRANT ALL PRIVILEGES ON *.* TO hoge;


/*---+-----+-----+-----+-----+-----+-----+-----+-----

「.sql」では環境変数は使えないので注意！

「01_initialize.sql」は主としてDDL、DCLを記述する。

DBの管理ユーザ以外にDBを操作できる権限の弱いユーザを
作成する場合のみ「01_initialize.sql」が必要となる。
DBの管理ユーザは.ymlで環境変数を利用して記述する。

-----+-----+-----+-----+-----+-----+-----+-----+---*/