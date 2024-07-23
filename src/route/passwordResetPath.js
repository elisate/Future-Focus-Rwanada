// routes/authRoutes.js
import express from "express";
import {
  requestPasswordReset,
  resetPassword,
} from "../controller/passwordReset.js";

const resetRouter= express.Router();

resetRouter.post("/request-password-reset", requestPasswordReset);
resetRouter.post("/reset-password", resetPassword);

export default resetRouter;
