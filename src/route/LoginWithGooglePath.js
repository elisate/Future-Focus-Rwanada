import express from "express";
import passport from "passport";
import { googleAuth, googleAuthCallback } from "../controller/googleControl.js";

const googleRouter = express.Router();

// Google authentication routes
googleRouter.get("/google", googleAuth);
googleRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  googleAuthCallback
);

export default googleRouter;
