"use strict";

/**
 * Database configuration.
 *
 * @memberOf engine.config.db
 */
module.exports = {
  /**
   * Location of the migrations.
   *
   * @var {string}
   */
  migrationsPath: "./db/migrations",

  /**
   * Location of the seeds.
   *
   * @var {string}
   */
  seedsPath: "./db/seeds",

  /**
   * @property {Object} local           Local instance of the DB connection.
   * @property {string} local.driver    The name of the driver used for the DB connection.
   * @property {string} local.user      The username used for the DB connection.
   * @property {string} local.password  The password used for the DB connection.
   * @property {string} local.host      The hostname used for the DB connection.
   * @property {string} local.port      The port used for the DB connection.
   * @property {string} local.database  The name of the database used for the DB connection.
   */
  local: {
    driver: "mysql",
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "sample"
  }
};
