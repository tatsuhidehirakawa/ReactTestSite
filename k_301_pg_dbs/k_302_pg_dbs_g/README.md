## PosrgreSQL+Dockerを利用したWebサーバの構築

参考資料：https://qiita.com/optimisuke/items/911cd8756bdbfeb4815a


立ち上げ：
```
docker network create postgres-test-network
docker-compose up -d
```
DBへのアクセス
```
docker exec -it k_302_pg_dbs_g_db_1 /bin/sh
psql -h localhost -U
```
DB操作
```
CREATE DATABASE hogedb;  
```


