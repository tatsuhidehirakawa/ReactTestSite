Webサーバー開発用Dockerコンテナの構築  
2022.7.25 実装開始  

０　現状生起している不具合  
①カレントディレクトリが「k_100wbs_re_dev」の状態で「create-react-app(１－②)」コマンドを実行すると、カレントディレクトリ「k_100wbs_re_dev」とサブディレクトリ「k_101wbs_re_dev_d」の２箇所に「node_modules」ディレクトリが生成されてしまう  
→期待する動作：サブディレクトリ「k_101wbs_re_dev_d」内の一か所のみに「node_modules」を生成  

１　構築に使用するコマンド  
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

３　今後の課題（覚え書き）  
①引き続きローカルのOSにはDocker Desktop for Windows以外のミドルウェアをインストールせず開発環境はDocker上に構築すること  
②「create-react-app」を使用せずに開発用コンテナを作成すること  
③「docker-compose.yml」ファイルをルートディレクトリ「myportfolio_k」直下で一つにまとめること  
