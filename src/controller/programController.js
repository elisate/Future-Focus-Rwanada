import Program from "../model/programModal.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all programs
export const getPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a program by ID
export const getProgramById = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }
    res.json(program);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new program
// export const createProgram = async (req, res) => {
//   const { program_title } = req.body;

//   try {
//     // Check if a program with the same title already exists
//     const existingProgram = await Program.findOne({ program_title });
//     if (existingProgram) {
//       return res.status(400).json({ message: "Program title already exists" });
//     }

//     const newProgram = new Program({ program_title });
//     const savedProgram = await newProgram.save();
//     res.status(201).json(savedProgram);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// Update a program
export const updateProgram = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }

    program.program_title = req.body.program_title || program.program_title;
    program.programContent = req.body.programContent || program.programContent;

    const updatedProgram = await program.save();
    res.json(updatedProgram);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Delete a program
export const deleteProgram = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }

    await Program.findByIdAndDelete(req.params.id); // Use findByIdAndDelete
    res.json({ message: "Program deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//special controlles btn program and courses

export const getProgramWithCourses = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id).populate("courses");
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }
    res.json(program);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// Configure Cloudinary


export const createProgram = async (req, res) => {
  const { program_title, programContent } = req.body;
  const { images } = req.files;

  console.log("Request body:", req.body);
  console.log("Request files:", req.files);

  try {
    // Check if a program with the same title already exists
    const existingProgram = await Program.findOne({ program_title });
    if (existingProgram) {
      return res.status(400).json({ message: "Program title already exists" });
    }

    const uploadFiles = async (files) => {
      const urls = [];
      for (const file of files) {
        try {
          console.log(`Uploading file: ${file.path}`);
          const result = await cloudinary.uploader.upload(file.path, {
            resource_type: "auto",
          });
          console.log(`File uploaded: ${result.secure_url}`);
          urls.push(result.secure_url);
        } catch (uploadError) {
          console.error("Error uploading file to Cloudinary:", uploadError);
          throw uploadError;
        }
      }
      return urls;
    };

    const imageUrls = images ? await uploadFiles(images) : [];

    console.log("Image URLs:", imageUrls);

    // Create a new program
    const newProgram = new Program({
      program_title,
      programContent,
      images: imageUrls,
    });

    const savedProgram = await newProgram.save();
    res.status(201).json({ data: savedProgram, message: "Success" });
  } catch (error) {
    console.error("Error creating program:", error.message);
    res.status(500).json({
      message: "Error creating program. Please try again later.",
    });
  }
};

