import Groq from "groq-sdk";

export async function POST(req) {
  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const { message, tasks } = await req.json();

    const prompt = `
You are an intelligent study planner assistant.

User message:
"${message}"

Here is their current schedule:
${JSON.stringify(tasks)}

IMPORTANT:
If user wants to MODIFY tasks, return ONLY JSON in this format:

{
  "action": "update",
  "updates": [
    {
      "category": "DBMS",
      "newDate": "2026-04-22"
    }
  ]
}

Rules:
- Only include tasks that need change
- Use exact category names
- Use YYYY-MM-DD format
- If no change needed → return normal text

Do NOT mix text + JSON.
`;

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
    });

    const output = response.choices[0].message.content;

    // 🔥 Try parsing JSON
    let parsed;
    try {
      parsed = JSON.parse(output);
    } catch {
      return Response.json({ message: output });
    }

    // 🔥 If AI wants to update tasks
    if (parsed.action === "update") {
      const updates = parsed.updates;

      // Apply updates
      const updatedTasks = tasks.map(task => {
        const match = updates.find(
          u => u.category === task.category
        );

        if (match) {
          return { ...task, date: match.newDate };
        }

        return task;
      });

      return Response.json({
        message: "Tasks updated successfully ✅",
        updatedTasks
      });
    }

    return Response.json({ message: output });

  } catch (err) {
    console.error("CHAT ERROR:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}