#!/usr/bin/bash


go mod init github.com/tatsuhidehirakawa/myportfolio_k
go get github.com/kyleconroy/sqlc/cmd/sqlc
go install github.com/kyleconroy/sqlc/cmd/sqlc
sqlc version
sqlc generate --file sqlc/sqlc.yaml
cd sqlc/build_sqlc
go mod init sqlc_pkg
cd ../..
go get sqlc_pkg
echo 'replace sqlc_pkg => ./sqlc/build_sqlc' >> go.mod
go mod tidy
go run main.go

<< COMMENT
touch test1.txt
touch test2.txt
COMMENT