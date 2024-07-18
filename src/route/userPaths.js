import express from "express";
import {
  register,
  login,
  getProfile,
  getAllUsers,
  refreshTokens,
} from "../controller/userController.js";
import { auth } from "../../utils/jwtFunction.js";
import { isAdmin, isInstructor } from "../middlewares/userRoleControl.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/refresh-token", refreshTokens);
userRouter.get("/profile", auth, getProfile);
userRouter.get("/admin", auth, isAdmin, (req, res) => {
  res.send("Admin access granted");
});
userRouter.get("/instructor", auth, isInstructor, (req, res) => {
  res.send("Instructor access granted");
});
userRouter.get("/getAllUsers", auth, isAdmin, getAllUsers);

export default userRouter;
