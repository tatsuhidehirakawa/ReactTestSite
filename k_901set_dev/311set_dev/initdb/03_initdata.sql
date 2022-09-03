--初期データ(管理者用データ)の記述
INSERT INTO account_master
  (user_id,account_name,password,time_zone,language,)
VALUES
  ('5e9nr6eka93u','Admin','${PGSQL_PW}','Asia/Tokyo');


--初期データ(管理者ユーザのログイン情報)をマルチプルインサートを利用し記述する