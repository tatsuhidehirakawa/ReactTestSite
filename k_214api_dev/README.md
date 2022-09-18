APIサーバ用コンテナ「k214api_dev」構築手順  

技術スタック：Golang／Gin／sqlc／Docker  

参考①：https://docs.sqlc.dev/en/latest/overview/install.html  
参考②：https://www.youtube.com/watch?v=uBPXNREhZZw  
参考③：https://future-architect.github.io/articles/20210804a/  
参考④：https://debimate.jp/2022/06/25/  

使用コマンド：
```
docker compose up -d
docker exec -it k_214api_dev bash # コンテナ入系
cd go\src # カレントディレクトリ移動
go mod init github.com/xxxxxxxx/yyyyyyyy/ # ？
go get github.com/kyleconroy/sqlc/cmd/sqlc # go.modが生成
go install github.com/kyleconroy/sqlc/cmd/sqlc
sqlc generate --file sqlc/sqlc.yaml
sqlc generate # sqlcのビルド
start chrome http://localhost:3000/ # 動作確認

# 以下は予備メモ
go get github.com/gin-gonic/gin/v2
go get github.com/kyleconroy/sqlc/cmd/sqlc # ※使わない？
go install github.com/kyleconroy/sqlc/cmd/sqlc
go install github.com/gin-gonic/gin/v2
sqlc version # バージョン確認
cd sqlc # ymalファイルの場所に遷移
sqlc generate # sqlcのビルド
sqlc generate --file sqlc/sqlc.yaml
```
<!--
注意点：
・Golangのバージョンを今後固定する必要あり(latestにしない！)
・
・
-->
<!--
cd "C:\Users\tatsu_hira_s\Documents\My Repository\myportfolio_k\k_214api_dev\go"; docker compose up -d; docker compose exec web bash; start chrome http://localhost:3000/
go mod init github.com/gin-gonic/gin/v2 && go get && go run main.go
-->