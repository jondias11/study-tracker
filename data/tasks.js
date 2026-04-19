const tasks = [

  // ===== APR 20 =====
  { title: "MUP Lab Prep", duration: 3, date: "2026-04-20", category: "MUP", completed: false },

  { title: "DSA Lecture 11", duration: 1, date: "2026-04-20", category: "DSA", completed: false },
  { title: "DSA Lecture 12", duration: 1, date: "2026-04-20", category: "DSA", completed: false },
  { title: "DSA Lecture 13", duration: 1, date: "2026-04-20", category: "DSA", completed: false },
  { title: "DSA Lecture 14", duration: 1, date: "2026-04-20", category: "DSA", completed: false },
  { title: "DSA Lecture 15", duration: 1, date: "2026-04-20", category: "DSA", completed: false },
  { title: "DSA Lecture 16", duration: 1, date: "2026-04-20", category: "DSA", completed: false },

  { title: "DSA Coding", duration: 1, date: "2026-04-20", category: "DSA", completed: false },

  // ===== APR 21 =====
  { title: "DSA Lecture 17", duration: 1, date: "2026-04-21", category: "DSA", completed: false },
  { title: "DSA Lecture 18", duration: 1, date: "2026-04-21", category: "DSA", completed: false },
  { title: "DSA Lecture 19", duration: 1, date: "2026-04-21", category: "DSA", completed: false },
  { title: "DSA Lecture 20", duration: 1, date: "2026-04-21", category: "DSA", completed: false },
  { title: "DSA Lecture 21", duration: 1, date: "2026-04-21", category: "DSA", completed: false },
  { title: "DSA Lecture 22", duration: 1, date: "2026-04-21", category: "DSA", completed: false },
  { title: "DSA Lecture 23", duration: 1, date: "2026-04-21", category: "DSA", completed: false },

  { title: "DSA Coding", duration: 1, date: "2026-04-21", category: "DSA", completed: false },
  { title: "PoM PPT 1", duration: 1, date: "2026-04-21", category: "PoM", completed: false },

  // ===== APR 22 =====
  { title: "PoM Assignment Prep", duration: 2, date: "2026-04-22", category: "PoM", completed: false },

  { title: "DSA Lecture 24", duration: 1, date: "2026-04-22", category: "DSA", completed: false },
  { title: "DSA Lecture 25", duration: 1, date: "2026-04-22", category: "DSA", completed: false },
  { title: "DSA Lecture 26", duration: 1, date: "2026-04-22", category: "DSA", completed: false },
  { title: "DSA Lecture 27", duration: 1, date: "2026-04-22", category: "DSA", completed: false },

  { title: "DBMS Chapter 1", duration: 1.5, date: "2026-04-22", category: "DBMS", completed: false },
  { title: "DBMS Chapter 2", duration: 1.5, date: "2026-04-22", category: "DBMS", completed: false },

  { title: "DSA Coding", duration: 1, date: "2026-04-22", category: "DSA", completed: false },

  // ===== APR 23 =====
  { title: "DSA Lecture 28", duration: 1, date: "2026-04-23", category: "DSA", completed: false },
  { title: "DSA Lecture 29", duration: 1, date: "2026-04-23", category: "DSA", completed: false },
  { title: "DSA Lecture 30", duration: 1, date: "2026-04-23", category: "DSA", completed: false },
  { title: "DSA Lecture 31", duration: 1, date: "2026-04-23", category: "DSA", completed: false },
  { title: "DSA Lecture 32", duration: 1, date: "2026-04-23", category: "DSA", completed: false },

  // ===== APR 24 =====
  { title: "DSA Lecture 33", duration: 1, date: "2026-04-24", category: "DSA", completed: false },
  { title: "DBMS Chapter 3", duration: 1.5, date: "2026-04-24", category: "DBMS", completed: false },
  { title: "PoM PPT 2", duration: 1, date: "2026-04-24", category: "PoM", completed: false },

  { title: "Water San Video 1", duration: 0.2, date: "2026-04-24", category: "Water", completed: false },
  { title: "Water San Video 2", duration: 0.2, date: "2026-04-24", category: "Water", completed: false },
  { title: "Water San Video 3", duration: 0.2, date: "2026-04-24", category: "Water", completed: false },
  { title: "Water San Video 4", duration: 0.2, date: "2026-04-24", category: "Water", completed: false },
  { title: "Water San Video 5", duration: 0.2, date: "2026-04-24", category: "Water", completed: false },
  { title: "Water San Video 6", duration: 0.2, date: "2026-04-24", category: "Water", completed: false },

  // ===== CONTINUING CLEANLY =====

  // DBMS 4–14
  ...Array.from({ length: 11 }, (_, i) => ({
    title: `DBMS Chapter ${i + 4}`,
    duration: 1.5,
    date: `2026-04-${25 + Math.floor(i / 2)}`,
    category: "DBMS",
    completed: false
  })),

  // PoM PPT 3–13
  ...Array.from({ length: 11 }, (_, i) => ({
    title: `PoM PPT ${i + 3}`,
    duration: 1,
    date: `2026-04-${25 + Math.floor(i / 2)}`,
    category: "PoM",
    completed: false
  })),

  // PoM Old PPT 1–8
  ...Array.from({ length: 8 }, (_, i) => ({
    title: `PoM Old PPT ${i + 1}`,
    duration: 1,
    date: `2026-05-0${1 + Math.floor(i / 3)}`,
    category: "PoM",
    completed: false
  })),

  // Water San 7–80
  ...Array.from({ length: 74 }, (_, i) => ({
    title: `Water San Video ${i + 7}`,
    duration: 0.2,
    date: `2026-04-${25 + Math.floor(i / 10)}`,
    category: "Water",
    completed: false
  })),

  // MUP Slides 1–25
  ...Array.from({ length: 25 }, (_, i) => ({
    title: `MUP Slide ${i + 1}`,
    duration: 0.5,
    date: `2026-04-${25 + Math.floor(i / 4)}`,
    category: "MUP",
    completed: false
  })),

  // MUP Old Slides
  { title: "MUP Old Slides", duration: 3, date: "2026-05-01", category: "MUP", completed: false },

  // ===== MAY 2 =====
  { title: "MUP Completion", duration: 4, date: "2026-05-02", category: "MUP", completed: false },
  { title: "DSA Practice", duration: 2, date: "2026-05-02", category: "DSA", completed: false },

  // ===== MAY 3 =====
  { title: "DSA Lecture 34", duration: 1, date: "2026-05-03", category: "DSA", completed: false },
  { title: "DSA Lecture 35", duration: 1, date: "2026-05-03", category: "DSA", completed: false },
  { title: "DSA Lecture 36", duration: 1, date: "2026-05-03", category: "DSA", completed: false },
  { title: "DSA Lecture 37", duration: 1, date: "2026-05-03", category: "DSA", completed: false },
  { title: "DSA Revision", duration: 2, date: "2026-05-03", category: "DSA", completed: false }

];

export default tasks;
