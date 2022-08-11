## 個人開発練習用リポジトリ
by Tatsuhide Hirakawa

主として使用する予定の技術スタック  
フロントエンド：TypeScript、React.js、Sass  
バックエンド：PostgreSQL、検討中  
開発環境：VSCode、Git&Github、Windows10、GoogleChrome、Evernote  
その他：Macへの移行を検討中
```
C:.
├─k_101_re_wbs          // WEBサーバ(React使用)
│  ├─k_101_re_wbs_c        // WEBサーバ(CodeSandbox連携)
│  ├─k_101_re_wbs_d        // WEBサーバ(Dockerからのビルド/.gitignore登録)
│  └─k_101_re_wbs_g        // WEBサーバ(GitHubからのclone)
├─k_201_go_aps          // APサーバ(Go使用)
├─k_202_ra_aps          // APサーバ(Rails使用)
└─k_301_pg_dbs          // DBサーバ(PostgreSQL使用)
    └─k_301_pg_dbs_g
```
ディレクトリ名命名規則  

|<div style="width:290px">桁番号</div>|     意 味      | 記 号 |     例     | レベル感 | 備 考 |
| :---: |     :---:      | :---: | :---      | :---    | :---  |
|桁1|プロジェクト記号  |   k   |個人開発練習|         |       |
|  桁2  |  サーバ番号     | _101  |101サーバ   |         |       |
|&nbsp;&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;&nbsp;| _201  |201サーバ   |         |       |
|  〃   |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| _202  |202サーバ   |         |       |
|  〃   |      〃        | _301  |301サーバ   |||
|  桁3  |主たる技術スタック| _re  |React.js    |作り込み中|※CodeSandbox(https://codesandbox.io/s/weathered-violet-86tgok)|
|  〃   |      〃        | _go  |Golang      |将来検討予定||
|  〃   |      〃        | _re  |Rails       |錬成中||
|  〃   |      〃        | _pg  |PostgreSQL  |とりあえずサーバは立てた||
|  桁4  | サーバ種別      | _wbs  |Webサーバ   |||
|  〃   |      〃        | _aps  |APサーバ    |||
|  〃   |      〃        | _dbs  |dbサーバ    |||
|  桁5  |生成種別        |   _g   |「git clone」から生成|||
|  〃   |      〃        |   _d  |「docker compose run」から生成|||
|  〃   |      〃        |   _c  |CodeSandboxからインポート|||
