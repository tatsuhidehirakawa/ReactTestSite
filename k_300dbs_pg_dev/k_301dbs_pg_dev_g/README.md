## PosrgreSQL+Dockerを利用したWebサーバの構築

参考資料：https://zenn.dev/re24_1986/articles/b76c3fd8f76aec


ディレクトリ移動
```
cd k_300dbs_pg_dev\k_301dbs_pg_dev_g
```
コンテナをビルド
```
docker compose up -d
```
コンテナへ接続
```
docker exec -it k_301_pg_dbs_g_node /bin/sh
```
psqlで接続確認
```
psql -h localhost -U postgres
```

