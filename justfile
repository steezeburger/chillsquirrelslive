_default:
  @just --list

build-web:
  # remove old app
  rm -rf assets
  rm index.html
  # build new app
  cd chillsquirrelslive-web && bun run build
  # copy contents
  cd chillsquirrelslive-web && mv dist/* ..
