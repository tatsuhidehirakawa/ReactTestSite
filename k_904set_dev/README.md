Web開発用Dockerコンテナ群  
「k_904set_dev（「k_214api_dev」＋「314dbs_dev」）」  
の起動・操作手順  
---

１. 履 歴  
2022. 8.17 実装開始（902dbs_dev）  
2022. 8.22 docker-compose.ymlを統合（902dbs_dev）  
2022. 8.27 環境変数を導入（902dbs_dev）  
2022. 8.28 APからAPIへの以降作業開始（212api_dev）  
2022. 9. 3 「.sql」ファイルのコードを実装（902dbs_dev）  
2022. 9.17 「sqlc」を実装（214api_dev）  

２. 技術スタック  
214api_dev：Golang(Gin,sqlc)  
314dbs_dev：PostgreSQL  
904dbs_dev：Docker／A5:SQL MK-2  

３. 実行環境  
Windows10／VSCode／Docker desktop for Windows   

４. 起動・確認コマンド等  
```
docker compose up -d
docker exec -it k_904set_dev-214api_dev-1 bash # コンテナ入系
cd go\src # カレントディレクトリ確認
go mod init github.com/xxxxxxxx/yyyyyyyy/ # go.modが生成
go get github.com/kyleconroy/sqlc/cmd/sqlc # go.sumが生成
go install github.com/kyleconroy/sqlc/cmd/sqlc # 処理に57秒
sqlc version # インストール確認
sqlc generate --file sqlc/sqlc.yaml # sqlcのビルド
cd sqlc/build_sqlc && go mod init sqlc_pkg && cd ../.. && go get sqlc_pkg 
```
シェルはここまで
```
# ローカルモジュール「sqlc_pkg」のインポート
# ↓
# 「src/web/go.mod」の末尾に「replace sqlc_pkg => ./sqlc/build_sqlc」を加える。
# ↓
go mod tidy && go run main.go
start chrome http://localhost:3000/ # 動作確認

# 以下は予備メモ
go get github.com/gin-gonic/gin/v2
go install github.com/gin-gonic/gin/v2
```
<!--
go mod init github.com/goark/pa-api && go get github.com/kyleconroy/sqlc/cmd/sqlc && go install github.com/kyleconroy/sqlc/cmd/sqlc && sqlc version && sqlc generate --file sqlc/sqlc.yaml && cd sqlc/build_sqlc && go mod init sqlc_pkg && cd ../.. && go get sqlc_pkg
-->
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

５．開発方針  
　CSS-in-JavaScriptには当面手を出さない。  
　Paas利用は極力避ける。  
　ファイル名の命名規則を浸透させることによりディレクトリ依存を避けネストを極力浅く保つ。  
<!--
３　今後の課題（覚え書き）  
①引き続きローカルのOSにはDocker Desktop for Windows以外のミドルウェアをインストールせず開発環境はDocker上に構築すること  
②「create-react-app」を使用せずに開発用コンテナを作成すること  
③「docker-compose.yml」ファイルをルートディレクトリ「myportfolio_k」直下で一つにまとめること  
-->
６．参考文献  
① https://docs.sqlc.dev/en/latest/overview/install.html  
② https://www.youtube.com/watch?v=uBPXNREhZZw  
③ https://future-architect.github.io/articles/20210804a/  
④ https://debimate.jp/2022/06/25/  
