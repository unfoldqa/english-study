#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "Set GITHUB_TOKEN with Contents: Read and write permission."
  echo "export GITHUB_TOKEN=ghp_..."
  exit 1
fi

echo "Pushing to unfoldqa/english-study..."
GIT_TERMINAL_PROMPT=0 git push "https://x-access-token:${GITHUB_TOKEN}@github.com/unfoldqa/english-study.git" main

echo "Enabling GitHub Pages..."
curl -fsS -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer ${GITHUB_TOKEN}" \
  https://api.github.com/repos/unfoldqa/english-study/pages \
  -d '{"source":{"branch":"main","path":"/"}}' \
  || curl -fsS -X PUT \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer ${GITHUB_TOKEN}" \
    https://api.github.com/repos/unfoldqa/english-study/pages \
    -d '{"source":{"branch":"main","path":"/"}}'

echo
echo "Done. Site: https://unfoldqa.github.io/english-study/"
