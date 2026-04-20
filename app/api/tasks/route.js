import tasks from "@/data/tasks";

export async function GET() {
  return Response.json(tasks);
}

export async function POST() {
  return Response.json({ message: "Not implemented yet" });
}
