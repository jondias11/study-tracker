import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  date: String,
  title: String,
  category: String,
  duration: Number,
  completed: { type: Boolean, default: false }
});

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);