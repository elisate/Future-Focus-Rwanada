"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _courseController = require("../controller/courseController.js");
var _jwtFunction = require("../../utils/jwtFunction.js");
var _userController = require("../controller/userController.js");
var _multer = _interopRequireDefault(require("../../utils/multer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import upload from "../../utils/multer.js";

var upload = (0, _multer["default"])();
var courseRouter = _express["default"].Router();
courseRouter.post("/createCourse", _jwtFunction.auth, _userController.isInstructor, upload, _courseController.createCourse);
courseRouter.get("/getCourses", _jwtFunction.auth, _courseController.getCourses);
courseRouter.get("/getCoursesDetails", _courseController.getCourseDetails);
courseRouter.get("/getCourseById", _courseController.getCourseById);
courseRouter.put("/updateCourse/:id", upload, _courseController.updateCourse);
courseRouter["delete"]("/deleteCourse/:id", _jwtFunction.auth, _userController.isAdmin, _courseController.deleteCourse);
var _default = exports["default"] = courseRouter;