"use strict";

const Route = puzzle.import('http/Route');

/**
 * Route Base for .
 *
 * @extends {Route}
 */
class Base extends Route {
  constructor() {
    super("");
  }

  register() {
    this.get("/", (req, res) => {
      res.render("sample")
    });
  }
}

module.exports = Base;
