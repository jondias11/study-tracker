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
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [chatLoading, setChatLoading] = useState(false);

  const [highlightedTasks, setHighlightedTasks] = useState<string[]>([]);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch("/api/tasks")
      .then(res => res.json())
      .then(setTasks);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const groupedTasks = tasks.reduce((acc: any, task) => {
    if (!acc[task.date]) acc[task.date] = [];
    acc[task.date].push(task);
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedTasks).sort();

  useEffect(() => {
    if (currentIndex !== null) return;
    if (sortedDates.length === 0) return;

    const today = new Date().toLocaleDateString("en-CA");

    let index = sortedDates.indexOf(today);

    if (index === -1) {
      index = sortedDates.findIndex(d => d >= today);
      if (index === -1) index = sortedDates.length - 1;
    }

    setCurrentIndex(index);
  }, [sortedDates, currentIndex]);

  const currentDate =
    currentIndex !== null ? sortedDates[currentIndex] : null;

  const dayTasks = currentDate ? groupedTasks[currentDate] || [] : [];

  // ✅ DAILY PROGRESS
  const totalHours = dayTasks.reduce((sum: number, task: Task) => sum + task.duration, 0);
  const completedHours = dayTasks.reduce(
    (sum: number, task: Task) => sum + (task.completed ? task.duration : 0),
    0
  );

  const dailyPercent =
    totalHours === 0 ? 0 : Math.round((completedHours / totalHours) * 100);

  // ✅ SORT TASKS (incomplete first)
  const sortedDayTasks = [...dayTasks].sort((a, b) => {
    return Number(a.completed) - Number(b.completed);
  });

  const subjectProgress = Object.entries(
    tasks.reduce((acc: any, task) => {
      if (!acc[task.category]) {
        acc[task.category] = { total: 0, done: 0 };
      }

      acc[task.category].total += task.duration;
      if (task.completed) acc[task.category].done += task.duration;

      return acc;
    }, {})
  );

  const toggleTask = async (task) => {
  const res = await fetch("/api/tasks", {
    method: "POST",
    body: JSON.stringify({
      _id: task._id,
      completed: !task.completed,
    }),
  });

  const updated = await res.json();

  setTasks(prev =>
    prev.map(t =>
      t._id === updated._id ? updated : t
    )
  );
};

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-2xl mx-auto">

        {/* SUBJECT PROGRESS */}
        <div className="flex gap-6 justify-center mb-6 w-full">
          {subjectProgress.map(([name, sub]: any, i) => {
            const percent = Math.round((sub.done / sub.total) * 100);

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

        {/* DAILY PROGRESS BAR */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-400 mb-1">
            <span>Daily Progress</span>
            <span>
              {completedHours} / {totalHours} hrs
            </span>
          </div>

          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500"
              style={{ width: `${dailyPercent}%` }}
            />
          </div>

          <p className="text-xs text-gray-500 mt-1 text-right">
            {dailyPercent}%
          </p>
        </div>

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() =>
              setCurrentIndex(i => Math.max((i ?? 0) - 1, 0))
            }
            className="w-10 h-10 rounded-full bg-white/10"
          >
            ‹
          </button>

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
          >
            ›
          </button>
        </div>

        {/* TASKS */}
        <div className="space-y-3 mb-6">
          {sortedDayTasks.map((task: Task) => (
            <div
              key={task._id}
              className={`flex items-center justify-between p-4 rounded-xl border transition ${
                highlightedTasks.includes(task._id)
                  ? "bg-green-900 border-green-500"
                  : "bg-gray-900 border-gray-800"
              } ${task.completed ? "opacity-50" : ""}`}
            >
              <div>
                <p className="font-medium">{task.title}</p>
                <p className="text-sm text-gray-400">
                  {task.duration} hrs
                </p>
              </div>

              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task)}
                className="w-5 h-5 accent-white"
              />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
