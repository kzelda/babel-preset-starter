# Babel @babel/preset-env

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

## Compile

```
./node_modules/.bin/babel src --out-dir lib

```

## package.json > script
```js
"scripts": {
    "babel-preset": "babel src --out-dir lib --presets=@babel/env"
  }
```
