# 1ステージ目
# go入りのイメージを使う
FROM golang:1.18.0-buster as builder
WORKDIR /go/src

# RUN ./srccpy.sh

# COPY k_01_src/124api_src/src /go/src
COPY ./src /go/src
RUN go mod init github.com/tatsuhidehirakawa/myportfolio_k
RUN go get github.com/kyleconroy/sqlc/cmd/sqlc
RUN go install github.com/kyleconroy/sqlc/cmd/sqlc
RUN sqlc generate --file sqlc/sqlc.yaml
WORKDIR /go/src/sqlc/build_sqlc
RUN go mod init sqlc_pkg
WORKDIR /go/src
RUN echo 'replace sqlc_pkg => ./sqlc/build_sqlc' >> go.mod
RUN go mod tidy
# go run main.go
# COPY ../../k_01_src/124api_src/src /go/src
# go buildでバイナリだけ作成する
RUN go build -v -o server

# ここから下が２ステージ目

# goとかは入っていない軽いdockerイメージを使う
FROM debian:buster-slim

# 1ステージ目でビルドしたバイナリをコピーする
COPY --from=builder /go/src/server /app/server

# バイナリを起動する
EXPOSE 8081
ENTRYPOINT ["/app/server"]