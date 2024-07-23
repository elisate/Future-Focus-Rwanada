import express from "express";
import upload from "../../utils/multer.js";
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controller/courseController.js";

const courseRouter = express.Router();

courseRouter.post("/createCourse", upload, createCourse);
courseRouter.get("/getCourses", getCourses);
courseRouter.get("/getCourseById", getCourseById);
courseRouter.get("/updateCourse", updateCourse);
courseRouter.get("/updateCourse", deleteCourse);


export default courseRouter;
