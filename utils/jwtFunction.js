import jwt from "jsonwebtoken";
import User from "../src/model/useModal.js";
import dotenv from "dotenv";
dotenv.config();

export const auth = async (req, res, next) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "please login" });
  }
  // const token = req.headers.authorization.split(' ')[1];
  const token = req.headers.authorization;
  // console.log(token);
  if (!token) {
    return res.status(401).json({ message: "please login2" });
  }
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
    res.status(401).json({ message: "Please authenticate.", error });
  }
};
