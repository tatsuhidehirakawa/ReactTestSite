FROM node:16.15.0-alpine
WORKDIR /usr/src/app

RUN npm install -g create-react-app@latest
RUN create-react-app . --typescript

# RUN npm install sass@latest
# RUN npm i -S react-router-dom@6.4.2
# # RUN npm install axios
# RUN npm i @tanstack/react-query
# RUN npm install @mui/material @emotion/react @emotion/styled @emotion/core
# RUN npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
# RUN npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
# RUN npm install leaflet react-leaflet --save

COPY package*.json ./
RUN npm install

# Make a standby state.
CMD [ "yarn", "start" ]
