# 1ステージ目
# go入りのイメージを使う
FROM golang:1.18.0-buster as builder
WORKDIR /app

COPY . .
# go buildでバイナリだけ作成する
RUN go build -v -o server

# ここから下が２ステージ目

# goとかは入っていない軽いdockerイメージを使う
FROM debian:buster-slim

# 1ステージ目でビルドしたバイナリをコピーする
COPY --from=builder /app/server /app/server

# バイナリを起動する
CMD ["/app/server"]