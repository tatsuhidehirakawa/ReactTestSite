Web開発用Dockerコンテナ群  
「k_902set_dev（「111wbs_dev」＋「212api_dev」＋「311dbs_dev」）」  
の起動・操作手順  
---

１. 履 歴  
2022. 8.17 実装開始（900set_dev）  
2022. 8.22 docker-compose.ymlを統合（900set_dev）  
2022. 8.27 環境変数を導入（901set_dev）  
2022. 8.28 APからAPIへの以降試験開始（212api_dev）  
2022. 9. 3 「.sql」ファイルのコードを実装（903set_dev）  
2022. 9. 6 (予定)REST（ULCODC$SS）コンポーネントを実装（904set_dev）  

２. 技術スタック  
313dbs_dev：PostgreSQL  
903dbs_dev：Docker／A5:SQL MK-2  

３. 実行環境  
Windows10／VSCode／Docker desktop for Windows   

４. 起動・確認コマンド等  
　※以下は全て、コンテナ名が通らない場合はコンテナIDに変えて実行する  

 4_1. 903番ディレクトリへカレントを変更  
```
cd k_901set_dev
```
 4_4. 313番コンテナ群の起動
```
docker compose up -d
docker exec -it k_903set_dev-313dbs_dev-1 /bin/sh
psql -h localhost -U postgres
```
