import studentRouter from "./studentPaths.js";
import programRouter from "./programPaths.js";
import courseRouter from "./coursePaths.js";
import userRouter from "./userPaths.js";
import resetRouter from "./passwordResetPath.js";
import studentProgress from "./progressPath.js";

import express from "express";
import contactRouter from "./contactPaths.js";
const mainRouter = express.Router();
mainRouter.use(express.json());
mainRouter.use("/student", studentRouter);
mainRouter.use("/program", programRouter);
mainRouter.use("/course", courseRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/reset",resetRouter);
mainRouter.use("/", studentProgress);
mainRouter.use("/contact", contactRouter);


export default mainRouter;
