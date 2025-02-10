#!/bin/bash
# wait-for-it.sh

# Usage: ./wait-for-it.sh host:port -- command
# Wait for the database to be up before running the command

host=$1
shift
port=${host#*:}
host=${host%%:*}

# Timeout: 30 seconds, adjust if necessary
timeout=30
echo "Waiting for $host:$port to be ready..."
until nc -z -v -w30 $host $port; do
  echo "$host:$port is not ready yet. Retrying..."
  sleep 1
done

echo "$host:$port is ready."
exec "$@"
