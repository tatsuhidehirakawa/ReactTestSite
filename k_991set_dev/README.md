Linuxターミナル利用のためのDockerコンテナ(作成中)  
「k_991set_dev」  
---

１　履 歴  
2022. 8.25 実装開始  

２　技術スタック  
ubuntu Latestバージョン  

３　実行環境  
Windows10／VSCode／Docker  
VSCodeに拡張機能「Remote - Containers」を入れ、本コンテナを選択する。  

４　起動コマンド  
```
cd k_991set_dev # カレントディレクトリを変更
docker compose up # コンテナ群の起動
docker exec -it コンテナ名 ls # バインドマウント内容の確認
```
５　コンテナ内でのコマンド操作（参考）  
```
cat /etc/issue # Ubuntuのバージョン確認
```