// import Course from "../model/courseModal.js";
// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export const createCourse = async (req, res) => {
//   try {
//     const { name } = req.body;
//     const file = req.file;

//     if (!file) {
//       return res.status(400).json({ message: "File is required" });
//     }

//     const result = await cloudinary.uploader.upload(file.path, {
//       resource_type: "auto", // Automatically detect resource type
//     });

//     const videoUrl = result.secure_url;
//     const documentUrl=result.secure_url;
//     const imageUrl=result.secure_url;

//     const course = await Course.create({
//       name,
//       videos: [videoUrl], // Store video URL
//       documents: [documentUrl],
//       images: [imageUrl],
//     });

//     return res.status(201).json({ data: course, message: "Success" });
//   } catch (error) {
//     console.error("Error creating course:", error.message);
//     res.status(500).json({
//       message: "Error creating course. Please try again later.",
//     });
//   }
// };


import Course from "../model/courseModal.js";
import Program from "../model/programModal.js"; // Import the Program model
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const createCourse = async (req, res) => {
  try {
    const { program_title, courseTitle, courseContent } = req.body;
    const { videos, documents, images } = req.files;

    console.log("Request body:", req.body);
    console.log("Request files:", req.files);

    if (!videos && !documents && !images) {
      return res.status(400).json({ message: "At least one file is required" });
    }

    // Log program title for debugging
    console.log("Searching for program with title:", program_title);

    // Find the program by its title
    const program = await Program.findOne({ program_title });
    console.log("Found program:", program);

    if (!program) {
      return res.status(400).json({ message: "Program not found" });
    }

    const uploadFiles = async (files) => {
      const urls = [];
      for (const file of files) {
        try {
          const result = await cloudinary.uploader.upload(file.path, {
            resource_type: "auto",
          });
          urls.push(result.secure_url);
        } catch (uploadError) {
          console.error("Error uploading file to Cloudinary:", uploadError);
          throw uploadError;
        }
      }
      return urls;
    };

    const videoUrls = videos ? await uploadFiles(videos) : [];
    const documentUrls = documents ? await uploadFiles(documents) : [];
    const imageUrls = images ? await uploadFiles(images) : [];

    const course = await Course.create({
      program_title: program._id, // Use the program ID
      courseTitle,
      courseContent,
      videos: videoUrls,
      documents: documentUrls,
      images: imageUrls,
    });

    // Optionally, update the program with the new course
    await Program.findByIdAndUpdate(program._id, {
      $push: { courses: course._id },
    });

    return res.status(201).json({ data: course, message: "Success" });
  } catch (error) {
    console.error("Error creating course:", error.message);
    res.status(500).json({
      message: "Error creating course. Please try again later.",
    });
  }
};

