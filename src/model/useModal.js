import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    instructor_department: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["isAdmin", "isInstructor"],
    },
    tokens: {
      accessToken: { type: String },
      refreshToken: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
