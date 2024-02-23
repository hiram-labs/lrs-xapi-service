#!/usr/bin/env sh

log () {
  echo "- XAPI SERVICE LOG: $1"
}

log "Running conformance tests."

log "Starting the server on port $EXPRESS_PORT."
SERVICE_AWAIT_UPDATES=true node dist/conformanceServer.js &

log "Cloning the ADL conformance test suite."
git clone -b master https://github.com/adlnet/lrs-conformance-test-suite ../conformance
cd ../conformance

  log "Installing dependencies for the ADL conformance test suite."
  npm i

  log "Running the ADL conformance test suite."
  node bin/console_runner.js -e "http://localhost:$EXPRESS_PORT/data/xAPI" -a -b -u "AAA" -p "BBB" -x "1.0.3"
  exitCode=$?

  log "Stopping the server."
  ps aux | grep [n]ode\ dist\/conformanceServer | awk '{print $2}' | xargs kill

  # cat ./logs/*

  log "Completed conformance tests."
  exit $exitCode
