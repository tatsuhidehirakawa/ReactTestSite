APIサーバ構築練習①「k213api_dev」  
参考記事：https://qiita.com/smi/items/4a7149759bad15f966a0  
コマンド：  
```
docker compose up # ビルド
docker compose exec web bash # コンテナ入系
go mod init github.com/gin-gonic/gin/v2 # Golangのバージョンに注意
go get # 追加コマンド
go run main.go # サーバ起動
start chrome http://localhost:3000/
```
<!--
cd "C:\Users\tatsu_hira_s\Documents\My Repository\myportfolio_k\k_213api_dev\go"; docker compose up -d; docker compose exec web bash; start chrome http://localhost:3000/
go mod init github.com/gin-gonic/gin/v2 && go get && go run main.go
-->