_default:
  @just --list

# build web app and move dist files to root to be served by gh-pages
build:
  # remove old app files
  rm -rf assets
  rm index.html
  # build new app files
  cd chillsquirrelslive-web && bun run build
  # copy contents
  cd chillsquirrelslive-web && mv dist/* ..

run:
  cd chillsquirrelslive-web && bun run dev
