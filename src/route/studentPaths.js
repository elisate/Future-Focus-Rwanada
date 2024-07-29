import express from "express";
import {
  getStudents,
  getStudentById,
  studentRegistration,
  loginStudent,
  updateStudent,
  deleteStudent,
  getCoursesForStudent,
} from "../controller/studentController.js";
import { auth } from "../../utils/jwtFunction.js";
import { isAdmin, isInstructor } from "../controller/userController.js";

const studentRouter = express.Router();

// Link routes to controller functions
studentRouter.post("/loginStudent", loginStudent);
studentRouter.get("/getStudentById/:id", getStudentById);
studentRouter.get("/getStudents",auth,isAdmin, getStudents);
studentRouter.post("/studentRegister",auth,studentRegistration);
studentRouter.get("/student/courses", auth,getCoursesForStudent);
studentRouter.put("/updateStudent/:id", auth,isAdmin,updateStudent);
studentRouter.delete("/deleteStudent/:id",auth,isAdmin,deleteStudent);
export default studentRouter;
