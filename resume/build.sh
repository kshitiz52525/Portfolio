#!/bin/sh
# Renders resume/resume.html to public/resume.pdf with headless Chrome.
cd "$(dirname "$0")/.." || exit 1
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --no-pdf-header-footer --virtual-time-budget=8000 \
  --print-to-pdf=public/resume.pdf "file://$PWD/resume/resume.html"
