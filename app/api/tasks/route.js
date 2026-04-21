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

  const updated = await Task.findByIdAndUpdate(
    body._id,
    { completed: body.completed },
    { new: true }
  );

  return Response.json(updated);
}
