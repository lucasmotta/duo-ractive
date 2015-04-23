/**
 * duo-ractive - test/index.js
 * Copyright(c) 2014 lucasmotta(https://github.com/lucasmotta)
 * MIT Licensed
 */

'use strict';

var assert = require("assert");
var Duo = require("duo");
var ractive = require("../");
var path = require("path");

var fixture = path.join.bind(path, __dirname, "fixtures");

describe("duo-ractive", function () {
  it("should be a function", function () {
    assert.equal(typeof ractive, "function");
  });

  it("should return a function", function () {
    assert.equal(typeof ractive(), "function");
  });

  // TODO write a proper test for the file result
  it("should render Ractive into js", function (done) {
    var root = fixture();

    var duo = new Duo(root)
      .entry("example.js")
      .cache(false)
      .use(ractive());

    duo.run(function (err, file) {
      if (err) return done(err);
      done();
    });

  });
});
