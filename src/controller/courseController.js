
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

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("program");
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id).populate("program");
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCourseById = async (req, res) => {
  const { id } = req.params;
  const { title, description, videos, documents, chapters } = req.body;

  try {
    const course = await Course.findByIdAndUpdate(
      id,
      { title, description, videos, documents, chapters },
      { new: true }
    );
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCourseById = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findByIdAndDelete(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Remove the course from the program's courses array
    const program = await Program.findById(course.program);
    if (program) {
      program.courses.pull(course._id);
      await program.save();
    }

    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
