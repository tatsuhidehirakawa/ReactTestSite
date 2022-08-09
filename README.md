## 個人開発練習用リポジトリ
by Tatsuhide Hirakawa

主として使用する技術スタック  
フロントエンド：React.js、Sass、TypeScript  
バックエンド：Golang、PostgreSQL  


ディレクトリ名命名規則  
| 桁1 | 桁2 | 桁3 | 桁4 |  
|:-----:|:---:|:-------------:|:------:|  
| wors1 |  k_ | プロジェクト名 |        |  
| wors2 | 101 | サーバ番号 |  |  
|wors3||　例：_re:| React.js使用、|_go: Golang使用、|_ra: Rails使用、_pg: PostgreSQL使用  |
|wors4　|例：_wbs:| Webserver、_aps: APserver、_dbs:DBserver  
|wors5　|例：_g:| GitHubからclone、|_c: CodeSandboxからclone、_d: create-react-app&docker composeから生成  

tatsuhidehirakawa --- myportfololio_k -+-- k_101_re_wbs -+  
                                       |                 +  
                                       +-- k_201_go_aps  
                                       +-- k_201_go_aps  
                                       +-- k_201_go_aps  
                                       
+ /pages
    + /posts
        + .check-list.md
        + .directory-list.md
+ /css
    + .main.css
+ /preview
    + .check-list.html
    + .directory-list.html
+ /static

```
C:.
├─k_101_re_wbs
│  ├─k_101_re_wbs_c
│  └─k_101_re_wbs_g
│      ├─public
│      └─src
├─k_201_go_aps
├─k_202_ra_aps
└─k_301_pg_dbs
    └─k_301_pg_dbs_g
        └─config
```
