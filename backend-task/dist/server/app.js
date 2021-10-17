"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = require("./swagger");

var _index = _interopRequireDefault(require("../routes/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import bodyParser from 'body-parser';
const app = (0, _express.default)();
exports.app = app;
app.use(_express.default.json()); // Swagger

app.use('/swagger', _swaggerUiExpress.default.serveFiles(_swagger.swaggerDocument), _swaggerUiExpress.default.setup(_swagger.swaggerDocument)); // app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(bodyParser);
// app.use(bodyParser.json());-
// app.use(bodyParser.urlencoded({ extended: true }));

app.use((0, _morgan.default)('dev'));
app.use(_index.default); // app.use('/admin', adminbroRouter);