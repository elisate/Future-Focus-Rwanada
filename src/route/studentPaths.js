import express from "express";
import {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  getCoursesForStudent,
} from "../controller/studentController.js";

const studentRouter = express.Router();

// Link routes to controller functions
studentRouter.get("/getStudents", getStudents);
studentRouter.get("/getStudentById/:id", getStudentById);
studentRouter.post("/createStudent", createStudent);
studentRouter.put("/updateStudent/:id", updateStudent);
studentRouter.delete("/deleteStudent/:id", deleteStudent);
studentRouter.get("/student/:id/courses", getCoursesForStudent);
export default studentRouter;
