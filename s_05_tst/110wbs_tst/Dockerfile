FROM node:16.15.0-alpine
WORKDIR /usr/src/app

# use multi-stage build to copy only the files needed for production

CMD ["serve","-s","./build","-p","3001"]