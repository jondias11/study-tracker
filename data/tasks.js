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

// 🔹 APRIL 22
add("POM Assignment Prep", 1.5, "2026-04-22", "POM");
for (let i = 20; i <= 27; i++) add(`DSA Lec ${i}`, 0.75, "2026-04-22", "DSA");
add("Water Sanitation (6 videos)", 1, "2026-04-22", "WSS");

// 🔹 APRIL 23
for (let i = 28; i <= 33; i++) add(`DSA Lec ${i}`, 0.75, "2026-04-23", "DSA");
add("POM Assignment Prep", 1, "2026-04-23", "POM");
add("POM Lec 1", 1, "2026-04-23", "POM");
add("DBMS Lec 1", 1.25, "2026-04-23", "DBMS");

// 🔹 APRIL 24
for (let i = 34; i <= 36; i++) add(`DSA Lec ${i}`, 0.75, "2026-04-24", "DSA");
add("DBMS Lec 2", 1.25, "2026-04-24", "DBMS");
add("DBMS Lec 3", 1.25, "2026-04-24", "DBMS");
for (let i = 1; i <= 3; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-24", "MUP");
add("POM Lec 2", 1, "2026-04-24", "POM");

// 🔹 APRIL 25
add("DSA Lec 37", 0.75, "2026-04-25", "DSA");
add("DSA Lec 38", 0.75, "2026-04-25", "DSA");
for (let i = 12; i <= 14; i++) add(`DSA Lec ${i}`, 0.75, "2026-04-25", "DSA");
add("DBMS Lec 4", 1.25, "2026-04-25", "DBMS");
add("DBMS Lec 5", 1.25, "2026-04-25", "DBMS");
for (let i = 4; i <= 6; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-25", "MUP");

// 🔹 APRIL 26
add("DSA Lec 15", 0.75, "2026-04-26", "DSA");
add("DSA Lec 16", 0.75, "2026-04-26", "DSA");
add("DBMS Lec 6", 1.25, "2026-04-26", "DBMS");
add("MUP Lec 7", 0.75, "2026-04-26", "MUP");
add("MUP Lec 8", 0.75, "2026-04-26", "MUP");
add("Water Sanitation (6 videos)", 1, "2026-04-26", "WSS");

// 🔹 APRIL 27
add("DSA Lec 17", 0.75, "2026-04-27", "DSA");
add("DSA Lec 18", 0.75, "2026-04-27", "DSA");
add("DBMS Lec 7", 1.25, "2026-04-27", "DBMS");
add("DBMS Lec 8", 1.25, "2026-04-27", "DBMS");
for (let i = 9; i <= 11; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-27", "MUP");
add("POM Lec 3", 1, "2026-04-27", "POM");
add("POM Lec 4", 1, "2026-04-27", "POM");

// 🔹 APRIL 28
add("DSA Lec 19", 0.75, "2026-04-28", "DSA");
add("DSA Lec 20", 0.75, "2026-04-28", "DSA");
add("DBMS Lec 9", 1.25, "2026-04-28", "DBMS");
add("DBMS Lec 10", 1.25, "2026-04-28", "DBMS");
for (let i = 12; i <= 14; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-28", "MUP");
add("POM Lec 5", 1, "2026-04-28", "POM");
add("POM Lec 6", 1, "2026-04-28", "POM");

// 🔹 APRIL 29
for (let i = 7; i <= 9; i++) add(`POM Lec ${i}`, 1, "2026-04-29", "POM");
add("DBMS Lec 11", 1.25, "2026-04-29", "DBMS");
add("DBMS Lec 12", 1.25, "2026-04-29", "DBMS");
for (let i = 15; i <= 17; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-29", "MUP");
add("Water Sanitation (6 videos)", 1, "2026-04-29", "WSS");

// 🔹 APRIL 30
for (let i = 10; i <= 12; i++) add(`POM Lec ${i}`, 1, "2026-04-30", "POM");
add("DBMS Lec 13", 1.25, "2026-04-30", "DBMS");
for (let i = 18; i <= 20; i++) add(`MUP Lec ${i}`, 0.75, "2026-04-30", "MUP");
add("MUP Old Lectures", 3, "2026-04-30", "MUP");

// 🔹 MAY 1
for (let i = 13; i <= 16; i++) add(`POM Lec ${i}`, 1, "2026-05-01", "POM");
add("DBMS Lec 14", 1.25, "2026-05-01", "DBMS");
for (let i = 21; i <= 24; i++) add(`MUP Lec ${i}`, 0.75, "2026-05-01", "MUP");
add("Water Sanitation (6 videos)", 1, "2026-05-01", "WSS");
add("Water Sanitation (3 videos)", 0.5, "2026-05-01", "WSS");

// 🔹 MAY 2
for (let i = 17; i <= 19; i++) add(`POM Lec ${i}`, 1, "2026-05-02", "POM");
for (let i = 25; i <= 28; i++) add(`MUP Lec ${i}`, 0.75, "2026-05-02", "MUP");

export default tasks;
