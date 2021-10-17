"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = void 0;

var _app = require("./app");

/* istanbul ignore next */
const PORT = process.env.PORT || 3000;
/* istanbul ignore next */

const server = _app.app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${PORT}`);
});

exports.server = server;