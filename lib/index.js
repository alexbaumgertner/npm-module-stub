"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Checker Core
 */

var Core = (function () {

  /**
   *
   * @param {Object} options
   */

  function Core() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Core);
  }

  /**
   * Return input as is
   *
   * @param {*} input
   * @returns {*}
   */

  Core.prototype.returnInput = function returnInput(input) {
    return input;
  };

  return Core;
})();

exports.default = Core;