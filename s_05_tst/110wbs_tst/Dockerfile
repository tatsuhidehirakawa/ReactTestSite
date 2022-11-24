#--- Stage 1 --------------------------------------------------------------#
FROM node as build-stage
WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm install
RUN npm install -g create-react-app@latest
RUN create-react-app . --typescript
RUN npm install sass@latest
RUN npm i -S react-router-dom@6.4.2
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
COPY . .
RUN npm run build

#--- Stage 2 <Nginx ver.> -------------------------------------------------#
FROM nginx:alpine as production-stage

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;" ]

#--- Stage 2 <Server ver.> ------------------------------------------------#
# FROM node:16.15-alpine as production-stage

# RUN npm install -g serve
# COPY --from=build-stage /usr/src/app/build React

# EXPOSE 3001
# CMD [ "serve", "-s", "./React", "-p", "3001" ]
