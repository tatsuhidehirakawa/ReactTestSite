Webサーバー用Dockerコンテナ作成ディレクトリ
Webserver（Docker／CreateReactApp／Sass／Windows10）の構築

実行コマンド
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

