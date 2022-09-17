CREATE TABLE account_master (
  user_id  BIGINT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
  account_name      text    NOT NULL,
  mail_addless      text    NOT NULL,
  password          text    NOT NULL,
  zip_code          text    NOT NULL,
  barth_date        text    NOT NULL,
  time_zone         text    NOT NULL,
  language          text    NOT NULL,
  status            text    NOT NULL,
  registration_date text    NOT NULL,
);

CREATE TABLE account_attribute (
  account_id  BIGINT  NOT NULL,
  update_date text    NOT NULL,
  update_id   text    NOT NULL,
  pic_id_01   text    NOT NULL,
  skill       text    NOT NULL,
);