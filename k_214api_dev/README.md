APIサーバ用コンテナ「k214api_dev」  

技術スタック：Golang／Gin／sqlc／Docker  

詳細は「k_904set_dev/README.md」」に転記  

３．API定義
（１）エンドポイント  
     localhost:3000/someGet、somePost、somePut、someDelete  
（２）データ形式  

４．ディレクトリ構成図(k_214api_dev／抜粋)  
```
myportfolio_k
  │
  ├─k_114wbs_dev
  |
  ├─k_214api_dev                   # 214番APIServer
  │  └─src
  │    ├─main.go
  │    ├─pkgset.sh                  # 作成中
  │    ├─config.go                  # 作成中
  │    └─sqlc                       # ORM
  │       ├─query.sql
  │       ├─schema.sql
  │       └─sqlc.yaml
  |
  ├─k_314dbs_dev
  └─k_904set_dev
     └─docker-compose.yml          # 起動用ymlファイル
```
コンテナ内のディレクトリ構成図(抜粋)
```
root@89ff808980e1:
 ├─go
 |  └─src -------------- -> Bind mounted area.
 └─usr
    └─local
       └─bin ----------- -> Best directory to put shell scripts.
          └─npmset.sh
```
<!--
```
root@89ff808980e1:
 ├─bin
 ├─dev
 ├─go
 |  ├─bin
 |  |  └─sqlc (:file)
 |  ├─pkg
 |  |  ├─mod
 |  |  └─sumdb
 |  |    └─sum.golang.org
 |  |       └─latest
 |  └─src ------------- -> Bind mounted area.
 ├─lib
 ├─media
 ├─opt
 ├─root
 ├─sbin
 ├─sys
 ├─usr
 |  ├─bin
 |  ├─games
 |  ├─include
 |  ├─lib
 |  ├─libexec
 |  ├─local
 |  |  ├─bin -------------- -> パスが通っているのでシェルを置くのに最適！
 |  |  ├─etc
 |  |  ├─games
 |  |  ├─go
 |  |  ├─include
 |  |  ├─lib
 |  |  ├─man
 |  |  ├─sbin
 |  |  ├─share
 |  |  └─src
 |  ├─games
 |  ├─include
 |  ├─lib
 |  ├─libexec
 |  ├─local
 |  ├─sbin
 |  ├─share
 |  └─src
 ├─boot
 ├─etc
 ├─home
 ├─lib64
 ├─mnt
 ├─proc
 ├─run
 ├─srv
 ├─tmp
 └─var
```
-->