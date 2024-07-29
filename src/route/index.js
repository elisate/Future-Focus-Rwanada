import studentRouter from "./studentPaths.js";
import programRouter from "./programPaths.js";
import courseRouter from "./coursePaths.js";
import userRouter from "./userPaths.js";
import resetRouter from "./passwordResetPath.js";

import express from "express";
const mainRouter = express.Router();
mainRouter.use(express.json());
mainRouter.use("/student", studentRouter);
mainRouter.use("/program", programRouter);
mainRouter.use("/course", courseRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/reset",resetRouter);


export default mainRouter;
