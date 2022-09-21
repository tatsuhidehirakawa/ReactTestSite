## PosrgreSQL+Dockerを利用したWebサーバの構築

参考資料：https://zenn.dev/re24_1986/articles/b76c3fd8f76aec

１　使用コマンド
ディレクトリ移動
```
cd k_314dbs_dev
```
コンテナをビルド
```
docker compose up -d
```
コンテナへ接続
```
docker exec -it 314dbs_dev /bin/sh
```
psqlで接続確認
```
psql -h localhost -U postgres
```
２　DB構成
```
myportfolio_k
  │
  └─k_314dbs_dev
     ├─config
     │  └─postgresql.conf
     ├─01_initialize.sql
     └─02_create_table.sql
```