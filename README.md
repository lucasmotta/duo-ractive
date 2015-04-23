duo-ractive
=======

Ractive.js plugin for Duo

## Install

```sh
$ npm install --save duo-ractive
```

## Usage

### CLI

```sh
$ duo --use duo-ractive
```

### API

```js
var Duo = require('duo');
var ractive = require('duo-ractive');

var duo = Duo(__dirname)
    .entry('index.js') // JS file that requires a .html template
    .use(ractive());

duo.run(function (err, file) {
    if (err) throw err;
    // file => will include compiled Ractive templates
});
```
