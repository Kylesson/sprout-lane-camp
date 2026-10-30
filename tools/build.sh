#!/bin/sh
# Minified deploy copy in dist/ (source files stay readable). Run from the project folder.
set -e
rm -rf dist && mkdir -p dist
cp -r index.html favicon.svg og.jpg fonts img dist/
esbuild main.js --minify --outfile=dist/main.js --charset=utf8 --log-level=warning
lightningcss --minify --targets ">= 0.5%" style.css -o dist/style.css
# inline the CSS: saves a render-blocking round trip on the live host
node -e "const f=require('fs'),h=f.readFileSync('dist/index.html','utf8'),c=f.readFileSync('dist/style.css','utf8');if(!h.includes('<link rel=\"stylesheet\" href=\"style.css\">'))throw 'stylesheet link not found';f.writeFileSync('dist/index.html',h.replace('<link rel=\"stylesheet\" href=\"style.css\">',()=>'<style>'+c+'</style>'));f.unlinkSync('dist/style.css')"
du -sh dist
