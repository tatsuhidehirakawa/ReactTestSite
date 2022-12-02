FROM node:16.15.0-alpine
WORKDIR /usr/src/app

# React installation.
RUN npm install -g create-react-app@latest
RUN create-react-app . --typescript
# WORKDIR src

# install Tailwindcss.
RUN npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
RUN npm install @craco/craco
# RUN npx tailwindcss init
# RUN npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

# Transfer version control files at this place.
# \cp -f ./package.json ../../s_01_src/110wbs_src/package.json

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
