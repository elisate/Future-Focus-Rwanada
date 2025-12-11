"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _programController = require("../controller/programController.js");
var _jwtFunction = require("../../utils/jwtFunction.js");
var _multer = _interopRequireDefault(require("../../utils/multer.js"));
var _userController = require("../controller/userController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import upload from "../../utils/multer.js";

var upload = (0, _multer["default"])();
var programRouter = _express["default"].Router();

// Link routes to controller functions
programRouter.get("/getPrograms", _programController.getPrograms);
programRouter.get("/getProgramById/:id", _programController.getProgramById);
programRouter.post("/createProgram", _jwtFunction.auth, upload, _programController.createProgram);
programRouter.put("/updateProgram/:id", _jwtFunction.auth, _programController.updateProgram);
programRouter["delete"]("/deleteProgram/:id", _programController.deleteProgram);
programRouter.get("/getProgramWithCourses/:id", _programController.getProgramWithCourses);
var _default = exports["default"] = programRouter;