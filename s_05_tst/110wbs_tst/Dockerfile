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

#--- Stage 2 --------------------------------------------------------------#
FROM nginx:alpine as production-stage

# RUN mkdir /var/www
# RUN mkdir /var/www/front
# COPY --from=build-stage /code/build /var/www/front

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
# CMD nginx -g "daemon off;"
EXPOSE 3001
CMD [ "nginx", "-g", "daemon off;" ]
# ENTRYPOINT [ "/usr/share/nginx/html" ]





# FROM node:16.15-alpine as production-stage

# # RUN mkdir /var/www
# # RUN mkdir /var/www/front
# # COPY --from=build-stage /code/build /var/www/front

# RUN npm install -g serve
# COPY --from=build-stage /usr/src/app/build React
# # CMD nginx -g "daemon off;"

# EXPOSE 3001
# CMD [ "serve", "-s", "./React", "-p", "3001" ]
# # ENTRYPOINT [ "/usr/share/nginx/html" ]