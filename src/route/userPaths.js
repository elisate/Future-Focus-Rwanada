import express from "express";
import {
  getProfile,
  getAllUsers,
  refreshTokens,
  updateUser,
  deleteUser,
  getUserById,
  register,
  login
} from "../controller/userController.js";
import { auth } from "../../utils/jwtFunction.js";
import { isAdmin, isInstructor } from "../middlewares/userRoleControl.js";

const userRouter = express.Router();
userRouter.post("/refresh-token",auth, refreshTokens);
userRouter.get("/profile",getProfile);
userRouter.get("/getAllUsers/",auth,isAdmin,getAllUsers);
userRouter.get("/getUserById/:id", getUserById);
userRouter.put("/updateUser/:id", auth, updateUser);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.post("/register", register);
userRouter.post("/login", login);

export default userRouter;
