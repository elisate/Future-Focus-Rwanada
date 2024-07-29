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

const programRouter = express.Router();

// Link routes to controller functions
programRouter.get("/getPrograms", getPrograms);
programRouter.get("/getProgramById/:id", getProgramById);
programRouter.post("/createProgram", upload,createProgram);
programRouter.put("/updateProgram/:id", updateProgram);
programRouter.delete("/deleteProgram/:id", deleteProgram);
programRouter.get("/getProgramWithCourses/:id", getProgramWithCourses);

export default programRouter;
