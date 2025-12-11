"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var studentSchema = new _mongoose["default"].Schema({
  regNumber: {
    type: String,
    required: true // Ensure registration number is always present
  },
  userId: {
    type: String,
    required: true // Ensure user ID is always present
  },
  student_firstname: {
    type: String,
    required: true // Ensure firstname is always present
  },
  student_lastname: {
    type: String,
    required: true // Ensure lastname is always present
  },
  student_email: {
    type: String,
    required: true,
    // Ensure email is always present
    unique: true // Ensure email is unique
  },
  student_gender: {
    type: String,
    required: true
  },
  student_level_of_education: {
    type: String,
    required: true // Ensure level of education is always present
  },
  student_country: {
    type: String,
    required: true // Ensure country is always present
  },
  student_district: {
    type: String,
    required: true // Ensure district is always present
  },
  program_enrolled_in: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Program",
    required: true // Ensure at least one program is always present
  }],
  payment: {
    type: Number,
    // Changed from BigInt to Number
    required: false
  }
}, {
  timestamps: true
});

// Add index for email and program_enrolled_in
studentSchema.index({
  student_email: 1
});
studentSchema.index({
  program_enrolled_in: 1
});
var Student = _mongoose["default"].model("Student", studentSchema);
var _default = exports["default"] = Student;