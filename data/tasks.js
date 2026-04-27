const tasks = [];

const add = (title, duration, date, category) => {
  tasks.push({
    title,
    duration,
    completed: false,
    date,
    category
  });
};

// 🔹 APRIL 27 (3h 15m)
for (let i = 1; i <= 3; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-27", "MUP");
add("DBMS Lec 1", 1, "2026-04-27", "DBMS");

// 🔹 APRIL 28 (8h 40m)
for (let i = 4; i <= 7; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-28", "MUP");
for (let i = 1; i <= 3; i++) add(`POM Lec ${i}`, 1, "2026-04-28", "POM");
add("Water Sanitation (6 videos)", 1, "2026-04-28", "WSS");
add("Water Sanitation (4 videos)", 0.67, "2026-04-28", "WSS");
add("DBMS Lec 2", 1, "2026-04-28", "DBMS");

// 🔹 APRIL 29 (8h 40m)
for (let i = 8; i <= 11; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-29", "MUP");
for (let i = 4; i <= 6; i++) add(`POM Lec ${i}`, 1, "2026-04-29", "POM");
add("Water Sanitation (6 videos)", 1, "2026-04-29", "WSS");
add("Water Sanitation (4 videos)", 0.67, "2026-04-29", "WSS");
add("DBMS Lec 3", 1, "2026-04-29", "DBMS");

// 🔹 APRIL 30 (7h 30m)
for (let i = 12; i <= 15; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-30", "MUP");
for (let i = 7; i <= 9; i++) add(`POM Lec ${i}`, 1, "2026-04-30", "POM");
add("DSA Lec 1", 0.75, "2026-04-30", "DSA");
add("DSA Lec 2", 0.75, "2026-04-30", "DSA");

// 🔹 MAY 1 (8h 25m)
add("POM Lec 10", 1, "2026-05-01", "POM");
add("POM Lec 11", 1, "2026-05-01", "POM");
for (let i = 3; i <= 7; i++) add(`DSA Lec ${i}`, 0.75, "2026-05-01", "DSA");
add("Water Sanitation (6 videos)", 1, "2026-05-01", "WSS");
add("Water Sanitation (4 videos)", 0.67, "2026-05-01", "WSS");
add("DBMS Lec 4", 1, "2026-05-01", "DBMS");

// 🔹 MAY 2 (9h 25m)
for (let i = 8; i <= 14; i++) add(`DSA Lec ${i}`, 0.75, "2026-05-02", "DSA");
add("MUP Lec 16", 0.75, "2026-05-02", "MUP");
add("MUP Lec 17", 0.75, "2026-05-02", "MUP");
add("Water Sanitation (6 videos)", 1, "2026-05-02", "WSS");
add("Water Sanitation (4 videos)", 0.67, "2026-05-02", "WSS");
add("DBMS Lec 5", 1, "2026-05-02", "DBMS");

// 🔹 MAY 3 (9h 15m)
for (let i = 15; i <= 25; i++) add(`DSA Lec ${i}`, 0.75, "2026-05-03", "DSA");
add("POM Lec 12", 1, "2026-05-03", "POM");

export default tasks;
