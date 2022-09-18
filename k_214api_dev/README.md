APIサーバ用コンテナ「k214api_dev」構築手順  

技術スタック：Golang／Gin／sqlc／Docker  

参考①：https://docs.sqlc.dev/en/latest/overview/install.html  
参考②：https://www.youtube.com/watch?v=uBPXNREhZZw
参考③：https://future-architect.github.io/articles/20210804a/  
参考④：https://debimate.jp/2022/06/25/  

使用コマンド：
```
# コンテナビルド／コンテナ入系
docker compose up -d;docker compose exec web bash

# ディレクトリ移動
cd go\src\sqlc

# 使用するフレームワーク・ライブラリのインポート
go mod init
go get github.com/gin-gonic/gin/v2
go get github.com/kyleconroy/sqlc/cmd/sqlc
go install github.com/kyleconroy/sqlc/cmd/sqlc # 旧バージョン？基本使わない
sqlc version # バージョン確認
cd sqlc # ymalファイルの場所に遷移する必要あり
sqlc init
sqlc generate # sqlcのビルド
sqlc generate --file sqlc/sqlc.yaml

# サーバ起動
go run main.go

# 動作確認
start chrome http://localhost:3000/
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