#!/bin/bash

# declare variables
host=localhost
db=nuvenz_api
user=root
pass=
engine=mysql
port=3306
output=./src/models
schema=public

echo "Generating database models"
typeorm-model-generator -h $host -d $db -u $user -x $pass -e $engine -p $port -o $output -s $schema

echo "Removing unnecessary files"
rm -rf $output/tsconfig.json $output/ormconfig.json

echo "Moving entities out directory"
mv $output/entities/*.ts $output/

echo "Removing entity directory"
rm -rf $output/entities