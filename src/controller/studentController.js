import bcrypt from "bcrypt";
import Student from "../model/studentModal.js";
import Counter from "../model/CounterModal.js";
import Program from "../model/programModal.js";
import sendEmail from "../../utils/sendemail.js";
import dotenv from "dotenv";
import Course from "../model/courseModal.js";
dotenv.config;

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .populate({
        path: "program_enrolled_in",
        select: "program_title", // Only select the program_title field
      })
      .exec();

    // Map through students to format the response
    const formattedStudents = students.map((student) => ({
      regNumber: student.regNumber,
      student_firstname: student.student_firstname,
      student_lastname: student.student_lastname,
      student_email: student.student_email,
      student_password: student.student_password,
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
      student_password: student.student_password,
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
    student_password,
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
    if (student_password) {
      student.student_password = await bcrypt.hash(student_password, 10);
    }

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
    student_password,
    student_gender,
    student_level_of_education,
    student_country,
    student_district,
  } = req.body;

  const program_title = req.body.program_enrolled_in;

  try {
    const existingStudent = await Student.findOne({ student_email });
    if (existingStudent) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const program = await Program.findOne({ program_title });
    if (!program) {
      return res.status(400).json({ message: "Program not found" });
    }

    const hashedPassword = await bcrypt.hash(student_password, 10);

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

    const newStudent = new Student({
      regNumber: studentId,
      userId: req.user._id,
      student_firstname,
      student_lastname,
      student_email,
      student_password: hashedPassword,
      student_gender,
      student_level_of_education,
      student_country,
      student_district,
      program_enrolled_in: program._id,
    });

    const savedStudent = await newStudent.save();

    const emailSubject = "Registration Successful";
    const emailContent = `
      <h1>Welcome to Our E-learning Platform</h1>
      <p>Dear ${student_firstname} ${student_lastname},</p>
      <p>Thank you for registering with us. Your student ID is <b>${studentId}</b>.</p>
      <p>We are excited to have you in the <b>${program_title}</b> program.</p>
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

    res.status(201).json({
      message: "Student created successfully",
      student: {
        ...savedStudent.toObject(),
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//student login
export const loginStudent = async (req, res) => {
  const { student_email, student_password } = req.body;

  try {
    const student = await Student.findOne({ student_email });
    if (!student) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(
      student_password,
      student.student_password
    );
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    await student.save();

    res.json({
      message: "Login successful",
      student: {
        ...student.toObject(),
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to login", error: error.message });
  }
};
// Get courses related to the program a student is enrolled in

export const getCoursesForStudent = async (req, res) => {
  try {
    // Find the student by ID and populate the program details
    const userId = req.user._id.toString();

    console.log(userId.toString());
    const student = await Student.findOne({ userId });


    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    console.log("Student:", student); // Log student details for debugging

    // Find courses related to the student's program
    const courses = await Course.find({
      program_title: student.program_enrolled_in._id.toString(), // Query by program reference
    }).populate({
      path: "program_title",
      select: "program_title",
    });

    console.log("Courses:", courses); // Log fetched courses for debugging

    if (courses.length === 0) {
      return res
        .status(404)
        .json({ message: "No courses found for this program" });
    }

    res.json(courses);
  } catch (error) {
    console.error("Error in getCoursesForStudent:", error); // Detailed error logging

    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid student ID format" });
    }

    res.status(500).json({ message: "An internal server error occurred" });
  }
};
