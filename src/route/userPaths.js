import express from "express";
import {
  register,
  login,
  getProfile,
  getAllUsers,
  refreshTokens,
  updateUser,
  deleteUser,
  getUserById
  
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
userRouter.get("/getUserById/:id", auth, isAdmin, getUserById);
userRouter.put("/updateUser/:id", auth, isAdmin, updateUser);
userRouter.delete("/deleteUser/:id", auth, isAdmin, deleteUser);

export default userRouter;
