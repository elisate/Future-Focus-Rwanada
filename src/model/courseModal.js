import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    videos: {
      type: Array, // Array of strings for video URLs
      // default: [], // Default to an empty array
    },
    name: {
      type: String,
    },
    // program: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Program",
    //   required: true, // Ensure program is always provided
    // },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Optionally, you can add indexes if you query by program frequently
// courseSchema.index({ program: 1 });

export default mongoose.model("Course", courseSchema);
