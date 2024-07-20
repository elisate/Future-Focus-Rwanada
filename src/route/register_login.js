import express from "express";
import { register, login } from "../controller/userController.js";
// import { auth } from "../../utils/jwtFunction.js";
// import { isAdmin, isInstructor } from "../middlewares/userRoleControl.js";

const registerRouter = express.Router();

registerRouter.post("/register", register);
registerRouter.post("/login", login);

export default registerRouter;
