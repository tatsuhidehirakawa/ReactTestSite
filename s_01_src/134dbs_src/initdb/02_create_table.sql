-- Project Name : noname
-- Date/Time    : 2022/12/06 0:30:15
-- Author       : tatsu_hira_s
-- RDBMS Type   : Oracle Database
-- Application  : A5:SQL Mk-2

/*
  << 注意！！ >>
  BackupToTempTable, RestoreFromTempTable疑似命令が付加されています。
  これにより、drop table, create table 後もデータが残ります。
  この機能は一時的に $$TableName のような一時テーブルを作成します。
  この機能は A5:SQL Mk-2でのみ有効であることに注意してください。
*/

-- purchase_histroy
--* RestoreFromTempTable
create table purchase_histroy (
  purchase_id VARCHAR2 not null
  , purchase_date DATE not null
  , purchase_time DATE not null
  , payer_account_id VARCHAR2 not null
  , payee_account_id VARCHAR2 not null
  , amount NUMBER not null
  , create_date timestamp(6) without time zone not null
  , update_date timestamp(6) without time zone not null
  , constraint purchase_histroy_PKC primary key (purchase_id,payer_account_id,payee_account_id)
) ;

-- account_attribute
--* RestoreFromTempTable
create table account_attribute (
  account_id character varying(100) not null
  , self_introduction character varying(1000)
  , twitter_uri character varying
  , facebook_uri character varying
  , instagram_uri character varying
  , youtube_channel_uri character varying
  , skill character varying(1000) not null
  , rate character varying
  , status character varying(1)
  , create_date timestamp(6) without time zone not null
  , update_date timestamp(6) without time zone not null
  , constraint account_attribute_PKC primary key (account_id)
) ;

-- account_master
--* RestoreFromTempTable
create table account_master (
  account_id character varying(64) not null
  , account_name character varying(20) not null
  , mail_addless character varying not null
  , password character varying(64) not null
  , zip_code character varying not null
  , barth_date date not null
  , time_zone character varying not null
  , language character varying not null
  , registration_date timestamp(6) without time zone not null
  , create_date timestamp(6) without time zone not null
  , update_date timestamp(6) without time zone not null
  , constraint account_master_PKC primary key (account_id)
) ;

-- offer_list
--* RestoreFromTempTable
create table offer_list (
  offer_id VARCHAR2(64) not null
  , account_id VARCHAR2(64) not null
  , offer_type VARCHAR2(1) not null
  , offer_title VARCHAR2 not null
  , offer_severity VARCHAR2
  , offer_catagory VARCHAR2
  , offer_location VARCHAR2
  , offer_status VARCHAR2(1) not null
  , offer_text VARCHAR2(140) not null
  , create_date timestamp(6) without time zone not null
  , update_date timestamp(6) without time zone not null
  , constraint offer_list_PKC primary key (offer_id,account_id)
) ;

comment on table purchase_histroy is 'purchase_histroy:課金処理用テーブル';
comment on column purchase_histroy.purchase_id is 'Purchase ID';
comment on column purchase_histroy.purchase_date is 'Purchase Date';
comment on column purchase_histroy.purchase_time is 'Purchase Time';
comment on column purchase_histroy.payer_account_id is 'Payer Account ID:account_idと連動';
comment on column purchase_histroy.payee_account_id is 'Payee Account ID:account_idと連動';
comment on column purchase_histroy.amount is 'Amount';
comment on column purchase_histroy.create_date is 'Create_Date:作成日';
comment on column purchase_histroy.update_date is 'Update Date:更新日';

comment on table account_attribute is 'account_attribute';
comment on column account_attribute.account_id is 'Account ID:アカウントID';
comment on column account_attribute.self_introduction is 'Self Introduction';
comment on column account_attribute.twitter_uri is 'Twitter URI:ツイッターID';
comment on column account_attribute.facebook_uri is 'Facebook URI:フェイスブックID';
comment on column account_attribute.instagram_uri is 'Instagram URI:インスタグラムID';
comment on column account_attribute.youtube_channel_uri is 'YouTube Channel URI:YouTubeID';
comment on column account_attribute.skill is 'Skill:スキル';
comment on column account_attribute.rate is 'Rate:評価';
comment on column account_attribute.status is 'Status:ステータス';
comment on column account_attribute.create_date is 'Create Date:作成日';
comment on column account_attribute.update_date is 'Update Date:更新日';

comment on table account_master is 'account_master';
comment on column account_master.account_id is 'Account ID:ユーザID';
comment on column account_master.account_name is 'Account Name:氏名';
comment on column account_master.mail_addless is 'Mail Addless:メールアドレス';
comment on column account_master.password is 'Password:パスワード';
comment on column account_master.zip_code is 'Zip Code:郵便番号';
comment on column account_master.barth_date is 'Barth Date:誕生日';
comment on column account_master.time_zone is 'Time Zone:タイムゾーン';
comment on column account_master.language is 'Language:言語';
comment on column account_master.registration_date is 'Registration Date:登録日';
comment on column account_master.create_date is 'Create_Date:作成日';
comment on column account_master.update_date is 'Update Date:更新日';

comment on table offer_list is 'offer_list:オファー台帳（catalog）';
comment on column offer_list.offer_id is 'Offer ID:オファーID';
comment on column offer_list.account_id is 'Account ID:ユーザID';
comment on column offer_list.offer_type is 'Offer Type:オファー種別';
comment on column offer_list.offer_title is 'Offer Title:オファー題目';
comment on column offer_list.offer_severity is 'Offer Severity:オファー優先度';
comment on column offer_list.offer_catagory is 'Offer Catagory:オファー・カテゴリ';
comment on column offer_list.offer_location is 'Offer Location:オファー場所';
comment on column offer_list.offer_status is 'Offer Status';
comment on column offer_list.offer_text is 'Offer Text:オファー文';
comment on column offer_list.create_date is 'Create Date:作成日';
comment on column offer_list.update_date is 'Update Date:更新日';

