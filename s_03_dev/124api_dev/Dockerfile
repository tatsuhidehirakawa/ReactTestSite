FROM golang:latest
WORKDIR /go/src

# COPY hrdset.sh /usr/local/bin

#--- <Pattearn 1> ShellScript Operation.---------------------#
COPY pkgset.sh /usr/local/bin
CMD pkgset.sh

# #--- <Pattearn 2> Dockerfile Operation.------------------------#
# COPY . .
# RUN go mod init github.com/tatsuhidehirakawa/STGprd_devpkg
# RUN go get github.com/kyleconroy/sqlc/cmd/sqlc
# RUN go install github.com/kyleconroy/sqlc/cmd/sqlc@latest
# RUN sqlc generate --file sqlc/sqlc.yaml
# # WORKDIR /go/src/sqlc/build_sqlc
# # RUN go mod init sqlc_pkg
# # WORKDIR /go/src
# # # RUN go get sqlc_pkg # ローカルファイルを参照するため下記の記述のみで大丈夫
# # RUN echo 'replace sqlc_pkg => ./sqlc/build_sqlc' >> go.mod
# RUN go install github.com/cosmtrek/air@latest
# RUN which air
# RUN air init
# # RUN air
# RUN go mod tidy
# # RUN cat go.mod
# CMD ["nohup", "go", "run", "main.go"]
# # CMD ["cat", "go.mod"]

# # CMD ["go", "run", "main.go"]

# # ENTRYPOINT [ "air" ]