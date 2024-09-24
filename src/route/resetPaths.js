import express from "express";
import {
  requestPasswordReset,
  resetPassword,
} from "../controller/passwordReset.js";

const resetRouter = express.Router();
resetRouter.post("/requestReset", requestPasswordReset);
resetRouter.post("/reset/:token", resetPassword);

export default resetRouter;