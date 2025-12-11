"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var counterSchema = _mongoose["default"].Schema({
  year: {
    type: Number,
    required: true,
    unique: true
  },
  count: {
    type: Number,
    required: true
  }
});
var Counter = _mongoose["default"].model("Counter", counterSchema);
var _default = exports["default"] = Counter;