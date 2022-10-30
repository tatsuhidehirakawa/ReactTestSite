#!/bin/bash

go mod init github.com/tatsuhidehirakawa/myportfolio_k
go get github.com/kyleconroy/sqlc/cmd/sqlc
go install github.com/kyleconroy/sqlc/cmd/sqlc
sqlc generate --file sqlc/sqlc.yaml
go mod tidy
nohup go run main.go
# go run main.go
