import express from "express";
import {
  getProfile,
  getAllUsers,
  refreshTokens,
  updateUser,
  deleteUser,
  getUserById,
  register,
  login,
  updateProfile
} from "../controller/userController.js";
import { auth } from "../../utils/jwtFunction.js";
import { isAdmin, isInstructor } from "../middlewares/userRoleControl.js";
import configureMulter from "../../utils/multer.js";

const upload = configureMulter();
const userRouter = express.Router();
userRouter.post("/refresh-token",auth, refreshTokens);
userRouter.get("/profile",getProfile);
userRouter.get("/getAllUsers/",auth,isAdmin,getAllUsers);
userRouter.get("/getUserById/:id",auth,getUserById);
userRouter.put("/updateUser/:id", auth, updateUser);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/updateProfile",upload,auth,updateProfile);
export default userRouter;
