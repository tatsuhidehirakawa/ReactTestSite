#!/bin/bash

npm install -g serve

if [ $? -ne 0]; then
    echo "npm install error."
    exit 1
fi

serve -s ./build -p 3001