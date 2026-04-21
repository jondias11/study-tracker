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

// 🔹 APRIL 21
add("MUP Lab Prep", 2, "2026-04-21", "MUP");
for (let i = 11; i <= 17; i++) add(`DSA Lec ${i}`, 0.75, "2026-04-21", "DSA");
add("POM Lec 1", 1, "2026-04-21", "POM");

// 🔹 APRIL 22
for (let i = 18; i <= 27; i++) add(`DSA Lec ${i}`, 0.75, "2026-04-22", "DSA");
add("POM Lec 2", 1, "2026-04-22", "POM");

// 🔹 APRIL 23
for (let i = 28; i <= 33; i++) add(`DSA Lec ${i}`, 0.75, "2026-04-23", "DSA");
add("POM Assignment Prep", 2, "2026-04-23", "POM");
add("Water Sanitation (6 videos)", 1, "2026-04-23", "WSS");

// 🔹 APRIL 24
for (let i = 3; i <= 5; i++) add(`POM Lec ${i}`, 1, "2026-04-24", "POM");
add("DBMS Lec 1", 1.25, "2026-04-24", "DBMS");
add("DBMS Lec 2", 1.25, "2026-04-24", "DBMS");
for (let i = 1; i <= 3; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-24", "MUP");
add("Water Sanitation (6 videos)", 1, "2026-04-24", "WSS");

// 🔹 APRIL 25
for (let i = 6; i <= 8; i++) add(`POM Lec ${i}`, 1, "2026-04-25", "POM");
add("DBMS Lec 3", 1.25, "2026-04-25", "DBMS");
add("DBMS Lec 4", 1.25, "2026-04-25", "DBMS");
for (let i = 4; i <= 6; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-25", "MUP");
add("Water Sanitation (6 videos)", 1, "2026-04-25", "WSS");

// 🔹 APRIL 26
add("POM Lec 9", 1, "2026-04-26", "POM");
add("POM Lec 10", 1, "2026-04-26", "POM");
add("DBMS Lec 5", 1.25, "2026-04-26", "DBMS");
add("MUP Lec 7", 0.75, "2026-04-26", "MUP");
add("MUP Lec 8", 0.75, "2026-04-26", "MUP");
add("Water Sanitation (6 videos)", 1, "2026-04-26", "WSS");

// 🔹 APRIL 27
for (let i = 11; i <= 13; i++) add(`POM Lec ${i}`, 1, "2026-04-27", "POM");
add("DBMS Lec 6", 1.25, "2026-04-27", "DBMS");
add("DBMS Lec 7", 1.25, "2026-04-27", "DBMS");
for (let i = 9; i <= 11; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-27", "MUP");
add("Water Sanitation (6 videos)", 1, "2026-04-27", "WSS");

// 🔹 APRIL 28
for (let i = 14; i <= 16; i++) add(`POM Lec ${i}`, 1, "2026-04-28", "POM");
add("DBMS Lec 8", 1.25, "2026-04-28", "DBMS");
add("DBMS Lec 9", 1.25, "2026-04-28", "DBMS");
for (let i = 12; i <= 14; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-28", "MUP");
add("Water Sanitation (6 videos)", 1, "2026-04-28", "WSS");
add("Water Sanitation (1 video)", 0.15, "2026-04-28", "WSS");

// 🔹 APRIL 29
for (let i = 17; i <= 19; i++) add(`POM Lec ${i}`, 1, "2026-04-29", "POM");
add("DBMS Lec 10", 1.25, "2026-04-29", "DBMS");
add("DBMS Lec 11", 1.25, "2026-04-29", "DBMS");
for (let i = 15; i <= 17; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-29", "MUP");
add("Water Sanitation (6 videos)", 1, "2026-04-29", "WSS");

// 🔹 APRIL 30
add("POM Lec 20", 1, "2026-04-30", "POM");
add("DBMS Lec 12", 1.25, "2026-04-30", "DBMS");
add("MUP Lec 18", 0.75, "2026-04-30", "MUP");
add("MUP Lec 19", 0.75, "2026-04-30", "MUP");
add("MUP Old Lectures", 3, "2026-04-30", "MUP");
add("Water Sanitation (6 videos)", 1, "2026-04-30", "WSS");

// 🔹 MAY 1
add("POM Lec 21", 1, "2026-05-01", "POM");
add("POM Lec 22", 1, "2026-05-01", "POM");
add("POM Lec 23", 1, "2026-05-01", "POM");
add("DBMS Lec 13", 1.25, "2026-05-01", "DBMS");
for (let i = 20; i <= 23; i++) add(`MUP Lec ${i}`, 0.75, "2026-05-01", "MUP");
add("Water Sanitation (6 videos)", 1, "2026-05-01", "WSS");

// 🔹 MAY 2
add("POM Lec 24", 1, "2026-05-02", "POM");
add("POM Lec 25", 1, "2026-05-02", "POM");
add("DBMS Lec 14", 1.25, "2026-05-02", "DBMS");
for (let i = 24; i <= 28; i++) add(`MUP Lec ${i}`, 0.75, "2026-05-02", "MUP");
add("Water Sanitation (4 videos)", 0.7, "2026-05-02", "WSS");

export default tasks;
