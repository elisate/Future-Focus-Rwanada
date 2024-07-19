import mongoose from "mongoose";
import Program from "./programModal.js";
const studentschema = mongoose.Schema(
  {
    _id: {
      type: String,
    },
    student_firstname: {
      type: String,
      required: true,
    },
    student_lastname: {
      type: String,
      required: true,
    },

    student_email: {
      type: String,
      required: true,
    },
    student_password: {
      type: String,
      required: true,
    },
    student_gender: {
      type: String,
      required: true,
    },
    student_level_of_education: {
      type: String,
      required: true,
    },
    student_country: {
      type: String,
      required: true,
    },
    student_district: {
      type: String,
      required: true,
    },

    program_enrolled_in: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program",
      required: true,
    },
    payment: {
      type: BigInt,
      required: false,
    },
    tokens: {
      accessToken: { type: String },
      refreshToken: { type: String },
    },
  },
  {
    timestamps: true,
  }
);
const Student = mongoose.model("Student", studentschema);
export default Student;
