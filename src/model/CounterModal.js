
import mongoose from "mongoose";

const counterSchema = mongoose.Schema({
  year: {
    type: Number,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const Counter = mongoose.model("Counter", counterSchema);
export default Counter;
