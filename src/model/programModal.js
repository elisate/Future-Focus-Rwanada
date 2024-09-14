import mongoose from "mongoose";

const programSchema = mongoose.Schema(
  {
    images: {
      type: Array,
    },
    program_title: {
      type: String,
      required: true,
    },
    programContent: {
      type: String,
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Program = mongoose.model("Program", programSchema);
export default Program;

