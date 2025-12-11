"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _studentController = require("../controller/studentController.js");
var _jwtFunction = require("../../utils/jwtFunction.js");
var _userController = require("../controller/userController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var studentRouter = _express["default"].Router();

// Link routes to controller functions
studentRouter.get("/getStudentById/:id", _studentController.getStudentById);
studentRouter.get("/getStudents", _studentController.getStudents);
studentRouter.get("/getAllStudents", _studentController.getAllStudents);
studentRouter.post("/studentRegister", _jwtFunction.auth, _studentController.studentRegistration);
studentRouter.get("/student/courses", _jwtFunction.auth, _studentController.getCoursesForStudent);
studentRouter.get("/student/course/:courseId", _jwtFunction.auth, _studentController.getCourseByIdForStudent);
studentRouter.put("/updateStudent/:id", _jwtFunction.auth, _userController.isAdmin, _studentController.updateStudent);
studentRouter["delete"]("/deleteStudent/:id", _jwtFunction.auth, _userController.isAdmin, _studentController.deleteStudent);
var _default = exports["default"] = studentRouter;