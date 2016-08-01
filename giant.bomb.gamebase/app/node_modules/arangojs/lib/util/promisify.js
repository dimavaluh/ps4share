"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promisify;
var noop = function noop() {
  return undefined;
};

function promisify(Promise) {
  if (Promise === false) {
    return function (callback) {
      return { callback: callback || noop };
    };
  }

  return function (callback) {
    if (callback || !Promise && !global.Promise) {
      return { callback: callback || noop };
    }

    function defer(resolve, reject) {
      callback = function callback(err, res) {
        if (err) reject(err);else resolve(res);
      };
    }

    var promise = Promise ? new Promise(defer) : new global.Promise(defer);

    return { callback: callback, promise: promise };
  };
}