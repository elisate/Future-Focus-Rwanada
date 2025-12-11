"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var programSchema = _mongoose["default"].Schema({
  images: {
    type: Array
  },
  program_title: {
    type: String,
    required: true
  },
  programContent: {
    type: String
  },
  courses: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Course"
  }]
}, {
  timestamps: true
});
var Program = _mongoose["default"].model("Program", programSchema);
var _default = exports["default"] = Program;