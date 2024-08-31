_default:
  @just --list

build:
  pipenv install
  pipenv run python3 build/get.py
  pipenv run python3 build/build.py

serve:
  python3 -m http.server 8001

build-libs:
  @just -f web.just build-libs

build-fonts:
  @just -f web.just build-fonts

build-icon:
  @just -f web.just build-icon nf-seti-audio #FFFFFF #F44336
