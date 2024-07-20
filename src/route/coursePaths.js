import express from "express";
import upload from "../../utils/multer.js";
import { createCourse } from "../controller/courseController.js";

const courseRouter = express.Router();

courseRouter.post("/create/course", upload, createCourse);

export default courseRouter;
