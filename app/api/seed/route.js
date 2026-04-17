import { connectDB } from "@/lib/db";
import Task from "@/models/Task";
import tasks from "@/data/tasks";

export async function GET() {
  await connectDB();

  await Task.deleteMany(); // reset DB
  await Task.insertMany(tasks);

  return Response.json({ message: "Database seeded!" });
}
