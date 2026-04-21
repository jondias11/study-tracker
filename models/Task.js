import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: String,
  duration: Number,
  completed: Boolean,
  date: String,
  category: String,
});

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
