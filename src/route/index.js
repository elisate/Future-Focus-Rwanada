import studentRouter from "./studentPaths.js";
import programRouter from "./programPaths.js";
import courseRouter from "./coursePaths.js";
import userRouter from "./userPaths.js";
import registerRouter from "./register_login.js";
import express from "express";
const mainRouter = express.Router();
mainRouter.use(express.json());
mainRouter.use("/api", studentRouter);
mainRouter.use("/api", programRouter);
mainRouter.use("/api", courseRouter);
mainRouter.use("/api", userRouter);
mainRouter.use("/api", registerRouter);

export default mainRouter;
