## PosrgreSQL+Dockerを利用したWebサーバの構築

参考資料：https://qiita.com/smi/items/4a7149759bad15f966a0


立ち上げ：
```
docker-compose up
```
？lib/pqをgo get。ドライバー？記事参照。
```
docker-compose exec goapp go get github.com/lib/pq
docker-compose exec goapp go run main.go
```
DB操作
```
CREATE DATABASE hogedb;  
```


