"use strict";

const API = require('puzzle-framework/src/http/API');

/**
 * Class SampleAPI
 */
class SampleAPI extends API {
  constructor(engine) {
    super(engine, "sample");
  }

  register() {
    this.get("/", (req, res) => {
      res.json({
        hello: res.__("sample world"),
        path: this.path
      });
    });
  }
}

module.exports = SampleAPI;
