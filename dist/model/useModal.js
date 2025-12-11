"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var userSchema = _mongoose["default"].Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: false
  },
  instructor_department: {
    type: String,
    required: false
  },
  images: {
    type: Array,
    required: false
  },
  role: {
    type: String,
    "enum": ["isAdmin", "isInstructor", "student", "guest"],
    "default": "guest"
  },
  tokens: {
    accessToken: {
      type: String
    },
    refreshToken: {
      type: String
    }
  },
  verified: {
    type: Boolean,
    required: false
  },
  newPassword: {
    type: String,
    required: false,
    select: false // Do not include this field in query results
  },
  otp: {
    type: String,
    required: false
  },
  resetPasswordToken: {
    type: String,
    required: false
  },
  resetPasswordExpires: {
    type: Date,
    required: false
  }
}, {
  timestamps: true
});
var User = _mongoose["default"].model("User", userSchema);
var _default = exports["default"] = User;