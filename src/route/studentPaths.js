import express from "express";
import {
  getStudents,
  getStudentById,
  studentRegistration,
  updateStudent,
  deleteStudent,
  getCoursesForStudent,
  getCourseByIdForStudent,
  getAllStudents,
} from "../controller/studentController.js";
import { auth } from "../../utils/jwtFunction.js";
import { isAdmin, isInstructor } from "../controller/userController.js";

const studentRouter = express.Router();

// Link routes to controller functions
studentRouter.get("/getStudentById/:id", getStudentById);
studentRouter.get("/getStudents", getStudents);
studentRouter.get("/getAllStudents", getAllStudents);
studentRouter.post("/studentRegister",auth,studentRegistration);
studentRouter.get("/student/courses", auth,getCoursesForStudent);
studentRouter.get("/student/course/:courseId", auth, getCourseByIdForStudent);
studentRouter.put("/updateStudent/:id", auth,isAdmin,updateStudent);
studentRouter.delete("/deleteStudent/:id",auth,isAdmin,deleteStudent);
export default studentRouter;
