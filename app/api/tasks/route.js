import { connectDB } from "@/lib/db";
import Task from "@/models/Task";

export async function GET() {
  await connectDB();
  const tasks = await Task.find();
  return Response.json(tasks);
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();

  const updateFields = {
    completed: body.completed,
  };

  // ✅ only update date if provided
  if (body.date) {
    updateFields.date = body.date;
  }

  const updated = await Task.findByIdAndUpdate(
    body._id,
    updateFields,
    { new: true }
  );

  return Response.json(updated);
}
