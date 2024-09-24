import { Type } from "js-yaml";
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const contactSchema = new Schema(
  {
    names: {
      type: String,
      required: true,
      
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required:false

    },
  },
  {
    timestamps: true,
  }
);

const Contact = model("Contact", contactSchema);

export default Contact;
