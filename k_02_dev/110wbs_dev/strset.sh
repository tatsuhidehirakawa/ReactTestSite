#!/bin/bash

#--- Saving Sample Codes --------------------------------------#
mv src ..

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

#--- <Pattearn A> Manual Operation.----------------------------#
# npm install -D webpack webpack-cli
# npm install -g typescript
# npm install sass

#--- <Pattearn B> create-react-app Operation.------------------#
npm install -g create-react-app@latest
create-react-app . --typescript
npm install sass@latest
yarn start

#--- Relocation of sample code. -------------------------------#
mkdir src/components
copy Samplecode.jsx src/components
copy Samplecode.sass src/components
mkdir src/hooks
touch src/hooks/.gitkeep
mkdir src/types
touch src/types/.gitkeep

# touch test.txt
