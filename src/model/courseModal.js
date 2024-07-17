import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    videos: [
      {
        title: String,
        url: String,
      },
    ],
    documents: [
      {
        title: String,
        url: String,
      },
    ],
    chapters: [
      {
        title: String,
        content: String,
      },
    ],
    program: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program",
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
