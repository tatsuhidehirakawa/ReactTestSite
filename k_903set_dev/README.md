Web開発用Dockerコンテナ群  
「k_902set_dev（「111wbs_dev」＋「212api_dev」＋「311dbs_dev」）」  
の起動・操作手順  
---

１. 履 歴  
2022. 8.17 実装開始（902dbs_dev）  
2022. 8.22 docker-compose.ymlを統合（902dbs_dev）  
2022. 8.27 環境変数を導入（902dbs_dev）  
2022. 8.28 APからAPIへの以降作業開始（212api_dev）  
2022. 9. 3 「.sql」ファイルのコードを実装（902dbs_dev）  
2022. 9. 6 (予定)REST（ULCODC$SS）コンポーネントを実装（112wbs_dev）  

２. 技術スタック  
112wbs_dev：React.js／Html／Sass／（TypeScript）  
212api_dev：Golang(Gin)  
312dbs_dev：PostgreSQL  
902dbs_dev：Docker／A5:SQL MK-2  

３. 実行環境  
Windows10／VSCode／Docker desktop for Windows   

４. 起動・確認コマンド等  
　※以下は全て、コンテナ名が通らない場合はコンテナIDに変えて実行する  

 4_1. 911番ディレクトリへカレントを変更  
```
cd k_901set_dev
```
 4_2. 111番コンテナビルド（111wbs_dev／※バックエンドのみの試験の際は省略）  
```
docker compose run --rm 111wbs_dev sh -c "npm install" # npmインストール
```
 4_3. 212番コンテナのビルド（212api_dev、311dbs_dev／※フロントエンドのみの試験の際は省略）  
```
docker-compose build --no-cache
```
 4_4. 111、212、311番コンテナ群の起動
```
docker compose up -d
```
 4_5. 212番（APiサーバ）から311番（DBサーバ）へのコンテナ操作  
```
docker exec -it k_902set_dev-212api_dev ls # goコンテナのバインドマウントの確認
docker exec -it k_902set_dev_212api_dev bash # コンテナへ入る
go mod init
go get
go run main.go
psql -h k_902set_dev-311dbs_dev -p 5432 -U postgres postgres # アクセス
select * from employee;
```
4-6. 212番（APIサーバ）から311番（DBサーバ）へのping  
```
docker ps # Goのコンテナ確認(別ターミナルで)
docker exec -it k_901set_dev-212api_dev ping -c 3 311dbs_dev # 311dbs_devへping
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
