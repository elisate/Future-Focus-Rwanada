import Student from "../src/model/studentModal";
import jwt from "jsonwebtoken";
export const authStudent = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const student = await Student.findOne({
      _id: decoded.id,
      "tokens.accessToken": token,
    });

    if (!student) {
      throw new Error();
    }

    req.token = token;
    req.student = student;
    next();
  } catch (error) {
    res.status(401).json({ message: "Please authenticate." });
  }
};