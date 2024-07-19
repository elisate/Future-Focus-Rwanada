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
import {auth} from "../../utils/jwtFunction.js";
import { isAdmin,isInstructor } from "../controller/userController.js";


const studentRouter = express.Router();

// Link routes to controller functions
studentRouter.get("/getStudents",auth,isAdmin, getStudents);
studentRouter.get("/getStudentById/:id", getStudentById);
studentRouter.post("/studentRegister", studentRegistration);
studentRouter.post("/loginStudent", loginStudent);
studentRouter.put("/updateStudent/:id",auth,isAdmin, updateStudent);
studentRouter.delete("/deleteStudent/:id",auth,isAdmin, deleteStudent);
studentRouter.get("/student/:id/courses", getCoursesForStudent);
export default studentRouter;
