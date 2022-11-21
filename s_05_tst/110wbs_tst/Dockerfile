#--- Stage 1 --------------------------------------------------------------#
FROM node:16.15.0-alpine
WORKDIR /usr/src/app

RUN npm install -g create-react-app@latest
RUN create-react-app . --typescript
RUN npm install sass@latest
RUN npm i -S react-router-dom@6.4.2
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons

COPY . .
# RUN go build -v -o server
RUN npm run build -v -o server

#--- Stage 2 --------------------------------------------------------------#
FROM node:16.15.0-alpine-slim

COPY --from=builder /usr/src/app/server /app/server

# Launch Binary
EXPOSE 3001
ENTRYPOINT ["/app/server"]




# #--- Stage 1 --------------------------------------------------------------#
# FROM golang:1.18.0-buster as builder
# WORKDIR /go/src

# COPY . .
# RUN go mod init github.com/tatsuhidehirakawa/STGprd_devpkg
# RUN go get github.com/kyleconroy/sqlc/cmd/sqlc
# RUN go install github.com/kyleconroy/sqlc/cmd/sqlc
# RUN sqlc generate --file sqlc/sqlc.yaml
# RUN go mod tidy
# # Build binary
# RUN go build -v -o server

# #--- Stage 2 --------------------------------------------------------------#
# FROM debian:buster-slim

# # Binary copy
# COPY --from=builder /go/src/server /app/server
# # Launch Binary
# EXPOSE 8081
# ENTRYPOINT ["/app/server"]