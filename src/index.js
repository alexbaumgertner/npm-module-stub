import './index';

/**
 * Core
 */
class Core {

  /**
   *
   * @param {Object} options
   */
  constructor(options = {}) {
    this.options = options;
  }

  /**
   * Return input as is
   *
   * @param {*} input
   * @returns {*}
   */
  returnInput(input) {
    return input;
  }
}

export default Core;
