import mongoose from "mongoose";
import Program from "./programModal.js";

const studentSchema = mongoose.Schema(
  {
    regNumber: {
      type: String,
    },
    userId: {
      type: String,
    },
    student_firstname: {
      type: String,
      
    },
    student_lastname: {
      type: String,
      
    },
    student_email: {
      type: String,
      
    },
    student_gender: {
      type: String,
      required: true,
    },
    student_level_of_education: {
      type: String,
    },
    student_country: {
      type: String,
    },
    student_district: {
      type: String,
    },
    program_enrolled_in: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program",
      enum: ["Robotics", "Coding"],
      required: true,
    },
    payment: {
      type: BigInt,
      required: false,
    },
  
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
