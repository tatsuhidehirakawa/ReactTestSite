FROM golang:latest
WORKDIR /go/src

# COPY pkgset.sh /usr/local/bin
# CMD pkgset.sh

# COPY ../../s_03_dev/124api_dev/go.mod ./
# COPY ../../s_03_dev/124api_dev/go.sum ./
# RUN go mod download

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

RUN go mod tidy
CMD ["nohup", "go", "run", "main.go"]
# CMD ["go", "run", "main.go"]
ENTRYPOINT [ "air" ]
