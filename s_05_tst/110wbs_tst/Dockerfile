#--- Stage 1 --------------------------------------------------------------#
FROM node as build-stage
WORKDIR /usr/src/app

RUN npm install -g create-react-app@latest
RUN create-react-app . --typescript
RUN npm install sass@latest
RUN npm i -S react-router-dom@6.4.2
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons

COPY . .
# RUN go build -v -o server
RUN npm run build

#--- Stage 2 --------------------------------------------------------------#
FROM nginx as production-stage

RUN mkdir /var/www
RUN mkdir /var/www/front

COPY --from=build-stage /code/build /var/www/front

# EXPOSE 3001
# CMD nginx -g "daemon off;"




# FROM node as build-stage

# # frontendのソースをビルド
# ADD ./frontend/package*.json ./
# RUN npm install
# COPY ./frontend .
# RUN npm run build

# FROM nginx as production-stage

# RUN mkdir /var/www
# RUN mkdir /var/www/front

# COPY --from=build-stage /code/build /var/www/front






# #第一段階(productionファイル生成まで)
# FROM node:12 as node
# COPY . /react-app
# WORKDIR /react-app
# RUN npm install && npm run build

# #第二段階(一段階目のコンテナの中身から静的ファイル群だけをコピーする)
# FROM nginx:1.19.2-alpine
# COPY --from=node ./react-app/build /usr/share/nginx/html
# CMD nginx -g "daemon off;"




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