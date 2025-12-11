"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var progressSchema = new _mongoose["default"].Schema({
  studentId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Student",
    required: true,
    index: true
  },
  courseId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Course",
    required: true,
    index: true
  },
  videoProgress: {
    type: Number,
    "default": 0 // Percentage of video watched
  },
  documentProgress: {
    type: Number,
    "default": 0 // Percentage of documents accessed
  },
  contentProgress: {
    type: Number,
    "default": 0 // Percentage of content read
  },
  overallProgress: {
    type: Number,
    "default": 0 // Overall progress calculated from the sections
  }
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
});
var Progress = _mongoose["default"].model("Progress", progressSchema);
var _default = exports["default"] = Progress;