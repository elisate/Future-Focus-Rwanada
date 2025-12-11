"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _googleControl = require("../controller/googleControl.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var googleRouter = _express["default"].Router();

// Google authentication routes
googleRouter.get("/google", _googleControl.googleAuth);
googleRouter.get("/google/callback", _passport["default"].authenticate("google", {
  failureRedirect: "/login"
}), _googleControl.googleAuthCallback);
var _default = exports["default"] = googleRouter;