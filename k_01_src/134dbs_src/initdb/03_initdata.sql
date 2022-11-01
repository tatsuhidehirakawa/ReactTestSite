--初期データ(管理者用データ)の記述

INSERT INTO account_attribute
  (account_id,update_date,update_id,pic_id_01,skill)
VALUES ('5e9nr6eka93u','09/07/22','5e9nr6eka93u','5e9nr6eka93u','Successfully loaded the database from PostgreSQL.');

INSERT INTO account_master
  (user_id,account_name,mail_addless,password,zip_code,barth_date,time_zone,language,status,registration_date)
VALUES ('5e9nr6eka93u','Admin','Admin@example.com','a4cjuzn2','123-4567','09/07/22','Asia/Tokyo','Japanese',9,'09/07/22');