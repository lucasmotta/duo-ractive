/**
 * duo-ractive - index.js
 * Copyright(c) 2015 lucasmotta(https://github.com/lucasmotta)
 * MIT Licensed
 */

'use strict';
/**
 * Module Dependencies
 */

var fs = require('fs');
var extend = require('extend');
var util = require('util');
var Ractive = require('ractive');


var defaults = {
  extension: 'html'
}



/**
 * Compile Ractive component to JavaScript
 *
 * @param {Object} opts
 * @return {Function}
 * @api public
 */

 module.exports = function(opts) {
   var options = extend(true, {}, defaults, opts);

   // extract this option (the rest are given directly to Handlebars)
   var extension = options.extension;
   delete options.extension;

   return function ractive(file, duo, done) {
     if (file.type !== extension) return done(null, file);
     var content = fs.readFileSync(file.path, 'utf-8');
     var result = Ractive.parse(content, options);
     file.type = 'js';
     file.src = result;

     done(null, file);
   }
 }
