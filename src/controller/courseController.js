import Course from "../model/courseModal.js";
import Program from "../model/programModal.js"; // Ensure the Program model is imported
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

    if (!videos && !documents && !images) {
      return res.status(400).json({ message: "At least one file is required" });
    }

    // Find the program by its title
    const foundProgram = await Program.findOne({ program_title });
    if (!foundProgram) {
      return res.status(400).json({ message: "Program not found" });
    }

    // Get the program ID
    const programId = foundProgram._id;

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

    // Create the course with the found program ID
    const course = await Course.create({
      program: programId,
      courseTitle,
      courseContent,
      videos: videoUrls,
      documents: documentUrls,
      images: imageUrls,
    });

    // Optionally, update the program with the new course
    await Program.findByIdAndUpdate(programId, {
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


export const getCourses = async (req, res) => {
  try {
    // Populate the 'program' field with the 'program_title' field from the Program schema
    const courses = await Course.find().populate("program", "program_title");
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCourseDetails = async (req, res) => {
  try {
    const courseId = req.params.id; // Retrieve course ID from request parameters

    // Find the course by ID and populate the 'program' field with 'program_title'
    const course = await Course.findById(courseId).populate(
      "program",
      "program_title"
    );

    if (!course) {
      // If no course found, return a 404 Not Found response
      return res.status(404).json({ message: "Course not found" });
    }

    // Return the course details in the response
    res.json(course);
  } catch (error) {
    // Handle any errors that occur during the database operation
    res.status(500).json({ message: error.message });
  }
};


export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("program");
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const { courseTitle, courseContent, program } = req.body;
    const { videos, documents, images } = req.files;

    // Update course title and content if provided in the request body
    if (courseTitle) course.courseTitle = courseTitle;
    if (courseContent) course.courseContent = courseContent;

    // Handling program update
    if (program) {
      const foundProgram = await Program.findById(program);
      if (foundProgram) {
        course.program = foundProgram._id;
      } else {
        return res.status(400).json({ message: "Program not found" });
      }
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

    // Check and update videos, documents, and images if provided
    if (videos) {
      const uploadedVideos = await uploadFiles(videos);
      course.videos = uploadedVideos;
    }

    if (documents) {
      const uploadedDocuments = await uploadFiles(documents);
      course.documents = uploadedDocuments;
    }

    if (images) {
      const uploadedImages = await uploadFiles(images);
      course.images = uploadedImages;
    }

    // Save the updated course
    const updatedCourse = await course.save();
    res.json(updatedCourse); // Return the updated course
  } catch (error) {
    console.error("Error updating course:", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    await course.remove();
    res.json({ message: "Course deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
