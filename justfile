_default:
  @just --list

build-web:
  cd chillsquirrelslive-web && bun run build
  cd chillsquirrelslive-web && mv dist/* ..
