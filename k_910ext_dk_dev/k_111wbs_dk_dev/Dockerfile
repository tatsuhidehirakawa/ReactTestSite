# FROM node:14-alpine  
# WORKDIR /usr/src/app

FROM node:14-alpine  
WORKDIR /usr/src/app_base
RUN npm install -g create-react-app
RUN create-react-app k_101wbs_re_dev_d --typescript
WORKDIR k_101wbs_re_dev_d
RUN npm install sass