"use strict";

const index = (engine) => {
  engine.routes.build(__dirname, "api");
  engine.routes.build(__dirname, "route");
};

module.exports = index;
