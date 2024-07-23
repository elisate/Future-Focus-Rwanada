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
studentRouter.get("/getStudents", getStudents);
studentRouter.use(auth);
studentRouter.post("/studentRegister",  studentRegistration);
studentRouter.get("/student/courses", getCoursesForStudent);
studentRouter.use(isAdmin);
studentRouter.put("/updateStudent/:id", updateStudent);
studentRouter.delete("/deleteStudent/:id",deleteStudent);
export default studentRouter;
