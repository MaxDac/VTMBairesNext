find ./ -depth -name "*.js" -exec sh -c 'mv "$1" "${1%.js}.tsx"' _ {} \;