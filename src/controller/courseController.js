import Course from "../model/courseModal.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const createCourse = async (req, res) => {
  try {
    const { name } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "File is required" });
    }

    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: "auto", // Automatically detect resource type
    });

    const videoUrl = result.secure_url;

    const course = await Course.create({
      name,
      videos: [videoUrl], // Store video URL
    });

    return res.status(201).json({ data: course, message: "Success" });
  } catch (error) {
    console.error("Error creating course:", error.message);
    res.status(500).json({
      message: "Error creating course. Please try again later.",
    });
  }
};
