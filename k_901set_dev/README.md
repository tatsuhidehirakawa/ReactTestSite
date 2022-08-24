Web開発用Dockerコンテナ群  
「k_901set_dev」  
使用コンテナ：111wbs_dev、211aps_dev、311dbs_dev  
---

１　履 歴  
2022. 8.17 実装開始  
2022. 8.22 Web、AP、DBサーバ用docker-compose.yml及び構築手順を統合(k_901set_dev内／個別のdocker-compose.yml廃止)  

２　技術スタック  
Html／CSS／Sass／Golang／JavaScript／PostgreSQL  

３　実行環境  
Windows10／VSCode／Docker  

４　起動コマンド
```
cd k_901set_dev # カレントディレクトリを変更
docker compose run --rm 111wbs_dev sh -c "npm install" # Webサーバ用npmインストール
docker compose up # コンテナ群の起動
start chrome http://localhost:3000/ # Webサーバの動作確認（ブラウザ使用）
docker compose exec 211aps_dev go run hello/main.go # APサーバの動作確認  
docker exec -it 311dbs_dev /bin/sh # DBサーバの動作確認
psql -h localhost -U postgres
```

<!--
３　今後の課題（覚え書き）  
①引き続きローカルのOSにはDocker Desktop for Windows以外のミドルウェアをインストールせず開発環境はDocker上に構築すること  
②「create-react-app」を使用せずに開発用コンテナを作成すること  
③「docker-compose.yml」ファイルをルートディレクトリ「myportfolio_k」直下で一つにまとめること  
-->
