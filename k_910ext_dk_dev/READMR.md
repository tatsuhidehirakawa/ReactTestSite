セッティング（Docker／SQL)関連ディレクトリ
2022.8.17 実装開始  

１　構築手順  
①　カレントディレクトリを変更（Webサーバ）  
```
cd myportfolio_k\k_111wbs_re_dev
```
②　Webサーバ用「docker compose run」コマンドの実行  
```
docker compose run --rm 111wbs_dev sh -c "npm install"
docker compose run --rm 111wbs_dev sh -c "npm install sass"
```
③　カレントディレクトリを変更（APサーバ）  
```
cd ..\k_211aps_go_dev"
```
④　APサーバ用コンテナをビルド  
```
docker compose build
```
③　カレントディレクトリを変更  
```
cd ..\k_901set_dev"
```
⑤　コンテナの起動  
```
docker compose up
```
④　ブラウザを確認  
```
start chrome http://localhost:3000/
```

２　実行環境  
Docker／Sass／React.Js／Windows10  

<!--
３　今後の課題（覚え書き）  
①引き続きローカルのOSにはDocker Desktop for Windows以外のミドルウェアをインストールせず開発環境はDocker上に構築すること  
②「create-react-app」を使用せずに開発用コンテナを作成すること  
③「docker-compose.yml」ファイルをルートディレクトリ「myportfolio_k」直下で一つにまとめること  
-->
