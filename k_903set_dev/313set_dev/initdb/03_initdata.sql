--初期データ(管理者用データ)の記述

INSERT INTO account_attribute (
  account_id,
  update_date,
  update_id,
  pic_id_01,
  skil
)
VALUES (
  '5e9nr6eka93u',
  '09/07/22',
  '5e9nr6eka93u',
  '5e9nr6eka93u',
  'SystemAdministrator'
);

INSERT INTO account_master (
  user_id,
  account_name,
  mail_addless,
  password,
  time_zone,
  language,
  status,
  registration_date,
)
VALUES (
  '5e9nr6eka93u',
  'Admin',
  'Admin@example.com',
  'a4cjuzn2',
  'Asia/Tokyo',
  'Japanese',
  'Admin',
  '09/07/22'
);