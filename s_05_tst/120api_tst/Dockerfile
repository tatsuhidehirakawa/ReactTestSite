#--- Stage 1 --------------------------------------------------------------#
FROM golang:1.18.0-buster as builder
WORKDIR /go/src

# RUN ./srccpy.sh
# COPY ../../s_01_src/124api_src/src /go/src
# COPY s_01_src/124api_src/src /go/src

# COPY ./src /go/src
COPY . .
RUN go mod init github.com/tatsuhidehirakawa/STGprd_devpkg
RUN go get github.com/kyleconroy/sqlc/cmd/sqlc
RUN go install github.com/kyleconroy/sqlc/cmd/sqlc
RUN sqlc generate --file sqlc/sqlc.yaml
RUN go mod tidy

# Build binary
RUN go build -v -o server

#--- Stage 2 --------------------------------------------------------------#
FROM debian:buster-slim
# Binary copy
COPY --from=builder /go/src/server /app/server
# Launch Binary
EXPOSE 8081
ENTRYPOINT ["/app/server"]