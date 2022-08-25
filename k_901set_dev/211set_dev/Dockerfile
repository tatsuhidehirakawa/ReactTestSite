FROM golang:latest
RUN apt-get update                                                 # 20220825追加
RUN apt-get install -y iputils-ping net-tools postgresql-client    # 20220825追加
ENV PGPASSWORD passw0rd                                            # 20220825追加
RUN mkdir /go/src/work
WORKDIR /go/src/work
# ADD . /go/src/work