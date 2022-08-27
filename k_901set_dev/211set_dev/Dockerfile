FROM golang:latest
RUN apt-get update
RUN apt-get install -y iputils-ping net-tools postgresql-client
ENV PGPASSWORD ${PGSQL_PW}
RUN mkdir /go/src/work
WORKDIR /go/src/work
# ADD . /go/src/work