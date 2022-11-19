FROM node:16.15.0-alpine
WORKDIR /usr/src/app

# use multi-stage build to copy only the files needed for production


COPY abc.sh /usr/local/bin
CMD ["sh", "../../../usr/local/bin/abc.sh"]
