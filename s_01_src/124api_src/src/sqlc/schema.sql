CREATE TABLE account_master (
  account_id          text      NOT NULL,
  account_name        text      NOT NULL,
  mail_addless        text      NOT NULL,
  password            text      NOT NULL,
  zip_code            text      NOT NULL,
  barth_date          date      NOT NULL,
  time_zone           text      NOT NULL,
  language            text      NOT NULL,
  registration_date   timestamp NOT NULL,
  create_date         timestamp NOT NULL,
  update_date         timestamp NOT NULL
);

CREATE TABLE account_attribute (
  account_id          text      NOT NULL,
  self_introduction   text,
  twitter_uri         text,
  facebook_uri        text,
  instagram_uri       text,
  youtube_channel_uri text,
  skill               text      NOT NULL,
  rate                text,
  status              text,
  create_date         timestamp NOT NULL,
  update_date         timestamp NOT NULL
);

CREATE TABLE offer_List (
  offer_id            text      NOT NULL,
  account_id          text      NOT NULL,
  offer_type          text      NOT NULL,
  offer_title         text      NOT NULL,
  offer_severity      text,
  offer_catagory      text,
  offer_location      text,
  offer_status        text      NOT NULL,
  offer_text          text      NOT NULL,
  create_date         timestamp NOT NULL,
  update_date         timestamp NOT NULL
);

CREATE TABLE purchase_histroy (
  purchase_id         text      NOT NULL,
  purchase_date       text      NOT NULL,
  purchase_time       text      NOT NULL,
  payer_account_id    text      NOT NULL,
  payee_account_id    text      NOT NULL,
  amount              text      NOT NULL,
  create_date         timestamp NOT NULL,
  update_date         timestamp NOT NULL
);