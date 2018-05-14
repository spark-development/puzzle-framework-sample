"use strict";

/**
 * General engine configuration.
 *
 * @memberOf engine.config.engine
 */
module.exports = {
  /**
   * Is the application in debug mode? Overrides the log setting.
   *
   * @type {boolean}
   */
  debug: true,

  /**
   * Log configuration
   *
   * @type {Object}
   */
  log: {
    /**
     * Specifies the level of detail needed in the logs.
     *
     * Log level: emergency, alert, critical, error, warning, notice, info, debug
     *
     * @type {string}
     */
    level: "info",

    /**
     * Location of the log file.
     *
     * @type {string}
     */
    file: "",

    /**
     * Should the log be rotated?
     *
     * @type {boolean}
     */
    rotate: true,

    /**
     * Maximum log file size before rotation. Modifiers are: k(ilo), m(ega), g(iga)
     *
     * @type {string}
     */
    size: "50k",

    /**
     * How often to check for file rotation conditions. possible values are '1s', '1m', '1h'. default is 5m.
     *
     * @type {string}
     */
    schedule: "5m",

    /**
     * Should the rotated log be compressed?
     *
     * @type {boolean}
     */
    compress: false,

    /**
     * How many rotation files should exist.
     *
     * @type {int}
     */
    count: 3
  },

  /**
   * Name of the application.
   *
   * @type {string}
   */
  name: "Puzzle Framework Sample application"
};
