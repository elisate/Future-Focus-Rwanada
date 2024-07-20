import express from "express";
import {
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
// userRouter.use(auth);
userRouter.post("/refresh-token",auth, refreshTokens);
userRouter.get("/profile",getProfile);
userRouter.get("/getAllUsers/",isAdmin, getAllUsers);
userRouter.get("/getUserById/:id", isAdmin, getUserById);
userRouter.put("/updateUser/:id", isAdmin, updateUser);
userRouter.delete("/deleteUser/:id",isAdmin, deleteUser);

export default userRouter;
