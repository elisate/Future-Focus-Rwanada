
import Course from "../model/courseModal.js";
import Program from "../model/programModal.js";
// Function to create a new course and assign it to a program
export const createCourse = async (req, res) => {
  const { title, description, videos, documents, chapters, programName } =
    req.body;

  try {
    // Find the program by name
    const program = await Program.findOne({ program_title: programName });
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }

    // Create the new course
    const newCourse = new Course({
      title,
      description,
      videos,
      documents,
      chapters,
      program: program._id,
    });

    // Save the course
    const savedCourse = await newCourse.save();

    // Add the course to the program's courses array
    program.courses.push(savedCourse._id);
    await program.save();

    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};