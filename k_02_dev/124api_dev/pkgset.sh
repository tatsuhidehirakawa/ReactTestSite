#!/bin/bash

# ----+----+----+----+----+----+---+----+----+----+-- #
go mod init github.com/tatsuhidehirakawa/myportfolio_k

# --- sqlc-+----+----+----+----+---+----+----+----+-- #
go get github.com/kyleconroy/sqlc/cmd/sqlc
go install github.com/kyleconroy/sqlc/cmd/sqlc
sqlc generate --file sqlc/sqlc.yaml
cd sqlc/build_sqlc
go mod init sqlc_pkg
cd ../..
echo 'replace sqlc_pkg => ./sqlc/build_sqlc' >> go.mod

# --- Hot-reload+----+----+----+---+----+----+----+-- #
# go get -u github.com/cosmtrek/air
go install github.com/cosmtrek/air@latest
which air
air init
# air

# --- verification -+----+----+----+----+----+----+-- #
go mod tidy

# --- Run -+----+---+----+----+----+----+----+----+-- #
nohup go run main.go
# go run main.go   # For debug. 
