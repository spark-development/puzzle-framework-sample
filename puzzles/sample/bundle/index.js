"use strict";

const PRuntime = puzzle.import("core/PRuntime");

class SampleBundle extends PRuntime {
  afterBoot() {
    puzzle.log.info("sample bundle");
  }
}

module.exports = SampleBundle;
