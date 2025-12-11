"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _passwordReset = require("../controller/passwordReset.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var resetRouter = _express["default"].Router();
resetRouter.post("/requestReset", _passwordReset.requestPasswordReset);
resetRouter.post("/reset/:token", _passwordReset.resetPassword);
var _default = exports["default"] = resetRouter;