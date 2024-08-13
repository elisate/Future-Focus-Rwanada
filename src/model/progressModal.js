import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
      index: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
      index: true,
    },
    videoProgress: {
      type: Number,
      default: 0, // Percentage of video watched
    },
    documentProgress: {
      type: Number,
      default: 0, // Percentage of documents accessed
    },
    contentProgress: {
      type: Number,
      default: 0, // Percentage of content read
    },
    overallProgress: {
      type: Number,
      default: 0, // Overall progress calculated from the sections
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

const Progress = mongoose.model("Progress", progressSchema);
export default Progress;
