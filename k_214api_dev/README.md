APIサーバ用コンテナ「k214api_dev」  

技術スタック：Golang／Gin／sqlc／Docker  

詳細は「k_904set_dev/README.md」」に転記  

４．ディレクトリ構成図(k_214api_dev／抜粋)  
```
myportfolio_k
  │
  ├─k_214api_dev                   # 214番APIServer
  │  └─go
  │    └─web
  │       ├─main.go
  │       ├─pkgset.sh                  # 作成中
  │       ├─config.go                  # 作成中
  │       └─sqlc                       # ORM
  │          ├─query.sql
  │          ├─schema.sql
  │          └─sqlc.yaml
  │
  ├─k_314dbs_dev
  └─k_904set_dev
     └─docker-compose.yml          # 起動用ymlファイル
```