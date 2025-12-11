import { Type } from "js-yaml";
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const contactSchema = new Schema(
  {
    names: {
      type: String,
      required: false,
      
    },
    email: {
      type: String,
      required: false,
      lowercase: true,
    },
    subject: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required:false

    },
    phone: {
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
