FROM golang:latest
WORKDIR /go/src
COPY pkgset.sh ../../usr/local/bin
RUN pkgset.sh
CMD go run main.go