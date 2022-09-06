Web開発用Dockerコンテナ群「k_901set_dev（「111wbs_dev」＋「211aps_dev」＋「311dbs_dev」）」の起動・操作手順  
---

１. 履 歴  
2022. 8.17 実装開始  
2022. 8.22 Web、AP、DBサーバ用docker-compose.yml及び構築手順を統合(k_901set_dev内／個別のdocker-compose.yml廃止)  
2022. 8.27 環境変数を導入  

２. 技術スタック  
111wbs_dev：React.js／Html／CSS／Sass／JavaScript  
211aps_dev：Golang  
311dbs_dev：PostgreSQL  
901dbs_dev：Docker  

３. 実行環境  
Windows10／VSCode／Docker desktop for Windows  

４. 起動・確認コマンド等  
　※以下は全て、コンテナ名が通らない場合はコンテナIDに変えて実行する  

 4_1. 211、311番コンテナ群の起動操作  
```
cd k_901set_dev # 901番ディレクトリへカレントを変更
docker-compose build --no-cache; docker compose up -d
```
 4_2. 211番（APサーバ）から311番（DBサーバ）へのコンテナ操作  
 ※注意：goのコマンドをコピーする際は末尾に「~」が付加されないように注意すること！
```
docker exec -it k_901set_dev-211aps_dev-1 ls # バインドマウント確認
docker exec -it k_901set_dev-211aps_dev-1 bash # コンテナへ入る
go mod init && go get && go run main.go
psql -h k_901set_dev-310dbs_dev-1 -p 5432 -U postgres postgres # アクセス
select * from employee;
```
4-3. 211番（APサーバ）から311番（DBサーバ）へのping  
```
docker ps # Goのコンテナ確認(別ターミナルで)
docker exec -it k_901set_dev-211aps_dev-1 ping -c 3 311dbs_dev # 311dbs_devへping
```
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
