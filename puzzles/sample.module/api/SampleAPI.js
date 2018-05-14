"use strict";

const API = puzzle.import('http/API');

/**
 * Class SampleAPI
 */
class SampleAPI extends API {
  constructor() {
    super("sample");
  }

  register() {
    this.get("/", (req, res) => {
      res.json({
        hello: res.__('hello'),
        path: this.path,
        config: puzzle.config
      });
    });
  }
}

module.exports = SampleAPI;
