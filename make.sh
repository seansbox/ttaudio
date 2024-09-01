#!/bin/bash
set -e  # exit on error
help() { echo "Usage: $0 {command} [args]"; echo "Commands:"; declare -F | awk '{print "  " $3}'; }

build() {
  #[ -z "$2" ] || [ -z "$3" ] && { echo "Usage: $0 build {thing} {stuff}"; exit 1; }
  pipenv install
  pipenv run python3 build/get.py
  pipenv run python3 build/build.py
}

build-public() {
  ./web.sh build-libs
  ./web.sh build-fonts
  ./web.sh build-icon nf-seti-audio "#FFFFFF" "#F44336"
}

serve() {
  python3 -m http.server 8001
}

"${1:-help}" "$@"
