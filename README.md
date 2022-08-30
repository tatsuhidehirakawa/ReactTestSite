## 個人開発練習用リポジトリ
by Tatsuhide Hirakawa

－開発方針－  
方向性：一般的な「CtoC」サイトの雛形構築  
主として使用する予定の技術スタック  
フロントエンド：TypeScript、React.js、Sass、Html  
バックエンド：Go、PostgreSQL  
開発環境：Docker、VSCode、Git&Github、A5:SQL Mk-2、Windows10  
<!--
開発環境からDockerで作成しローカルへのミドルウェアのインストールは一切行わない。  
ベンダーロックインを避けるためあまりにも便利すぎるクラウドサービス依存は避ける。（ファイルを置くだけでデプロイできてしまうようなサービス等）  
CSS-in-JSは情勢をよく観察しデファクトスタンダードが決まるまでは手を出さず様子を見る。  
-->
リポジトリ・ポートフォリオ・ディレクトリ構成図(抜粋)  
```
myportfolio_k
  │
  ├─k_110wbs_dev
  ├─k_111wbs_dev
  ├─k_112wbs_dev          # ポートフォリオ（WEBサーバ）
  │
  ├─k_210aps_dev
  ├─k_211aps_dev
  ├─k_212api_dev          # ポートフォリオ（APIサーバ)
  │
  ├─k_310dbs_dev
  ├─k_311dbs_dev
  ├─k_312dbs_dev          # ポートフォリオ（DBサーバ)
  │
  ├─k_711log_dev
  │
  ├─k_900set_dev
  ├─k_901set_dev
  ├─k_902set_dev          # ポートフォリオ（Dockerファイル群）
  │  ├─111set_dev
  │  │  └─Dockerfile
  │  ├─211set_dev
  │  │  └─Dockerfile
  │  ├─311set_dev
  │  │  ├─config
  │  │  │  └─postgresql.conf
  │  │  └─initdb
  │  │     ├─01_initialize.sql     # DDL,DCL
  │  │     ├─02_create_table.sql   # DML,DCL,DDL
  │  │     └─03_initdata.sql       # DML
  │  └─docker-compose.yml
  │
  ├─k_991set_dev           # Ubuntu22.04.1 LTS,Git
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


```
SAP_dev_Architecture
+-----------+          +-----------+          +-----------+
|           |          |   *212    |          |   *312    |
|           |          | APIServer |          |  DBServer |
|           |          |Golang(Gin)|          | PostgreSQL|
|           |          |           |          |           |
| API call->|<--JSON-->|#443  #5432|<---SQL-->|#5432      |
|           |          +-----------+          +-----------+
|   CLIENT  |          +-----------+
|           |          |   *112    |
|           |          | WebServer |
|           |          |React,Sass |
|           |   HTML   |           |
|        #80|<-CSS,JS--|#8080      |
+-----------+          +-----------+
```
