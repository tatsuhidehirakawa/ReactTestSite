## 個人開発練習用リポジトリ
by Tatsuhide Hirakawa

主として使用する予定の技術スタック  
フロントエンド：TypeScript、React.js、Sass  
バックエンド：Golang、PostgreSQL、Docker  
開発環境：VSCode、Git&Github、Windows10、GoogleChrome、Evernote  
その他：Macへの移行を検討中

ディレクトリ名命名規則  
| 桁1 | 桁2 | 桁3 | 桁4 |  
|:-----:|:---:|:-------------:|:------:|  
| wors1 |  k_ | プロジェクト記号 |        |  
| wors2 | 101 | サーバ番号 |  |  
|wors3||　例：_re:| React.js使用、|_go: Golang使用、|_ra: Rails使用、_pg: PostgreSQL使用  |
|wors4　|例：_wbs:| Webserver、_aps: APserver、_dbs:DBserver  
|wors5　|例：_g:| GitHubからclone、|_c: CodeSandboxからclone、_d: create-react-app&docker composeから生成  


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
