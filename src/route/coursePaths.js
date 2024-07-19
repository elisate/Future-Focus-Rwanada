
import express from "express";
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
} from "../controller/courseController.js";
import {auth} from "../../utils/jwtFunction.js";
import { isInstructor } from "../controller/userController.js";

const courseRouter = express.Router();

courseRouter.post("/createCourse", auth,isInstructor,createCourse);
courseRouter.get("/getCourses", auth, getCourses);
courseRouter.get("/getCourseById/:id", getCourseById);
courseRouter.put("/updateCourseById", auth, isInstructor,updateCourseById);
courseRouter.delete("/deleteCourseById", auth, isInstructor, deleteCourseById);
export default courseRouter;
