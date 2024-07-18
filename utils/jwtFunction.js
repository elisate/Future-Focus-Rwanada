import jwt from "jsonwebtoken";
import User from "../src/model/useModal.js";
import dotenv from "dotenv";
dotenv.config();

export const auth = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.accessToken": token,
    });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Please authenticate." });
  }
};
