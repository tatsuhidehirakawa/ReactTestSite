Web開発用Dockerコンテナ群  
「k_901set_dev」＝「111wbs_dev」＋「211aps_dev」＋「311dbs_dev」  
---

１　履 歴  
2022. 8.17 実装開始  
2022. 8.22 Web、AP、DBサーバ用docker-compose.yml及び構築手順を統合(k_901set_dev内／個別のdocker-compose.yml廃止)  

２　技術スタック  
Html／CSS／Sass／Golang／JavaScript／PostgreSQL  

３　実行環境  
Windows10／VSCode／Docker  

４　起動・確認コマンド等  
※以下は全て、コンテナ名が通らない場合はコンテナIDに変えて実行する  
 4-1. カレントディレクトリを変更  
```
cd k_901set_dev
```
 4-2. コンテナビルド（フロントエンド／111wbs_dev）※バックエンドのみの試験の際は省略可  
```
docker compose run --rm 111wbs_dev sh -c "npm install" # npmインストール
```
 4-3. コンテナビルド（バックエンド／211aps_dev、311dbs_dev）※バックエンドのみの試験の際は省略可  
```
docker-compose build --no-cache
```
 4-4. コンテナ起動
```
docker compose up -d # コンテナ群の起動
docker exec -it k_901set_dev-211aps_dev-1 ls # goコンテナのマウント確認
```
 4-5. APサーバからDBサーバへのコンテナ操作  
```
docker exec -it k_901set_dev_211aps_dev bash # コンテナへ入る
go mod init
go get
go run main.go
psql -h k_901set_dev-311dbs_dev-1 -p 5432 -U postgres postgres # アクセス
select * from employee;
```
4-6. APサーバからDBサーバへのping  
```
docker ps # (別ターミナルで)Goのコンテナ確認
docker exec -it k_901set_dev-211aps_dev-1 ping -c 3 311dbs_dev # 311dbs_devへping
```
<!--
３　今後の課題（覚え書き）  
①引き続きローカルのOSにはDocker Desktop for Windows以外のミドルウェアをインストールせず開発環境はDocker上に構築すること  
②「create-react-app」を使用せずに開発用コンテナを作成すること  
③「docker-compose.yml」ファイルをルートディレクトリ「myportfolio_k」直下で一つにまとめること  
-->
