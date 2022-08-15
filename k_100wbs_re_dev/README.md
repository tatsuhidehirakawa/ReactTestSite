Webサーバー用Dockerコンテナの構築  



０　現状生起している不具合  
①「create-react-app」コマンドを実行するとこのディレクトリに「node_modules」ディレクトリが生成されてしまう  
　期待する動作：サブディレクトリ「k_101wbs_re_dev_d」一か所のみに「node_modules」を生成  

１　実行コマンド  
①　カレントディレクトリを変更  
```
cd myportfolio_k\k_100wbs_re_dev
```
②　create-react-appを実行
```
docker compose run --rm node sh -c "npm install -g create-react-app && npm install sass && create-react-app k_101wbs_re_dev_d --typescript"
```
③　コンテナをビルド
```
docker compose up
```
④　ブラウザを確認
```
start chrome http://localhost:3000/
```

２　実行環境  
Docker／Sass／React.Js／Windows10  

３　今後の課題  
①「create-react-app」を使用せずに開発用コンテナを作成すること  
②「docker-compose.yml」ファイルをルートディレクトリ「myportfolio_k」直下で一つにまとめること  
