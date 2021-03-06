#!/bin/sh

set -e

function log() {
  local msg=$1
  echo "    >> $msg"
}

if [ -z $NPM_TOKEN ]; then
  log "WARNING: NPM_TOKEN not set, please set before publishing"
  exit 1
fi

log "Bootstrapping linting monorepo"
yarn install
log "Publishing changes"
yarn publish

log "===> Successfully published new versions"
