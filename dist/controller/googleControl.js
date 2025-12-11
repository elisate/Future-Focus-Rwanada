"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.googleAuthCallback = exports.googleAuth = void 0;
var _passport = _interopRequireDefault(require("passport"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var googleAuth = exports.googleAuth = _passport["default"].authenticate("google", {
  scope: ["profile", "email"]
});
var googleAuthCallback = exports.googleAuthCallback = function googleAuthCallback(req, res) {
  // Successful authentication, redirect home.
  res.redirect("/");
};