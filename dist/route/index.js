"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _studentPaths = _interopRequireDefault(require("./studentPaths.js"));
var _programPaths = _interopRequireDefault(require("./programPaths.js"));
var _coursePaths = _interopRequireDefault(require("./coursePaths.js"));
var _userPaths = _interopRequireDefault(require("./userPaths.js"));
var _resetPaths = _interopRequireDefault(require("./resetPaths.js"));
var _progressPath = _interopRequireDefault(require("./progressPath.js"));
var _express = _interopRequireDefault(require("express"));
var _contactPaths = _interopRequireDefault(require("./contactPaths.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var mainRouter = _express["default"].Router();
mainRouter.use(_express["default"].json());
mainRouter.use("/student", _studentPaths["default"]);
mainRouter.use("/program", _programPaths["default"]);
mainRouter.use("/course", _coursePaths["default"]);
mainRouter.use("/user", _userPaths["default"]);
mainRouter.use("/password", _resetPaths["default"]);
mainRouter.use("/", _progressPath["default"]);
mainRouter.use("/contact", _contactPaths["default"]);
var _default = exports["default"] = mainRouter;