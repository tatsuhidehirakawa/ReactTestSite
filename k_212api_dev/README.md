APIサーバ構築練習①／k212api_dev
参考記事：https://qiita.com/smi/items/4a7149759bad15f966a0
コマンド
```
docker-compose up # ビルド
docker-compose exec web bash # コンテナ入系
go mod init
go get github.com/gin-gonic/gin # モジュール追加
go run main.go # サーバ起動
start chrome http://localhost:3000/
```
