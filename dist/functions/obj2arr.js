"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
    obj2arr.js

    @author:
      - Derek Johnston

    @desc:
      - Converts an object to an array.
*/
function obj2arr(obj) {
  if (typeof obj === "undefined") {
    throw "obj2arr was called without an object parameter.";
  } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object") {
    throw "obj2arr was called with an invalid parameter type (must be Object).";
  } else {
    var arr = [];
    for (var key in obj) {
      arr.push(obj[key]);
    }
    return arr;
  }
};

exports.default = obj2arr;