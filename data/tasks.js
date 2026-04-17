const tasks = [

  // ===== APR 18 =====
  { title: "DSA Lectures 1–10", duration: 2.5, date: "2026-04-18", category: "DSA", completed: false },

  { title: "PoM PPT 1", duration: 1.5, date: "2026-04-18", category: "PoM", completed: false },

  { title: "MUP Slide 1", duration: 0.75, date: "2026-04-18", category: "MUP", completed: false },
  { title: "MUP Slide 2", duration: 0.75, date: "2026-04-18", category: "MUP", completed: false },

  { title: "DBMS Chapter 1", duration: 1.5, date: "2026-04-18", category: "DBMS", completed: false },

  { title: "DSA Coding", duration: 1, date: "2026-04-18", category: "DSA", completed: false },
  { title: "ML", duration: 1, date: "2026-04-18", category: "ML", completed: false },

  // ===== APR 19 =====
  ...[11,12,13,14,15].map(i => ({
    title: `DSA Lecture ${i}`, duration: 1, date: "2026-04-19", category: "DSA", completed: false
  })),

  ...[1,2,3,4,5,6].map(i => ({
    title: `Water San ${i}`, duration: 1/6, date: "2026-04-19", category: "Water", completed: false
  })),

  { title: "PoM PPT 2", duration: 1, date: "2026-04-19", category: "PoM", completed: false },

  { title: "DSA Coding", duration: 1, date: "2026-04-19", category: "DSA", completed: false },
  { title: "ML", duration: 1, date: "2026-04-19", category: "ML", completed: false },

  // ===== APR 20 =====
  { title: "MUP Lab Prep", duration: 3, date: "2026-04-20", category: "MUP", completed: false },

  ...[16,17,18,19,20].map(i => ({
    title: `DSA Lecture ${i}`, duration: 1, date: "2026-04-20", category: "DSA", completed: false
  })),

  { title: "DSA Coding", duration: 1, date: "2026-04-20", category: "DSA", completed: false },

  // ===== APR 21 =====
  ...[21,22,23,24,25,26].map(i => ({
    title: `DSA Lecture ${i}`, duration: 1, date: "2026-04-21", category: "DSA", completed: false
  })),

  ...[7,8,9,10,11,12].map(i => ({
    title: `Water San ${i}`, duration: 1.25/6, date: "2026-04-21", category: "Water", completed: false
  })),

  { title: "DSA Coding", duration: 1, date: "2026-04-21", category: "DSA", completed: false },
  { title: "ML", duration: 0.75, date: "2026-04-21", category: "ML", completed: false },

  // ===== APR 22 =====
  { title: "PoM Assignment Prep", duration: 2, date: "2026-04-22", category: "PoM", completed: false },

  ...[27,28,29,30,31].map(i => ({
    title: `DSA Lecture ${i}`, duration: 1, date: "2026-04-22", category: "DSA", completed: false
  })),

  { title: "DBMS Chapter 2", duration: 1, date: "2026-04-22", category: "DBMS", completed: false },
  { title: "DBMS Chapter 3", duration: 1, date: "2026-04-22", category: "DBMS", completed: false },

  { title: "DSA Coding", duration: 1, date: "2026-04-22", category: "DSA", completed: false },
  { title: "ML", duration: 0.75, date: "2026-04-22", category: "ML", completed: false },

  // ===== APR 23 =====
  { title: "DSA Lecture 32", duration: 1, date: "2026-04-23", category: "DSA", completed: false },
  { title: "DSA Lecture 33", duration: 1, date: "2026-04-23", category: "DSA", completed: false },
  { title: "DSA Extra Practice", duration: 1, date: "2026-04-23", category: "DSA", completed: false },
  { title: "PoM Assignment Prep", duration: 2, date: "2026-04-23", category: "PoM", completed: false },

  // ===== APR 24 =====
  { title: "DSA Coding", duration: 1, date: "2026-04-24", category: "DSA", completed: false },
  { title: "ML", duration: 0.75, date: "2026-04-24", category: "ML", completed: false },

  // ===== APR 25 =====
  { title: "DSA Coding", duration: 1, date: "2026-04-25", category: "DSA", completed: false },
  { title: "ML", duration: 0.75, date: "2026-04-25", category: "ML", completed: false },

  // ===== APR 26 → MAY 2 (kept clean but still split logically) =====

  { title: "DSA Lecture 34", duration: 1, date: "2026-04-26", category: "DSA", completed: false },
  { title: "PoM PPT 6", duration: 1.5, date: "2026-04-26", category: "PoM", completed: false },
  { title: "PoM PPT 7", duration: 1.5, date: "2026-04-26", category: "PoM", completed: false },

  { title: "DSA Lecture 35", duration: 1, date: "2026-04-27", category: "DSA", completed: false },
  { title: "DBMS Chapter 4", duration: 1, date: "2026-04-27", category: "DBMS", completed: false },

  { title: "DSA Lecture 36", duration: 1, date: "2026-04-28", category: "DSA", completed: false },

  { title: "DBMS Chapter 5", duration: 1, date: "2026-04-29", category: "DBMS", completed: false },

  { title: "DBMS Chapter 6", duration: 1, date: "2026-04-30", category: "DBMS", completed: false },

  { title: "Revision", duration: 3, date: "2026-05-01", category: "Revision", completed: false },

  { title: "Final Revision", duration: 4, date: "2026-05-02", category: "Revision", completed: false }

];

export default tasks;
