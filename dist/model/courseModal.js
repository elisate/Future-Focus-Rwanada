"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import { array } from "i/lib/util";

var courseSchema = new _mongoose["default"].Schema({
  courseTitle: {
    type: String
  },
  videos: {
    type: Array
  },
  documents: {
    type: Array
  },
  images: {
    type: Array
  },
  courseContent: {
    type: String
  },
  program: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Program",
    required: true // Ensure program is always provided
  }
}, {
  timestamps: true
});
var _default = exports["default"] = _mongoose["default"].model("Course", courseSchema);