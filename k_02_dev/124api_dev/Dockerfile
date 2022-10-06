FROM golang:latest
WORKDIR /go/src

# #--- <Pattearn 1> ShellScript Operation.---------------------#
# COPY pkgset.sh /usr/local/bin
# CMD pkgset.sh

#--- <Pattearn 2> Dockerfile Operation.------------------------#
# COPY ../../k_01_src/124api_src/src /go/src
COPY . .
RUN go mod init github.com/tatsuhidehirakawa/myportfolio_k
RUN go get github.com/kyleconroy/sqlc/cmd/sqlc
RUN go install github.com/kyleconroy/sqlc/cmd/sqlc
RUN sqlc generate --file sqlc/sqlc.yaml
RUN cd sqlc/build_sqlc
# WORKDIR /go/src/sqlc/build_sqlc
RUN go mod init sqlc_pkg
RUN cd ../..
# WORKDIR /go/src
RUN go get sqlc_pkg
RUN echo 'replace sqlc_pkg => ./sqlc/build_sqlc' >> go.mod
RUN go mod tidy
CMD ["nohup", "go", "run", "main.go"]