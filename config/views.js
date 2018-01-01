"use strict";

/**
 * Views configuration file.
 *
 * @memberOf engine.config.views
 */
module.exports = {
  /**
   * Folder where all views are stored.
   *
   * @type {string}
   */
  views: "views",

  /**
   * Folder where all layouts are stored.
   *
   * @type {string}
   */
  layouts: "views/layouts",

  /**
   * Folder where all partials are stored.
   *
   * @type {string}
   */
  partials: "views/partials",

  /**
   * Location of the default layout.
   *
   * @type {string}
   */
  defaultLayout: "views/layouts/main.hbs",

  /**
   * Folder where public static content is stored.
   *
   * @type {string}
   */
  publicContent: "public"
};
