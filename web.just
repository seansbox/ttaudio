CSS := "public/css"
JS := "public/js"
ICO := "public/ico"
TTF := "public/ttf"

EOT_AGENT := "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB7.4; InfoPath.2; SV1; .NET CLR 3.3.69573; WOW64; en-US)"
WOFF2_AGENT := "Mozilla/5.0 (Windows NT 6.3; rv:36.0) Gecko/20100101 Firefox/36.0"
WOFF_AGENT := "Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko"
TTF_AGENT := "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1"
SVG_AGENT := "Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10gin_lib.cc"

_default:
  @just -f  web.just --list

build-libs:
  mkdir -p {{CSS}}
  cd {{CSS}} && curl -O "https://cdn.jsdelivr.net/npm/@forevolve/bootstrap-dark@latest/dist/css/toggle-bootstrap.min.css"
  cd {{CSS}} && curl -O "https://cdn.jsdelivr.net/npm/@forevolve/bootstrap-dark@latest/dist/css/toggle-bootstrap-dark.min.css"
  cd {{CSS}} && curl -O "https://cdn.jsdelivr.net/npm/@forevolve/bootstrap-dark@latest/dist/css/toggle-bootstrap-print.min.css"

  mkdir -p {{JS}}
  cd {{JS}} && curl -O "https://cdn.jsdelivr.net/npm/@forevolve/bootstrap-dark@latest/dist/js/bootstrap.bundle.min.js"
  cd {{JS}} && curl -O "https://cdn.jsdelivr.net/npm/@forevolve/bootstrap-dark@latest/dist/js/bootstrap.bundle.min.js.map"
  cd {{JS}} && curl -O "https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"
  cd {{JS}} && curl -O "https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.map"
  cd {{JS}} && curl -O "https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.min.js"

_build-font FOLDER CSSPATH RELPATH='':
  mkdir -p {{TTF}}
  mkdir -p {{TTF}}/{{FOLDER}}
  cd {{TTF}} && curl -A "{{TTF_AGENT}}" -o {{FOLDER}}.css {{CSSPATH}}
  cd {{TTF}}/{{FOLDER}} && cat ../{{FOLDER}}.css | grep -oE 'url\([^)]+\)' | sed 's/url(//g' | sed 's/)//g' | xargs -I {} curl -O {{RELPATH}}{}
  cd {{TTF}} && sed -i.bak -E 's|url\(.*\/([^/\)]+)\)|url({{FOLDER}}/\1)|g' {{FOLDER}}.css && rm *.bak
  cd {{TTF}} && cat {{FOLDER}}.css | tr '\n' '~' | sed 's|{~|{ |g' | sed 's|~}| }|g' | sed 's|\t|  |g' | sed 's|  | |g' | sed 's|  | |g' | tr '~' '\n' > temp.css && mv temp.css {{FOLDER}}.css

_build-font-nerd:
  mkdir -p {{TTF}}/nerd-font
  cd {{TTF}} && curl -A "{{TTF_AGENT}}" -o nerd-font.css https://raw.githubusercontent.com/ryanoasis/nerd-fonts/master/css/nerd-fonts-generated.css
  cd {{TTF}}/nerd-font && curl -o nerd-font.ttf https://raw.githubusercontent.com/ryanoasis/nerd-fonts/master/patched-fonts/NerdFontsSymbolsOnly/SymbolsNerdFontMono-Regular.ttf
  cd {{TTF}} && sed -i.bak -E 's|url\(.*\) format\(.*\)|url("nerd-font/nerd-font.ttf") format("truetype")|g' nerd-font.css && rm *.bak
  cd {{TTF}} && cat nerd-font.css | tr '\n' '~' | sed 's|{~|{ |g' | sed 's|~}| }|g' | sed 's|\t|  |g' | sed 's|  | |g' | sed 's|  | |g' | tr '~' '\n' > temp.css && mv temp.css nerd-font.css

build-fonts:
  @just -f web.just _build-font fira-sans-condensed https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:400,b,bi,i
  @just -f web.just _build-font amatic-sc https://fonts.googleapis.com/css?family=Amatic+SC:400,b,bi,i
  @just -f web.just _build-font noto-emoji https://fonts.googleapis.com/css?family=Noto+Emoji:400,b,bi,i
  @just -f web.just _build-font game-icons https://raw.githubusercontent.com/seansbox/gameicons-xlsx/main/game-icons.css https://raw.githubusercontent.com/seansbox/gameicons-xlsx/main/
  @just -f web.just _build-font-nerd

build-icon NF='nf-seti-audio' FG='#FFFFFF' BG='#F44336':
  mkdir -p {{ICO}}

  # Match "obsessive" from https://favicomatic.com/
  echo '<link rel="shortcut icon" href="{{ICO}}/favicon.ico">' > {{ICO}}/favicon.html
  echo '<link rel="icon" sizes="32x32" href="{{ICO}}/favicon-32x32.png" />' >> {{ICO}}/favicon.html
  echo '<link rel="icon" sizes="16x16" href="{{ICO}}/favicon-16x16.png" />' >> {{ICO}}/favicon.html
  echo '<link rel="apple-touch-icon-precomposed" sizes="57x57" href="{{ICO}}/apple-touch-icon-57x57.png" />' >> {{ICO}}/favicon.html
  echo '<link rel="apple-touch-icon-precomposed" sizes="72x72" href="{{ICO}}/apple-touch-icon-72x72.png" />' >> {{ICO}}/favicon.html
  echo '<link rel="apple-touch-icon-precomposed" sizes="114x114" href="{{ICO}}/apple-touch-icon-114x114.png" />' >> {{ICO}}/favicon.html
  echo '<link rel="apple-touch-icon-precomposed" sizes="120x120" href="{{ICO}}/apple-touch-icon-120x120.png" />' >> {{ICO}}/favicon.html
  echo '<link rel="apple-touch-icon-precomposed" sizes="144x144" href="{{ICO}}/apple-touch-icon-144x144.png" />' >> {{ICO}}/favicon.html
  echo '<link rel="apple-touch-icon-precomposed" sizes="152x152" href="{{ICO}}/apple-touch-icon-152x152.png" />' >> {{ICO}}/favicon.html
  echo '<meta name="msapplication-TileColor" content="{{BG}}" />' >> {{ICO}}/favicon.html
  echo '<meta name="msapplication-TileImage" content="{{ICO}}/mstile-144x144.png" />' >> {{ICO}}/favicon.html

  @just -f web.just _build-icon-symbol {{NF}} {{TTF}}/nerd-font.css
  @just -f web.just _build-icon-touch $(cat temp-symbol.txt) '{{FG}}' '{{BG}}' {{TTF}}/nerd-font/nerd-font.ttf
  @just -f web.just _build-icon-fav $(cat temp-symbol.txt) '{{FG}}' '{{BG}}' {{TTF}}/nerd-font/nerd-font.ttf
  @just -f web.just _build-icon-tile $(cat temp-symbol.txt) '{{FG}}' '{{BG}}' {{TTF}}/nerd-font/nerd-font.ttf

  rm temp-*.*

_build-icon-symbol SYMBOLNAME CSSFILE:
  perl -CS -ne '/\.{{SYMBOLNAME}}:before { content: "\\([^"]+)"/ and print chr(hex($1))' {{CSSFILE}} > temp-symbol.txt

_build-icon-touch SYMBOL FG BG TTFFILE:
  magick -background none -fill '{{FG}}' -font {{TTFFILE}} -pointsize 768 label:"{{SYMBOL}}" temp-symbol.png
  magick -size 1024x1024 xc:'{{BG}}' temp-background.png
  magick temp-background.png temp-symbol.png -gravity center -composite temp-touch.png
  magick temp-touch.png -resize 57x57 -filter point {{ICO}}/apple-touch-icon-57x57.png
  magick temp-touch.png -resize 72x72 -filter point {{ICO}}/apple-touch-icon-72x72.png
  magick temp-touch.png -resize 114x114 -filter point {{ICO}}/apple-touch-icon-114x114.png
  magick temp-touch.png -resize 120x120 -filter point {{ICO}}/apple-touch-icon-120x120.png
  magick temp-touch.png -resize 144x144 -filter point {{ICO}}/apple-touch-icon-144x144.png
  magick temp-touch.png -resize 152x152 -filter point {{ICO}}/apple-touch-icon-152x152.png

_build-icon-fav SYMBOL FG BG TTFFILE:
  magick -background none -fill '{{FG}}' -font {{TTFFILE}} -pointsize 576 label:"{{SYMBOL}}" temp-symbol.png
  magick -size 1024x1024 xc:none -fill '{{BG}}' -draw "circle 512,512 512,64" temp-background.png
  magick temp-background.png temp-symbol.png -gravity center -composite temp-favicon.png
  magick temp-favicon.png -resize 16x16 -filter point {{ICO}}/favicon-16x16.png
  magick temp-favicon.png -resize 32x32 -filter point {{ICO}}/favicon-32x32.png
  magick temp-favicon.png -define icon:auto-resize=64,48,32,16 {{ICO}}/favicon.ico

_build-icon-tile SYMBOL FG BG TTFFILE:
  magick -background none -fill '{{FG}}' -font {{TTFFILE}} -pointsize 108 label:"{{SYMBOL}}" temp-symbol.png
  magick -size 144x144 xc:none temp-background.png
  magick temp-background.png temp-symbol.png -colorspace RGB -gravity center -composite {{ICO}}/mstile-144x144.png
