import Groq from "groq-sdk";

export async function POST(req) {
  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const { message, tasks } = await req.json();

  const today = new Date().toISOString().split("T")[0];

const prompt = `
You are an intelligent study planner AI.

TODAY'S DATE: ${today}

You are given tasks with:
- _id
- title
- date (YYYY-MM-DD)
- completed (true/false)
- category
- duration

USER REQUEST:
"${message}"

TASK DATA:
${JSON.stringify(tasks)}

---

YOUR JOB:

Understand natural commands like:
- "move everything tomorrow"
- "shift DBMS by 2 days"
- "push incomplete tasks forward"
- "lighten today"
- "i missed yesterday"

---

RULES FOR INTERPRETATION:

- "tomorrow" = today + 1 day
- "next day" = +1 day
- "in 2 days" = +2 days
- "next week" = +7 days

- ONLY move incomplete tasks unless explicitly told otherwise
- Maintain task order
- Do not exceed 10 hours per day
- Prioritize: DSA > DBMS > PoM > others

---

IF MODIFYING TASKS:

Return ONLY JSON:

{
  "action": "update",
  "updates": [
    { "_id": "...", "newDate": "YYYY-MM-DD" }
  ]
}

---

IF NO CHANGE NEEDED:

Return short advice (max 3 lines)

---

IMPORTANT:
- NO explanation if returning JSON
- NO mixing JSON + text
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
    if (parsed.action === "update" && parsed.updates) {
  const updatedIds = parsed.updates.map((u: any) => u._id);

  setTasks(prev =>
    prev.map(t => {
      const update = parsed.updates.find((u: any) => u._id === t._id);
      return update ? { ...t, date: update.newDate } : t;
    })
  );

  setHighlightedTasks(updatedIds);

  setTimeout(() => {
    setHighlightedTasks([]);
  }, 2000);

  aiText = `✅ Updated ${updatedIds.length} task(s)`;
}

// 🔥 NEW: HANDLE DELETE
else if (parsed.action === "delete" && parsed.ids) {
  setTasks(prev =>
    prev.filter(t => !parsed.ids.includes(t._id))
  );

  aiText = `🗑️ Removed ${parsed.ids.length} task(s)`;
}

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
