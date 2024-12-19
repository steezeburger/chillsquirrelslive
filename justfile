_default:
  @just --list

# build web app and move dist files to root to be served by gh-pages
build:
  cd chillsquirrelslive-web && bun run build
  cd chillsquirrelslive-web && mv dist/* ..

run:
  cd chillsquirrelslive-web && bun run dev
