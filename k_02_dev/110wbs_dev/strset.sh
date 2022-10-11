#!/bin/bash

#--- <Pattearn A> Manual Operation.----------------------------#
# npm install -D webpack webpack-cli
# npm install -g typescript
# npm install sass

#--- <Pattearn B> create-react-app Operation.------------------#
# Saveing sample codes.
mv src ..
# React installation.
npm install -g create-react-app@latest
create-react-app . --typescript
npm install sass@latest
yarn start
# Restore sample codes.
mv ../src/components ./src
mv ../src/hooks ./src
mv ../src/types ./src

touch test.txt

#--- .gitkeep removal -----------------------------------------#
# rm .gitkeep
# rm -rf ./.*
# rm *
# rm -rf .[^.] .?*
# rm -rf
# rm -rf tafgetDir/.*
# rm -rf .gitkeep
# rm .dotfile
# rm.dotfile
# rm .dot*
# rm.dot*
# rm -r .*
# rm -R .*
# rm ./.gitkeep