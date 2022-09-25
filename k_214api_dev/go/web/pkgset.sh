#!/bin/bash

go mod init github.com/goark/pa-api
go get github.com/kyleconroy/sqlc/cmd/sqlc
go install github.com/kyleconroy/sqlc/cmd/sqlc
sqlc generate --file sqlc/sqlc.yaml
cd sqlc/build_sqlc
go mod init sqlc_pkg
cd ../ ..
go get sqlc_pkg
echo 'replace sqlc_pkg => ./sqlc/build_sqlc' >> go.mod
go mod tidy
nohup go run main.go