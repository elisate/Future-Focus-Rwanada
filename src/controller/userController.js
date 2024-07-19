import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/useModal.js";
import dotenv from "dotenv";
dotenv.config();

const generateAccessToken = (user) => {
  return jwt.sign(
    { _id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { _id: user._id, email: user.email },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );
};

export const register = async (req, res) => {
  try {
    const { firstname, lastname, email, gender, password, role } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    const user = new User({
      firstname,
      lastname,
      email,
      gender,
      password: hashedPassword, // Save hashed password
      role,
    });

    user.tokens.accessToken = generateAccessToken(user);
    user.tokens.refreshToken = generateRefreshToken(user);

    await user.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        ...user.toObject(),
        tokens: {
          accessToken: user.tokens.accessToken,
          refreshToken: user.tokens.refreshToken,
        },
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to register user", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Unable to login");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Unable to login");
    }

    user.tokens.accessToken = generateAccessToken(user);
    user.tokens.refreshToken = generateRefreshToken(user);

    await user.save();
    res.json({
      user: {
        ...user.toObject(),
        tokens: {
          accessToken: user.tokens.accessToken,
          refreshToken: user.tokens.refreshToken,
        },
      },
      accessToken: user.tokens.accessToken,
      refreshToken: user.tokens.refreshToken,
    });
  } catch (error) {
    res.status(400).json({ message: "Unable to login", error: error.message });
  }
};

export const refreshTokens = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(403).json({ message: "Refresh token is required" });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.refreshToken": refreshToken,
    });

    if (!user) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    user.tokens = {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
    await user.save();

    res
      .status(200)
      .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  } catch (error) {
    res
      .status(403)
      .json({ message: "Invalid refresh token", error: error.message });
  }
};

export const getProfile = async (req, res) => {
  res.json(req.user);
};



export const isAdmin = (req, res, next) => {
  if (req.user.role !== "isAdmin") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

export const isInstructor = (req, res, next) => {
  if (req.user.role !== "isInstructor") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

//CRUD OPERATIONS

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch users", error: error.message });
  }
};

export const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch user", error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updates = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, updates, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User updated successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update user", error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete user", error: error.message });
  }
};

