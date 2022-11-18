FROM golang:latest
WORKDIR /go/src

# COPY hrdset.sh /usr/local/bin

#--- <Pattearn 1> ShellScript Operation.---------------------#
# COPY pkgset.sh /usr/local/bin
# CMD pkgset.sh

# #--- <Pattearn 2> Dockerfile Operation.------------------------#
COPY . .
RUN go mod init github.com/tatsuhidehirakawa/STGprd_devpkg

# sqlc
RUN go get github.com/kyleconroy/sqlc/cmd/sqlc
RUN go install github.com/kyleconroy/sqlc/cmd/sqlc@latest
RUN sqlc generate --file sqlc/sqlc.yaml

# Air
RUN go get -u github.com/cosmtrek/air
RUN go install github.com/cosmtrek/air@latest
RUN which air
RUN air init
# RUN air

RUN go mod tidy
# RUN cat go.mod
CMD ["nohup", "go", "run", "main.go"]
# CMD ["cat", "go.mod"]

# # CMD ["go", "run", "main.go"]

# # ENTRYPOINT [ "air" ]