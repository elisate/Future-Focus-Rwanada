"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../controller/userController.js");
var _jwtFunction = require("../../utils/jwtFunction.js");
var _userRoleControl = require("../middlewares/userRoleControl.js");
var _multer = _interopRequireDefault(require("../../utils/multer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var upload = (0, _multer["default"])();
var userRouter = _express["default"].Router();
userRouter.post("/refresh-token", _jwtFunction.auth, _userController.refreshTokens);
userRouter.get("/profile", _userController.getProfile);
userRouter.get("/getAllUsers/", _jwtFunction.auth, _userRoleControl.isAdmin, _userController.getAllUsers);
userRouter.get("/getUserById/:id", _jwtFunction.auth, _userController.getUserById);
userRouter.put("/updateUser/:id", _jwtFunction.auth, _userController.updateUser);
userRouter["delete"]("/deleteUser/:id", _userController.deleteUser);
userRouter.post("/register", _userController.register);
userRouter.post("/login", _userController.login);
userRouter.post("/updateProfile", upload, _jwtFunction.auth, _userController.updateProfile);
var _default = exports["default"] = userRouter;