FROM golang:latest
WORKDIR /go/src
COPY . .
RUN ./pkgset.sh
CMD go run main.go