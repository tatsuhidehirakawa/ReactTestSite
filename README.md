## 個人開発練習用リポジトリ
by Tatsuhide Hirakawa

－開発方針－  
主として使用する予定の技術スタック  
フロントエンド：TypeScript、React.js、Sass  
バックエンド：Go、PostgreSQL、Docker  
開発環境：VSCode、Git&Github、Windows10  
(※開発環境からDockerで作成しローカルへのミドルウェアのインストールは一切行わない)

現状のファイル・ディレクトリ構成図
```
myportfolio_k
  ├─k_100wbs_re_dev          # WEBサーバ群(開発用／React使用)
  │  ├─k_101wbs_re_dev_c        # CodeSandbox連携
  │  ├─k_101wbs_re_dev_d        # Dockerからのビルド(create-react-appで生成される)/.gitignore登録
  │  ├─k_101wbs_re_dev_g        # GitHubからのclone
  │  ├───Dockerfile
  │  └───docker-compose.yml        # ←消したい(rootのdocker-compose.ymlでコントロールしたい)
  ├─k_200aps_go_dev          # APサーバ群(開発用／Go使用)
  │  ├─k_201aps_go_dev_g        # Goテスト用201番サーバ(Hello World)
  │  │  ├─build
  │  │  │  └─Dockerfile
  │  │  ├─cmd
  │  │  ├─docker-compose.yml       # ←消したい(rootのdocker-compose.ymlでコントロールしたい)
  │  │  └─README.md
  │  └─k_202aps_go_dev_g        # 未完成
  │     ├─docker-compose.yml    # 未完成
  │     └─Dockerfile            # 未完成
  ├─k_210aps_ra_dev          # APサーバ群(開発用／Rails使用)
  ├─k_300dbs_pg_dev          # DBサーバ群(開発用／PostgreSQL使用)
  │  ├─k_301dbs_pg_dev_g
  │  │  └─docker-compose.yml       # ←消したい(rootのdocker-compose.ymlでコントロールしたい)
  │  └─k_302dbs_rp_dev_g         # Rails+PGSQL／テスト用／使用予定なし
  ├─k_900log_xx_dev          # Syslogサーバ開発用(未整備)
  └───────docker-compose.yml       # ←新規作成(上の3つのdocker-compose.ymlをこれ一つで賄いたい)
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
