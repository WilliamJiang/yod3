#!/bin/bash

num=`ps -ef | grep node | grep yod3 | wc -l`
if [ $num -gt 0 ]; then
  pkill node
fi

bower cache clean
npm cache clean
grunt serve

# export NODE_ENV=production; export PORT=9000; node dist/server/app.js
