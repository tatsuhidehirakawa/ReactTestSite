FROM node:16.15.0-alpine
WORKDIR /usr/src/app

# \cp -f ./package.json ../../s_01_src/110wbs_src/package.json

# React installation.
RUN npm install -g create-react-app@latest
RUN create-react-app . --typescript

# install Tailwind CSS.
RUN npm install -D tailwindcss postcss autoprefixer

# Import Sass
RUN npm install sass@latest

# Install react-router-dom
RUN npm i -S react-router-dom@6.4.2

# Import MUI
RUN npm install @mui/material @emotion/react @emotion/styled
# Import Font Awesome
RUN npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons

# Import leaflet for OpenStreetMap.
# RUN npm install leaflet react-leaflet@next --save
RUN npm install leaflet react-leaflet --save
# RUN npm install -D @types/leaflet

# Make a standby state.
CMD [ "yarn", "start" ]
# ENTRYPOINT [ "yarn", "start" ]
