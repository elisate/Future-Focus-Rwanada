"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _progressController = require("../controller/progressController.js");
var _jwtFunction = require("../../utils/jwtFunction.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var studentProgress = _express["default"].Router();

// Route to update progress
studentProgress.post("/progress/update", _jwtFunction.auth, _progressController.updateProgress);

// Route to get progress by studentId and courseId
studentProgress.get("/progress/:studentId/:courseId", _jwtFunction.auth, _progressController.getProgress);
var _default = exports["default"] = studentProgress;