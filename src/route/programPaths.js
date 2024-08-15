import express from "express";
import upload from "../../utils/multer.js";
import {
  getPrograms,
  getProgramById,
  createProgram,
  updateProgram,
  deleteProgram,
  getProgramWithCourses,
} from "../controller/programController.js";
import { auth } from "../../utils/jwtFunction.js";

const programRouter = express.Router();

// Link routes to controller functions
programRouter.get("/getPrograms", getPrograms);
programRouter.get("/getProgramById/:id",getProgramById);
programRouter.post("/createProgram", auth,upload,createProgram);
programRouter.put("/updateProgram/:id", auth,updateProgram);
programRouter.delete("/deleteProgram/:id", auth,deleteProgram);
programRouter.get("/getProgramWithCourses/:id", auth,getProgramWithCourses);

export default programRouter;
