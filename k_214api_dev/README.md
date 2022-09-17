APIサーバ構築練習①「k214api_dev」  
参考記事：https://future-architect.github.io/articles/20210804a/  
コマンド：  
```
docker compose up # ビルド
docker compose exec web bash # コンテナ入系
go mod init github.com/gin-gonic/gin/v2 # Golangのバージョンに注意
go get # 追加コマンド
go run main.go # サーバ起動
start chrome http://localhost:3000/
```
O/Rマッパー「sqlc」操作  
公式：https://docs.sqlc.dev/en/latest/overview/install.html  
参考①：https://future-architect.github.io/articles/20210804a/  
参考②：https://debimate.jp/2022/06/25/  
使用コマンド：
```
go get github.com/kyleconroy/sqlc/cmd/sqlc





```

<!--
cd "C:\Users\tatsu_hira_s\Documents\My Repository\myportfolio_k\k_214api_dev\go"; docker compose up -d; docker compose exec web bash; start chrome http://localhost:3000/
go mod init github.com/gin-gonic/gin/v2 && go get && go run main.go
-->