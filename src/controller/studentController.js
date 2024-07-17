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
export const createStudent = async (req, res) => {
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

  const program_title = req.body.program_enrolled_in; // Assuming program_title is passed from the request

  try {
    // Check if the email already exists
    const existingStudent = await Student.findOne({ student_email });
    if (existingStudent) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Find the Program document with the given program_title
    const program = await Program.findOne({ program_title });
    if (!program) {
      return res.status(400).json({ message: "Program not found" });
    }

    const hashedPassword = await bcrypt.hash(student_password, 10); // Hash the password

    // Get the current year for generating student ID
    const currentYear = new Date().getFullYear();
    const yearString = String(currentYear).slice(-2); // Get last two digits of the year

    // Get the counter for the current year
    let counter = await Counter.findOne({ year: currentYear });
    if (!counter) {
      counter = new Counter({ year: currentYear, count: 0 });
    }

    // Increment the counter
    counter.count += 1;
    await counter.save();

    // Generate the custom student ID
    const sequentialNumber = String(counter.count).padStart(3, "0"); // Pad with leading zeros
    const studentId = `${yearString}FFR${sequentialNumber}`;

    // Create a new student instance
    const newStudent = new Student({
      _id: studentId,
      student_firstname,
      student_lastname,
      student_email,
      student_password: hashedPassword,
      student_gender,
      student_level_of_education,
      student_country,
      student_district,
      program_enrolled_in: program._id, // Assign the ObjectId of the found Program
    });

    // Save the student to the database
    const savedStudent = await newStudent.save();

    // Send registration email
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

    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//special enpoints the help us to define student to get details of their program

// Get courses related to the program a student is enrolled in

export const getCoursesForStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate({
      path: "program_enrolled_in",
      select: "_id program_title", // Select the program ID and title
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const courses = await Course.find({
      program: student.program_enrolled_in._id,
    }).populate({
      path: "program",
      select: "program_title", // Populate the program title
    });

    // Format the courses to include program title
    const formattedCourses = courses.map((course) => ({
      _id: course._id,
      title: course.title, // Correct field from the schema
      description: course.description, // Correct field from the schema
      videos: course.videos,
      documents: course.documents,
      chapters: course.chapters,
      program: {
        _id: course.program._id,
        title: course.program.program_title, // Include program title
      },
      createdAt: course.createdAt,
      updatedAt: course.updatedAt,
    }));

    res.json(formattedCourses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};