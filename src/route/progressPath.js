import express from "express";
import {
  updateProgress,
  getProgress,
} from "../controller/progressController.js";
import { auth } from "../../utils/jwtFunction.js";

const studentProgress = express.Router();

// Route to update progress
studentProgress.post("/progress/update", auth, updateProgress);

// Route to get progress by studentId and courseId
studentProgress.get("/progress/:studentId/:courseId", auth, getProgress);

export default studentProgress;
