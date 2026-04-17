"use client";

import { useEffect, useState, useRef } from "react";

type Task = {
  _id: string;
  title: string;
  duration: number;
  completed: boolean;
  date: string;
  category: string;
};

export default function Page() {
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [loadingAI, setLoadingAI] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [chatLoading, setChatLoading] = useState(false);

  const [highlightedTasks, setHighlightedTasks] = useState<string[]>([]);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // FETCH TASKS
  useEffect(() => {
    fetch("/api/tasks")
      .then(res => res.json())
      .then(setTasks);
  }, []);

  // AUTO SCROLL CHAT
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  // GROUP TASKS
  const groupedTasks = tasks.reduce((acc: any, task) => {
    if (!acc[task.date]) acc[task.date] = [];
    acc[task.date].push(task);
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedTasks).sort();

  // SELECT TODAY (LOCAL TIME FIX)
  useEffect(() => {
    if (currentIndex !== null) return;
    if (sortedDates.length === 0) return;

    const today = new Date().toLocaleDateString("en-CA");

    let todayIndex = sortedDates.indexOf(today);

    if (todayIndex === -1) {
      todayIndex = sortedDates.findIndex(d => d >= today);
      if (todayIndex === -1) todayIndex = sortedDates.length - 1;
    }

    setCurrentIndex(todayIndex);
  }, [sortedDates, currentIndex]);

  const currentDate =
    currentIndex !== null ? sortedDates[currentIndex] : null;

  const dayTasks = currentDate ? groupedTasks[currentDate] || [] : [];

  // SUBJECT PROGRESS
  const subjectProgress = Object.entries(
    tasks.reduce((acc: any, task) => {
      if (!acc[task.category]) {
        acc[task.category] = { totalHours: 0, doneHours: 0 };
      }

      acc[task.category].totalHours += task.duration;

      if (task.completed) {
        acc[task.category].doneHours += task.duration;
      }

      return acc;
    }, {})
  );

  // TOGGLE TASK
  const toggleTask = async (task: Task) => {
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: task._id,
        completed: !task.completed
      })
    });

    setTasks(prev =>
      prev.map(t =>
        t._id === task._id
          ? { ...t, completed: !t.completed }
          : t
      )
    );
  };

  // AI PLAN (FIXED)
  const adjustPlan = async () => {
    setLoadingAI(true);

    try {
      const res = await fetch("/api/adjust-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tasks })
      });

      const data = await res.json();

      setAiResponse(
        data.error ? "AI error: " + data.error : data.message
      );
    } catch {
      setAiResponse("Failed to connect to AI");
    }

    setLoadingAI(false);
  };

  // CHAT (FIXED + DURATION SUPPORT)
  const sendMessage = async () => {
    if (!chatInput.trim() || chatLoading) return;

    setChatLoading(true);

    const userMsg = { role: "user", content: chatInput };
    setChatHistory(prev => [...prev, userMsg]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: chatInput,
          tasks
        })
      });

      const data = await res.json();

      let aiText = data.message || "Done";

      // UPDATE (DATE + DURATION)
      if (data.action === "update" && data.updates) {
        const updatedIds = data.updates.map((u: any) => u._id);

        setTasks(prev =>
          prev.map(t => {
            const update = data.updates.find((u: any) => u._id === t._id);
            if (!update) return t;

            return {
              ...t,
              date: update.newDate ?? t.date,
              duration: update.newDuration ?? t.duration
            };
          })
        );

        setHighlightedTasks(updatedIds);
        setTimeout(() => setHighlightedTasks([]), 2000);

        aiText = `✅ Updated ${updatedIds.length} task(s)`;
      }

      // DELETE
      else if (data.action === "delete" && data.ids) {
        setTasks(prev =>
          prev.filter(t => !data.ids.includes(t._id))
        );

        aiText = `🗑️ Removed ${data.ids.length} task(s)`;
      }

      setChatHistory(prev => [...prev, { role: "ai", content: aiText }]);

    } catch {
      setChatHistory(prev => [
        ...prev,
        { role: "ai", content: "Error talking to AI" }
      ]);
    }

    setChatInput("");
    setChatLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-2xl mx-auto">

        {/* SUBJECT PROGRESS */}
        <div className="flex gap-4 overflow-x-auto mb-6">
          {subjectProgress.map(([name, sub]: any, i) => {
            const percent = Math.round(
              (sub.doneHours / sub.totalHours) * 100
            );

            return (
              <div key={i} className="flex flex-col items-center min-w-[70px]">
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 rotate-[-90deg]">
                    <circle cx="32" cy="32" r="28" stroke="#333" strokeWidth="4" fill="none" />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="white"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={175}
                      strokeDashoffset={175 - (175 * percent) / 100}
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center text-sm">
                    {percent}%
                  </div>
                </div>

                <p className="text-xs mt-2 text-gray-400 text-center">
                  {name}
                </p>
              </div>
            );
          })}
        </div>

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() =>
              setCurrentIndex(i => Math.max((i ?? 0) - 1, 0))
            }
            className="w-10 h-10 rounded-full bg-white/10"
          >‹</button>

          <h1 className="text-xl font-semibold">
            {currentDate ? new Date(currentDate).toDateString() : "Loading..."}
          </h1>

          <button
            onClick={() =>
              setCurrentIndex(i =>
                Math.min((i ?? 0) + 1, sortedDates.length - 1)
              )
            }
            className="w-10 h-10 rounded-full bg-white/10"
          >›</button>
        </div>

        {/* TASKS */}
        <div className="space-y-3 mb-6">
          {dayTasks.map((task: Task) => (
            <div
              key={task._id}
              className={`p-4 rounded-xl border ${
                highlightedTasks.includes(task._id)
                  ? "bg-green-900 border-green-500"
                  : "bg-gray-900 border-gray-800"
              }`}
            >
              <p>{task.title}</p>
              <p className="text-sm text-gray-400">{task.duration} hrs</p>

              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task)}
              />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
