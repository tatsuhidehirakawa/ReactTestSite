#!/bin/bash

#--- <Pattearn 1> Manual Operation.----------------------------#
# rm -rf ./.*

# npm install -D webpack webpack-cli
# npm install -g typescript
# npm install sass

#--- <Pattearn 2> create-react-app Operation.------------------#
rm -rf ./.*
# rm.dotfile
# npm cache clean --force
# npm install -g create-react-app
npm install -g create-react-app@latest
create-react-app . --typescript
npm install sass@latest
# yarn start