"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
    obj2arr.js

    @author:
      - Derek Johnston

    @desc:
      - Converts an object to an array.
*/
function obj2arr(obj) {
  var arr = [];

  for (var key in obj) {
    arr.push(obj[key]);
  }

  return arr;
};

exports.default = obj2arr;