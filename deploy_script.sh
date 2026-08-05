#!/bin/sh
set -e
export SSHPASS='TecHn01@VPS253$'
REMOTE="vpsadmin@97.74.95.93"
REMOTE_PATH="/var/www/dhanvanti-homepage"
LOCAL_PATH="/mnt/host/c/Users/vikas/work/Dhanvanti-homepage1"

echo "=== Step 1: Syncing source files to VPS ==="
sshpass -e rsync -avz --delete \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='.next' \
  --exclude='.vercel' \
  --exclude='dist' \
  --exclude='*.log' \
  "$LOCAL_PATH/src/" "$REMOTE:$REMOTE_PATH/src/"

echo "=== Step 2: Syncing public folder ==="
sshpass -e rsync -avz --delete \
  "$LOCAL_PATH/public/" "$REMOTE:$REMOTE_PATH/public/"

echo "=== Step 3: Syncing config files ==="
sshpass -e rsync -avz \
  "$LOCAL_PATH/package.json" \
  "$LOCAL_PATH/next.config.ts" \
  "$LOCAL_PATH/postcss.config.mjs" \
  "$LOCAL_PATH/tsconfig.json" \
  "$LOCAL_PATH/pnpm-lock.yaml" \
  "$REMOTE:$REMOTE_PATH/"

echo "=== Step 4: Rebuild and restart on VPS ==="
sshpass -e ssh -o StrictHostKeyChecking=no "$REMOTE" "
  cd $REMOTE_PATH
  echo 'Building...'
  npm run build 2>&1
  echo 'Restarting PM2...'
  pm2 restart dhanvanti-homepage
  pm2 save
  echo 'Done! App restarted.'
"
