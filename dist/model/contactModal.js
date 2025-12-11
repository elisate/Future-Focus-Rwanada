"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsYaml = require("js-yaml");
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Schema = _mongoose["default"].Schema,
  model = _mongoose["default"].model;
var contactSchema = new Schema({
  names: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    lowercase: true
  },
  subject: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});
var Contact = model("Contact", contactSchema);
var _default = exports["default"] = Contact;