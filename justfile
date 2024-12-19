_default:
  @just --list

# build web app and move dist files to root to be served by gh-pages
build:
  # remove old app files
  rm -rf assets
  rm index.html
  rm chillsquirrel.png
  # build new app files
  cd chillsquirrelslive-web && bun run build
  # copy contents
  cd chillsquirrelslive-web && mv dist/* ..

# run the web app locally in dev mode
run:
  cd chillsquirrelslive-web && bun run dev
