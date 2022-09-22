#!/usr/bin/bash

touch test1.txt
touch test2.txt

<< COMMENT
go mod init github.com/goark/pa-api                      # この行を何とかする
go get github.com/kyleconroy/sqlc/cmd/sqlc
go install github.com/kyleconroy/sqlc/cmd/sqlc
sqlc version
sqlc generate --file sqlc/sqlc.yaml
cd sqlc/build_sqlc
go mod init sqlc_pkg
cd ../..
go get sqlc_pkg                                           # ここまでは動く
sed -i '$a replace sqlc_pkg => ./sqlc/build_sqlc' go.mod
go mod tidy
go run main.go
COMMENT
