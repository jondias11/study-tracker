import Groq from "groq-sdk";

export async function POST(req) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return Response.json(
        { error: "Missing GROQ API key" },
        { status: 500 }
      );
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const { tasks } = await req.json();

    const today = new Date().toISOString().split("T")[0];

    // 🔥 BACKLOG CALCULATION
    const subjectStats = {};

    tasks.forEach((task) => {
      if (!subjectStats[task.category]) {
        subjectStats[task.category] = {
          planned: 0,
          completed: 0,
        };
      }

      // Only consider tasks up to today
      if (task.date <= today) {
        subjectStats[task.category].planned += task.duration;

        if (task.completed) {
          subjectStats[task.category].completed += task.duration;
        }
      }
    });

    // Calculate backlog
    const backlog = {};

    Object.keys(subjectStats).forEach((subject) => {
      const { planned, completed } = subjectStats[subject];
      backlog[subject] = +(planned - completed).toFixed(2);
    });

    // 🔥 PROMPT (uses REAL data now)
    const prompt = `
You are an intelligent study planner.

The following backlog has been PRE-CALCULATED (DO NOT recompute):

${JSON.stringify(backlog, null, 2)}

Your job:
- Identify which subjects are behind
- Redistribute backlog across upcoming days
- Keep daily load ≤ 10 hours
- Prioritize: DSA > DBMS > PoM > others

STRICT RULES:
- Be specific (mention hours and dates)
- Do NOT give generic advice
- Keep under 5 lines

Example:
"You are 5 hours behind in DSA.
Move 2h to Apr 24 and 3h to Apr 25."

`;

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const message =
      response?.choices?.[0]?.message?.content ||
      "No response from AI";

    return Response.json({
      message,
      backlog, // 🔥 optional: useful for UI later
    });

  } catch (err) {
    console.error("GROQ ERROR:", err);

    return Response.json(
      { error: err.message || "AI failed" },
      { status: 500 }
    );
  }
}   