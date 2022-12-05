--初期データ(管理者用データ)の記述

INSERT INTO purchase_histroy
  (purchase_id,purchase_date,purchase_time,payer_account_id,payee_account_id,amount,create_date,update_date)
VALUES ('5e9nr6eka93u','03/01/19','2019-03-01 10:00:00','5e9nr6eka93u','5e9nr6eka93u',5000,'11/30/22','09/07/22');

INSERT INTO account_attribute
  (account_id,update_date,update_id,pic_id_01,skill)
VALUES ('5e9nr6eka93u','09/07/22','5e9nr6eka93u','5e9nr6eka93u','Successfully loaded the database from PostgreSQL.');

INSERT INTO account_master
  (account_id,account_name,mail_addless,password,zip_code,barth_date,time_zone,language,status,registration_date)
VALUES ('5e9nr6eka93u','Admin','Admin@example.com','a4cjuzn2','123-4567','09/07/22','Asia/Tokyo','Japanese',9,'09/07/22');

INSERT INTO offer_list
  (offer_id,account_id,offer_type,offer_title,offer_status,offer_text,create_date,update_date)
VALUES ('5e9nr6eka93u','5e9nr6eka93u','1','xyz','2','abc','09/07/22','09/07/22');