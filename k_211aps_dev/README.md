## PosrgreSQL+Dockerを利用したWebサーバの構築

参考資料：https://qiita.com/optimisuke/items/911cd8756bdbfeb4815a


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


