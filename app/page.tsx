"use client";

import { useEffect, useState } from "react";

type Task = {
_id: string;
title: string;
duration: number;
completed: boolean;
date: string;
category: string;
};

// 🔹 Helper to shift date
const addDays = (dateStr: string, days: number) => {
const date = new Date(dateStr);
date.setDate(date.getDate() + days);
return date.toISOString().split("T")[0]; // YYYY-MM-DD
};

export default function Page() {
const [tasks, setTasks] = useState<Task[]>([]);
const [currentIndex, setCurrentIndex] = useState<number | null>(null);

// 🔹 Fetch tasks
useEffect(() => {
fetch("/api/tasks")
.then(res => res.json())
.then(setTasks);
}, []);

// 🔹 Group by date
const groupedTasks = tasks.reduce((acc: Record<string, Task[]>, task) => {
if (!acc[task.date]) acc[task.date] = [];
acc[task.date].push(task);
return acc;
}, {});

const sortedDates = Object.keys(groupedTasks).sort();

// 🔹 Set current date
useEffect(() => {
if (currentIndex !== null) return;
if (sortedDates.length === 0) return;

```
const today = new Date().toISOString().split("T")[0];

let index = sortedDates.indexOf(today);

if (index === -1) {
  index = sortedDates.findIndex(d => d >= today);
  if (index === -1) index = sortedDates.length - 1;
}

setCurrentIndex(index);
```

}, [sortedDates, currentIndex]);

const currentDate =
currentIndex !== null ? sortedDates[currentIndex] : null;

const dayTasks = currentDate ? groupedTasks[currentDate] || [] : [];

// 🔹 Progress
const totalHours = dayTasks.reduce((sum, t) => sum + t.duration, 0);

const completedHours = dayTasks.reduce(
(sum, t) => sum + (t.completed ? t.duration : 0),
0
);

const dailyPercent =
totalHours === 0 ? 0 : Math.round((completedHours / totalHours) * 100);

const sortedDayTasks = [...dayTasks].sort(
(a, b) => Number(a.completed) - Number(b.completed)
);

// 🔹 Subject progress
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

// 🔹 Move task
const moveTask = async (task: Task, newDate: string) => {
const res = await fetch("/api/tasks", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
_id: task._id,
completed: task.completed,
date: newDate,
}),
});

```
const updated: Task = await res.json();

setTasks(prev =>
  prev.map(t => (t._id === updated._id ? updated : t))
);
```

};

// 🔹 Toggle task
const toggleTask = async (task: Task) => {
const res = await fetch("/api/tasks", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
_id: task._id,
completed: !task.completed,
}),
});

```
const updated: Task = await res.json();

setTasks(prev =>
  prev.map(t => (t._id === updated._id ? updated : t))
);
```

};

return ( <main className="min-h-screen bg-black text-white p-6"> <div className="max-w-2xl mx-auto">

```
    {/* SUBJECT PROGRESS */}
    <div className="flex gap-6 justify-center mb-6">
      {subjectProgress.map(([name, sub]: any, i) => {
        const percent = Math.round((sub.done / sub.total) * 100);

        return (
          <div key={i} className="flex flex-col items-center">
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
            <p className="text-xs mt-2 text-gray-400">{name}</p>
          </div>
        );
      })}
    </div>

    {/* DAILY PROGRESS */}
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-400 mb-1">
        <span>Daily Progress</span>
        <span>{completedHours} / {totalHours} hrs</span>
      </div>

      <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-white"
          style={{ width: `${dailyPercent}%` }}
        />
      </div>
    </div>

    {/* HEADER */}
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={() =>
          setCurrentIndex(i => Math.max((i ?? 0) - 1, 0))
        }
        className="w-10 h-10 bg-white/10 rounded-full"
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
        className="w-10 h-10 bg-white/10 rounded-full"
      >
        ›
      </button>
    </div>

    {/* TASKS */}
     <div className="space-y-3">
      {sortedDayTasks.map((task: Task) => (
        <div
          key={task._id}
          className={`flex justify-between items-center p-4 rounded-xl border ${
            task.completed ? "opacity-50" : ""
          }`}
        >
          <div>
            <p>{task.title}</p>
            <p className="text-sm text-gray-400">{task.duration} hrs</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => moveTask(task, addDays(task.date, -1))}
              className="px-2 py-1 text-xs bg-white/10 rounded"
            >
              ⬅
            </button>

            <button
              onClick={() => moveTask(task, addDays(task.date, 1))}
              className="px-2 py-1 text-xs bg-white/10 rounded"
            >
              ➡
            </button>

            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task)}
              className="w-5 h-5 accent-white"
            />
          </div>
        </div>
      ))}
    </div>

  </div>
</main>
  );
}
