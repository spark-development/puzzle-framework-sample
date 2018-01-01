"use strict";

const Route = require('puzzle-framework/src/http/Route');

/**
 * Route Base for .
 *
 * @extends {Route}
 */
class Base extends Route {
  constructor(engine) {
      super(engine, "");
  }

  register() {
      this.get("/", (req, res) => {
        res.render("sample")
      });
  }
}

module.exports = Base;
