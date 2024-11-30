#!/bin/sh

if [ -d /tmp/app/node_modules ]; then
  rm -rf /home/node/app/node_modules
  mv /tmp/app/node_modules /home/node/app
fi

cd /home/node/app || exit 1

trap 'kill -TERM $PID; wait $PID; exit $?' TERM

npm run start:debug &
PID=$!
wait $PID
exit $?
