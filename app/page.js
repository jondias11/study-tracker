"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then(res => res.json())
      .then(setTasks);
  }, []);

  const toggleTask = async (task) => {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: task._id,
        completed: !task.completed
      })
    });

    const updated = await res.json();

    setTasks(tasks.map(t => t._id === updated._id ? updated : t));
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Study Tracker</h1>

      {tasks.map(task => (
        <div key={task._id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task)}
          />
          {task.title} ({task.duration}h)
        </div>
      ))}
    </main>
  );
}