"use strict";

/** HTTP configuration. */
module.exports = {
  /**
   * Specifies the port the application is listening to.
   *
   * @type {int}
   */
  port: 3000,

  /**
   * The address on which the server listens on.
   *
   * @type {string}
   */
  listen: '127.0.0.1',

  /**
   * The context path to build URLs in the application.
   *
   * @type {string}
   */
  contextPath: '',

  /**
   * Cross-Origin resource sharing variable. A list with the sites that are allowed to
   * access REST resources exposed by the application.
   *
   * @type {string}
   */
  cors: '*',

  /**
   * The base path of the API routes.
   *
   * @type {string}
   */
  APIPath: '/api/master'
};
