#!/bin/sh
echo "Running entrypoint file"

echo "Instaling dependeces"
npm install

echo "Starting project"
npm run start:dev