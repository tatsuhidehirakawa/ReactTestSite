CREATE TABLE account_master (
  user_id  BIGINT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
  account_name      text      NOT NULL,
  mail_addless      text      NOT NULL,
  password          text      NOT NULL,
  zip_code          text      NOT NULL,
  barth_date        date      NOT NULL,
  time_zone         text      NOT NULL,
  language          text      NOT NULL,
  status            text      NOT NULL,
  registration_date timestamp NOT NULL,
  rate              text
);

CREATE TABLE account_attribute (
  account_id        BIGINT    NOT NULL,
  self_introduction text,
  twitter_url       text,
  facebook_url      text,
  instagram_url     text,
  youtube_channel   text,
  update_date       timestamp NOT NULL,
  update_id         text      NOT NULL,
  pic_id_01         text      NOT NULL,
  pic_id_02         text,
  pic_id_03         text,
  skill             text      NOT NULL
);