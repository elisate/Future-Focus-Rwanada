import bcrypt from "bcrypt";
import Student from "../model/studentModal.js";
import Counter from "../model/CounterModal.js";
import Program from "../model/programModal.js";
import sendEmail from "../../utils/sendemail.js";
import dotenv from "dotenv";
import Course from "../model/courseModal.js";
import User from "../model/useModal.js";
dotenv.config;
//get student details
export const getAllStudents = async (req, res) => {
  try {
    // Find all students and populate the enrolled programs
    const students = await Student.find().populate('program_enrolled_in');

    if (!students || students.length === 0) {
      return res.status(404).json({ message: 'No students found' });
    }

    res.json(students);
  } catch (error) {
    console.error('Error fetching student details:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find().populate(
      "program_enrolled_in",
      "program_title"
    ); // Populate with the program title

    // Map through students to format the response
    const formattedStudents = students.map((student) => ({
      regNumber: student.regNumber,
      student_firstname: student.student_firstname,
      student_lastname: student.student_lastname,
      student_email: student.student_email,
      student_gender: student.student_gender,
      student_level_of_education: student.student_level_of_education,
      student_country: student.student_country,
      student_district: student.student_district,
      program_enrolled_in: student.program_enrolled_in
        ? student.program_enrolled_in.program_title
        : null, // Check if program_enrolled_in is defined
      createdAt: student.createdAt,
      updatedAt: student.updatedAt,
      __v: student.__v,
    }));

    res.json(formattedStudents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// Get a student by ID

export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate({
      path: "program_enrolled_in",
      select: "program_title", // Only select the program_title field
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Format the response to include program_title instead of the entire program object
    const formattedStudent = {
      _id: student._id,
      student_firstname: student.student_firstname,
      student_lastname: student.student_lastname,
      student_email: student.student_email,
      student_gender: student.student_gender,
      student_level_of_education: student.student_level_of_education,
      student_country: student.student_country,
      student_district: student.student_district,
      program_enrolled_in: student.program_enrolled_in
        ? student.program_enrolled_in.program_title
        : null, // Check if program_enrolled_in is defined
      createdAt: student.createdAt,
      updatedAt: student.updatedAt,
      __v: student.__v,
    };

    res.json(formattedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a student
export const updateStudent = async (req, res) => {
  const {
    student_firstname,
    student_lastname,
    student_email,
    student_gender,
    student_level_of_education,
    student_country,
    student_district,
    program_enrolled_in, // Assuming program_title is passed from the request
  } = req.body;

  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Check if program_enrolled_in is provided and find the corresponding program
    if (program_enrolled_in) {
      const program = await Program.findOne({
        program_title: program_enrolled_in,
      });
      if (!program) {
        return res.status(400).json({ message: "Program not found" });
      }
      student.program_enrolled_in = program._id; // Assign the ObjectId of the found Program
    }

    // Hash the password if provided
  

    // Update other fields
    student.student_firstname = student_firstname ?? student.student_firstname;
    student.student_lastname = student_lastname ?? student.student_lastname;
    student.student_email = student_email ?? student.student_email;
    student.student_gender = student_gender ?? student.student_gender;
    student.student_level_of_education =
      student_level_of_education ?? student.student_level_of_education;
    student.student_country = student_country ?? student.student_country;
    student.student_district = student_district ?? student.student_district;

    const updatedStudent = await student.save();
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a student
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new student
export const studentRegistration = async (req, res) => {
  const {
    student_firstname,
    student_lastname,
    student_email,
    student_gender,
    student_level_of_education,
    student_country,
    student_district,
    program_enrolled_in, // Program title passed here
  } = req.body;

  try {
    // Fetch the program using the provided title
    const program = await Program.findOne({
      program_title: program_enrolled_in,
    });
    if (!program) {
      return res.status(400).json({ message: "Program not found" });
    }

    // Check if the student already exists with the same email
    let existingStudent = await Student.findOne({ student_email });

    if (existingStudent) {
      // Check if the student is already enrolled in the program
      const isAlreadyEnrolled = existingStudent.program_enrolled_in.includes(
        program._id
      );
      if (isAlreadyEnrolled) {
        return res
          .status(400)
          .json({ message: "You are already registered in this program." });
      }

      // If not already enrolled, add the new program to the list
      existingStudent.program_enrolled_in.push(program._id);
      const updatedStudent = await existingStudent.save();

      return res.status(200).json({
        message: "Successfully enrolled in the new program",
        student: updatedStudent,
      });
    } else {
      // Generate a new student ID
      const currentYear = new Date().getFullYear();
      const yearString = String(currentYear).slice(-2);

      let counter = await Counter.findOne({ year: currentYear });
      if (!counter) {
        counter = new Counter({ year: currentYear, count: 0 });
      }

      counter.count += 1;
      await counter.save();

      const sequentialNumber = String(counter.count).padStart(3, "0");
      const studentId = `${yearString}FFR${sequentialNumber}`;

      // Create a new student with the program
      const newStudent = new Student({
        regNumber: studentId,
        userId: req.user._id,
        student_firstname,
        student_lastname,
        student_email,
        student_gender,
        student_level_of_education,
        student_country,
        student_district,
        program_enrolled_in: [program._id], // Add the program here
      });

      const savedStudent = await newStudent.save();

      // Update the user role to "student"
      await User.findByIdAndUpdate(req.user._id, { role: "student" });

      // Send email notification
      const emailSubject = "Registration Successful";
      const emailContent = `
        <h1>Welcome to Our E-learning Platform</h1>
        <p>Dear ${student_firstname} ${student_lastname},</p>
        <p>Thank you for registering with us. Your student ID is <b>${studentId}</b>.</p>
        <p>We are excited to have you in the <b>${program_enrolled_in}</b> program.</p>
        <p>Best regards,<br/>Future Focus Rwanda Team</p>
      `;
      const emailSent = await sendEmail(
        student_email,
        emailSubject,
        emailContent
      );
      if (!emailSent) {
        return res
          .status(500)
          .json({ message: "Student created but email could not be sent" });
      }

      return res.status(201).json({
        message: "Student created successfully",
        student: savedStudent,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


//student login

// Get courses related to the program a student is enrolled in

export const getCoursesForStudent = async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const student = await Student.findOne({ userId }).populate({
      path: "program_enrolled_in",
      populate: {
        path: "courses",
        select: "courseTitle videos images documents courseContent", // Include all relevant fields
      },
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Extract courses from enrolled programs
    const programs = student.program_enrolled_in;
    const courses = programs.flatMap((program) => {
      // Add program title to each course
      return program.courses.map((course) => ({
        ...course.toObject(),
        program_title: program.program_title,
      }));
    });

    if (courses.length === 0) {
      return res
        .status(404)
        .json({ message: "No courses found for this student" });
    }

    res.json(courses);
  } catch (error) {
    console.error("Error in getCoursesForStudent:", error);

    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid student ID format" });
    }

    res.status(500).json({ message: "An internal server error occurred" });
  }
};


//get IT BY Id
export const getCourseByIdForStudent = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id.toString();

    // Find the student by userId and populate the enrolled program and courses
    const student = await Student.findOne({ userId }).populate({
      path: "program_enrolled_in",
      populate: {
        path: "courses",
        match: { _id: courseId }, // Match specific course by courseId
        select: "courseTitle videos images documents courseContent", // Include relevant fields
      },
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Extract the specific course from enrolled programs
    const programs = student.program_enrolled_in;
    let course = null;

    for (const program of programs) {
      const matchedCourse = program.courses.find(
        (course) => course._id.toString() === courseId
      );
      if (matchedCourse) {
        course = {
          ...matchedCourse.toObject(),
          program_title: program.program_title, // Add program title to course
        };
        break;
      }
    }

    if (!course) {
      return res
        .status(404)
        .json({ message: "Course not found for this student" });
    }

    res.json(course);
  } catch (error) {
    console.error("Error in getCourseByIdForStudent:", error);

    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid course ID format" });
    }

    res.status(500).json({ message: "An internal server error occurred" });
  }
};




