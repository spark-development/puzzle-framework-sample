"use strict";

const CLIBase = puzzle.import("cli/CLIBase");

class SampleCommand extends CLIBase {
  /**
   * Constructor of the CLI Command.
   *
   * @param {string} name The name of the command.
   */
  constructor() {
    super("test");
  }

  /**
   * Runs the command.
   *
   * @abstract
   * @param {string[]} args The command line arguments
   * @param {Object} options The options given to the command.
   */
  async run(args, options) {
    console.log(args, options);
  }
}

module.exports = SampleCommand;
