-- Project Name : noname
-- Date/Time    : 2022/09/03 13:11:45
-- Author       : tatsu_hira_s
-- RDBMS Type   : PostgreSQL
-- Application  : A5:SQL Mk-2

/*
  << 注意！！ >>
  BackupToTempTable, RestoreFromTempTable疑似命令が付加されています。
  これにより、drop table, create table 後もデータが残ります。
  この機能は一時的に $$TableName のような一時テーブルを作成します。
  この機能は A5:SQL Mk-2でのみ有効であることに注意してください。
*/

-- account_attribute
--* RestoreFromTempTable
create table account_attribute (
  account_id varchar(100) not null
  , self_introduction character varying(1000)
  , twitter_url character varying
  , facebook_url character varying
  , instagram_url character varying
  , youtube_channel character varying
  , update_date timestamp not null
  , update_id character varying not null
  , pic_id_01 character varying not null
  , pic_id_02 character varying
  , pic_id_03 character varying
  , skill character varying(1000) not null
  , constraint account_attribute_PKC primary key (account_id)
) ;

-- account_master
--* RestoreFromTempTable
create table account_master (
  user_id varchar(64) not null
  , account_name varchar(20) not null
  , mail_addless character varying not null
  , password varchar(64) not null
  , zip_code character varying not null
  , barth_date date not null
  , time_zone character varying not null
  , language character varying not null
  , status varchar(1) not null
  , registration_date timestamp not null
  , rate character varying
  , constraint account_master_PKC primary key (user_id)
) ;

comment on table account_attribute is 'account_attribute';
comment on column account_attribute.account_id is 'Account-ID:アカウントID';
comment on column account_attribute.self_introduction is 'Self Introduction';
comment on column account_attribute.twitter_url is 'Twitter URL:ツイッターID';
comment on column account_attribute.facebook_url is 'Facebook URL:フェイスブックID';
comment on column account_attribute.instagram_url is 'Instagram URL:インスタグラムID';
comment on column account_attribute.youtube_channel is 'YouTube Channel:YouTubeID';
comment on column account_attribute.update_date is 'Update Date:更新日';
comment on column account_attribute.update_id is 'update id:更新者';
comment on column account_attribute.pic_id_01 is 'Picture ID 1:プロフィール写真1';
comment on column account_attribute.pic_id_02 is 'Picture ID 2:プロフィール写真2';
comment on column account_attribute.pic_id_03 is 'Picture ID 3:プロフィール写真3';
comment on column account_attribute.skill is 'skill:スキル';

comment on table account_master is 'account_master';
comment on column account_master.user_id is 'User ID:ユーザID';
comment on column account_master.account_name is 'Account Name:氏名';
comment on column account_master.mail_addless is 'Mail Addless:メールアドレス';
comment on column account_master.password is 'Password:パスワード';
comment on column account_master.zip_code is 'Zip Code:郵便番号';
comment on column account_master.barth_date is 'Barth Date:誕生日';
comment on column account_master.time_zone is 'Time Zone:タイムゾーン';
comment on column account_master.language is 'Language:言語';
comment on column account_master.status is 'Status:ステータス';
comment on column account_master.registration_date is 'Registration Date:登録日';
comment on column account_master.rate is 'Rate:評価';

