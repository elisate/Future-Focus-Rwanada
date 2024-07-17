import Program from "../model/programModal.js";

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
export const createProgram = async (req, res) => {
  const { program_title } = req.body;

  try {
    // Check if a program with the same title already exists
    const existingProgram = await Program.findOne({ program_title });
    if (existingProgram) {
      return res.status(400).json({ message: "Program title already exists" });
    }

    const newProgram = new Program({ program_title });
    const savedProgram = await newProgram.save();
    res.status(201).json(savedProgram);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a program
export const updateProgram = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }

    program.program_title = req.body.program_title || program.program_title;
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

    await program.remove();
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
