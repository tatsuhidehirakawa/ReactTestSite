## 個人開発練習用リポジトリ
by Tatsuhide Hirakawa

－開発方針－  
主として使用する予定の技術スタック  
フロントエンド：TypeScript、React.js、Sass  
バックエンド：Go、PostgreSQL、Docker  
開発環境：VSCode、Git&Github、Windows10  
(※開発環境からDockerで作成しローカルへのミドルウェアのインストールは一切行わない。
ベンダーロックインを避けるためあまりにも便利すぎるクラウドサービス依存は避ける。（ファイルを置くだけでデプロイできてしまうようなサービス等）

現状のファイル・ディレクトリ構成図(抜粋)
```
myportfolio_k
  │
  ├─k_110wbs_re_dev          # WEBサーバ群(開発用／React使用)
  │  ├─k_111wbs_re_dev_c        # CodeSandbox連携
  │  ├─k_121wbs_re_dev_d        # Dockerビルドからの生成(create-react-appで生成される)/.gitignore登録
  │  └─k_131wbs_re_dev_g        # GitHubからのclone
  │
  ├─k_210aps_go_dev          # APサーバ群(開発用／Go使用)
  │  └─k_211aps_go_dev_g        # Goテスト用211番サーバ(Hello World)
  │     └─cmd
  │        └─hello
  │           └─main.go         # Hello World!
  ├─k_310dbs_pg_dev          # DBサーバ群(開発用／PostgreSQL使用)
  │  └─k_311dbs_pg_dev_g
  │
  ├─k_710log_xx_dev          # Syslogサーバ開発用(未着手)
  │
  ├─k_910ext_dk_dev          # Docker／SQL関連リソース群
  │  ├─k_111wbs_dk_dev
  │  │  └─Dockerfile
  │  ├─k_211aps_dk_dev
  │  │  └─Dockerfile
  │  ├─k_311dbs_pg_dev
  │  │  ├─config
  │  │  │  └─postgresql.conf
  │  │  ├─01_initialize.sql
  │  │  └─02_create_table.sql
  │  └─docker-compose.yml       # 121、211、311番サーバ用yamlファイル
  │
  └─READMR.md
```

<!--
ディレクトリ命名規則  

|桁番号|     意 味      | 記 号 |     例     | レベル感 | 備 考 |
| :---: |:---      | :---: | :---      | :---    | :---  |
|桁1|プロジェクト記号  |   k   |個人開発練習|         |       |
|  桁2  |  サーバ番号     | _101  |101サーバ   |         |       |
|&nbsp;&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;&nbsp;| _201  |201サーバ   |         |       |
|  〃   |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| _202  |202サーバ   |         |       |
|  〃   |      〃        | _301  |301サーバ   |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||
|  桁3  |主たる技術スタック| _re  |React.js    |作り込み中|※CodeSandbox<br>(https://codesandbox.io/s/weathered-violet-86tgok)|
|  〃   |      〃        | _go  |Golang      |将来検討予定||
|  〃   |      〃        | _re  |Rails       |錬成中||
|  〃   |      〃        | _pg  |PostgreSQL  |とりあえずサーバは立てた||
|  桁4  | サーバ種別      | _wbs  |Webサーバ   |||
|  〃   |      〃        | _aps  |APサーバ    |||
|  〃   |      〃        | _dbs  |dbサーバ    |||
|  桁5  |生成種別        |   _g   |「git clone」から生成|||
|  〃   |      〃        |   _d  |「docker compose run」から生成|||
|  〃   |      〃        |   _c  |CodeSandboxからインポート|||
-->
