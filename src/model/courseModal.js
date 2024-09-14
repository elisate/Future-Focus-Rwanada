// import { array } from "i/lib/util";
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courseTitle: {
      type: String,
    },
    videos: {
      type: Array,
    },
    documents: {
      type: Array,
    },
    images: {
      type: Array,
    },
    courseContent: {
      type: String,
    },
    program: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program",
      required: true, // Ensure program is always provided
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema);

