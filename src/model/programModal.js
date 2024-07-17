import mongoose from "mongoose";

const programSchema = mongoose.Schema(
  {
    program_title: {
      type: String,
      required: true,
      enum: ["Robotics", "Coding"],
    },
    courses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    }],
  },
  {
    timestamps: true,
  }
);

const Program = mongoose.model("Program", programSchema);
export default Program;
