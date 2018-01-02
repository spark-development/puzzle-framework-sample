"use strict";

/**
 * Session configuration.
 *
 * @memberOf engine.config.session
 */
module.exports = {
  /**
   * The secret used to encrypt the session cookie.
   *
   * @type {string}
   */
  secret: 'qwertyuiop',

  /**
   * The secret used to encrypt the session cookie.
   *
   * @type {string|function}
   */
  store: 'memory'
};
