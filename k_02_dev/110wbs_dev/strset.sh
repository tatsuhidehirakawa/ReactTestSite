#!/bin/bash



#--- .gitkeep removal -----------------------------------------#
rm -rf ./.*
# rm.dotfile
# rm ./.gitkeep
# rm -rf tafgetDir/.*
# rm -rf .gitkeep
# rm .gitkeep
# rm -r .*
# rm -R .*
# rm -rf
# rm.dot*

#--- <Pattearn A> Manual Operation.----------------------------#
# npm install -D webpack webpack-cli
# npm install -g typescript
# npm install sass

#--- <Pattearn B> create-react-app Operation.------------------#
npm install -g create-react-app@latest
create-react-app . --typescript
npm install sass@latest
yarn start