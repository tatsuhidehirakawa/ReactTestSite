※作成中  
Web開発用簡易Dockerコンテナ群  
「k_900set_dev」  
使用コンテナ：110wbs_dev、210aps_dev、310dbs_dev  
docker-compose.yml結合に利用
---

１　履 歴  
2022. 8.17 実装開始  
2022. 8.22 Web、AP、DBサーバ用docker-compose.yml及び構築手順を統合(k_900set_dev内／個別のdocker-compose.yml廃止)  
2022. 8.24 210aps_devを使用した本バージョンの実装開始  

２　技術スタック  
Html／CSS／Sass／Golang／JavaScript／PostgreSQL  

３　実行環境  
Windows10／VSCode／Docker  

４　起動コマンド
```
cd k_900set_dev # カレントディレクトリを変更
docker compose run --rm 110wbs_dev sh -c "npm install" # npmインストール
docker compose up # コンテナ群の起動
start chrome http://localhost:3000/ # Webサーバの動作確認（ブラウザ使用）
docker compose exec 210aps_dev go run hello/main.go # APサーバの動作確認  
docker exec -it 310dbs_dev /bin/sh # DBサーバの動作確認
psql -h localhost -U postgres
```
<!--
cd "C:\Users\tatsu_hira_s\Documents\My Repository\myportfolio_k\k_900set_dev"; start chrome http://localhost:3000/; docker compose run --rm 110wbs_dev sh -c "npm install"; docker compose up 
docker compose exec 210aps_dev go run hello/main.go
docker container ls -a; docker exec -it 310dbs_dev /bin/sh
psql -h localhost -U postgres
-->