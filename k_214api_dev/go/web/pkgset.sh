#!/usr/bin/bash

touch test1.txt
touch test2.txt

<< COMMENT
go mod init github.com/tatsuhidehirakawa/myportfolio_k   # 名称付与してるだけ！アクセスしているわけではないことに注意！
go get github.com/kyleconroy/sqlc/cmd/sqlc
go install github.com/kyleconroy/sqlc/cmd/sqlc
sqlc version
sqlc generate --file sqlc/sqlc.yaml
cd sqlc/build_sqlc
go mod init sqlc_pkg
cd ../..
go get sqlc_pkg                                           # ここまでは動く
echo -i 'replace sqlc_pkg => ./sqlc/build_sqlc' >> go.mod
go mod tidy
go run main.go
COMMENT
