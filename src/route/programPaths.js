import express from "express";
// import upload from "../../utils/multer.js";
import {
  getPrograms,
  getProgramById,
  createProgram,
  updateProgram,
  deleteProgram,
  getProgramWithCourses, 
} from "../controller/programController.js";
import { auth } from "../../utils/jwtFunction.js";
import configureMulter from "../../utils/multer.js";
import { isInstructor } from "../controller/userController.js";
const upload = configureMulter();
const programRouter = express.Router();

// Link routes to controller functions
programRouter.get("/getPrograms", getPrograms);
programRouter.get("/getProgramById/:id",getProgramById);
programRouter.post("/createProgram",auth,upload,createProgram);
programRouter.put("/updateProgram/:id", auth,updateProgram);
programRouter.delete("/deleteProgram/:id",deleteProgram);
programRouter.get("/getProgramWithCourses/:id", getProgramWithCourses);

export default programRouter;
