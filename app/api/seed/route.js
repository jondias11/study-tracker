import { connectDB } from "@/lib/db";
import Task from "@/models/Task";
import tasks from "@/data/tasks";

export async function GET() {
  await connectDB();

  await Task.deleteMany(); // wipe everything
  await Task.insertMany(tasks); // insert fresh data

  return Response.json({ message: "Database seeded successfully" });
}
