"use strict";

const bundle = puzzle.import("utils/bundle");
const PRuntime = puzzle.import("core/PRuntime");

const SampleCommand = require("./SampleCommand");
const SampleBundle = require("../bundle");

class SampleModule extends PRuntime {
  constructor() {
    super();

    bundle("sample.bundle", SampleBundle);
  }

  afterBoot() {
    if (puzzle.http) {
      puzzle.routes.build(__dirname, "api");
      puzzle.routes.build(__dirname, "route");
    } else {
      puzzle.commands.register("sample", SampleCommand);
    }
  }
}

module.exports = SampleModule;
