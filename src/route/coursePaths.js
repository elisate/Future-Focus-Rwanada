import express from "express";
import upload from "../../utils/multer.js";
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controller/courseController.js";
import { auth } from "../../utils/jwtFunction.js";
import { isAdmin, isInstructor } from "../controller/userController.js";
const courseRouter = express.Router();

courseRouter.post("/createCourse", upload,createCourse);
courseRouter.get("/getCourses",getCourses);
courseRouter.get("/getCourseById", getCourseById);
courseRouter.put("/updateCourse/:id",upload, updateCourse);
courseRouter.delete("/deleteCourse/:id", deleteCourse);


export default courseRouter;
