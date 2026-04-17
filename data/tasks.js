const tasks = [

  // ===== APR 18 =====
  { title: "DSA Lectures 1–10", duration: 2.5, date: "2026-04-18", category: "DSA", completed: false },
  { title: "DSA Lecture 11", duration: 1, date: "2026-04-18", category: "DSA", completed: false },
  { title: "DSA Lecture 12", duration: 1, date: "2026-04-18", category: "DSA", completed: false },

  { title: "PoM PPT 1", duration: 1.5, date: "2026-04-18", category: "PoM", completed: false },
  { title: "PoM PPT 2", duration: 1.5, date: "2026-04-18", category: "PoM", completed: false },

  { title: "MUP Slide 1", duration: 0.5, date: "2026-04-18", category: "MUP", completed: false },
  { title: "MUP Slide 2", duration: 0.5, date: "2026-04-18", category: "MUP", completed: false },

  { title: "DSA Coding", duration: 1, date: "2026-04-18", category: "DSA Coding", completed: false },
  { title: "ML", duration: 0.5, date: "2026-04-18", category: "ML", completed: false },

  // ===== APR 19 =====
  ...[13,14,15,16,17,18].map(i => ({
    title: `DSA Lecture ${i}`, duration: 1, date: "2026-04-19", category: "DSA", completed: false
  })),

  { title: "DBMS Chapter 1", duration: 1.5, date: "2026-04-19", category: "DBMS", completed: false },
  { title: "PoM PPT 3", duration: 1.5, date: "2026-04-19", category: "PoM", completed: false },

  { title: "DSA Coding", duration: 1, date: "2026-04-19", category: "DSA Coding", completed: false },
  { title: "ML", duration: 0.5, date: "2026-04-19", category: "ML", completed: false },

  // ===== APR 20 =====
  { title: "MUP Lab Prep", duration: 3, date: "2026-04-20", category: "MUP", completed: false },

  ...[19,20,21,22,23].map(i => ({
    title: `DSA Lecture ${i}`, duration: 1, date: "2026-04-20", category: "DSA", completed: false
  })),

  { title: "DBMS Chapter 2", duration: 1, date: "2026-04-20", category: "DBMS", completed: false },

  { title: "DSA Coding", duration: 1, date: "2026-04-20", category: "DSA Coding", completed: false },
  { title: "ML", duration: 0.5, date: "2026-04-20", category: "ML", completed: false },

  // ===== APR 21 =====
  ...[24,25,26,27,28].map(i => ({
    title: `DSA Lecture ${i}`, duration: 1, date: "2026-04-21", category: "DSA", completed: false
  })),

  { title: "MUP Slide 3", duration: 1, date: "2026-04-21", category: "MUP", completed: false },
  { title: "MUP Slide 4", duration: 1, date: "2026-04-21", category: "MUP", completed: false },

  { title: "PoM PPT 4", duration: 1.5, date: "2026-04-21", category: "PoM", completed: false },

  ...[1,2,3,4,5].map(i => ({
    title: `Water San ${i}`, duration: 0.2, date: "2026-04-21", category: "Water Sanitation", completed: false
  })),

  { title: "DSA Coding", duration: 1, date: "2026-04-21", category: "DSA Coding", completed: false },

  // ===== APR 22 =====
  { title: "PoM Assignment Prep", duration: 2, date: "2026-04-22", category: "PoM", completed: false },

  ...[29,30,31].map(i => ({
    title: `DSA Lecture ${i}`, duration: 1, date: "2026-04-22", category: "DSA", completed: false
  })),

  { title: "DBMS Chapter 3", duration: 1, date: "2026-04-22", category: "DBMS", completed: false },
  { title: "DBMS Chapter 4", duration: 1, date: "2026-04-22", category: "DBMS", completed: false },

  { title: "MUP Slide 5", duration: 0.75, date: "2026-04-22", category: "MUP", completed: false },
  { title: "MUP Slide 6", duration: 0.75, date: "2026-04-22", category: "MUP", completed: false },

  { title: "DSA Coding", duration: 1, date: "2026-04-22", category: "DSA Coding", completed: false },
  { title: "ML", duration: 0.5, date: "2026-04-22", category: "ML", completed: false },

  // ===== APR 23 =====
  { title: "DSA Lecture 32", duration: 1, date: "2026-04-23", category: "DSA", completed: false },
  { title: "DSA Lecture 33", duration: 1, date: "2026-04-23", category: "DSA", completed: false },
  { title: "DSA Extra", duration: 1, date: "2026-04-23", category: "DSA", completed: false },
  { title: "PoM Assignment Prep", duration: 2, date: "2026-04-23", category: "PoM", completed: false },

  // ===== APR 24 =====
  { title: "DBMS Chapter 5", duration: 1, date: "2026-04-24", category: "DBMS", completed: false },
  { title: "DBMS Chapter 6", duration: 1, date: "2026-04-24", category: "DBMS", completed: false },
  { title: "PoM PPT 5", duration: 1.5, date: "2026-04-24", category: "PoM", completed: false },
  { title: "DSA Coding", duration: 1, date: "2026-04-24", category: "DSA Coding", completed: false },
  { title: "ML", duration: 0.5, date: "2026-04-24", category: "ML", completed: false },

  // ===== APR 25 =====
  { title: "DSA Lecture 34", duration: 1, date: "2026-04-25", category: "DSA", completed: false },
  { title: "DSA Lecture 35", duration: 1, date: "2026-04-25", category: "DSA", completed: false },

  { title: "PoM PPT 6", duration: 1.5, date: "2026-04-25", category: "PoM", completed: false },
  { title: "PoM PPT 7", duration: 1.5, date: "2026-04-25", category: "PoM", completed: false },

  ...[7,8,9,10].map(i => ({
    title: `MUP Slide ${i}`, duration: 0.75, date: "2026-04-25", category: "MUP", completed: false
  })),

  { title: "DBMS Chapter 7", duration: 0.75, date: "2026-04-25", category: "DBMS", completed: false },
  { title: "DBMS Chapter 8", duration: 0.75, date: "2026-04-25", category: "DBMS", completed: false },

  { title: "DSA Coding", duration: 0.5, date: "2026-04-25", category: "DSA Coding", completed: false },

  // ===== APR 26 =====
  { title: "DSA Lecture 36", duration: 1, date: "2026-04-26", category: "DSA", completed: false },

  { title: "PoM PPT 8", duration: 1.5, date: "2026-04-26", category: "PoM", completed: false },
  { title: "PoM PPT 9", duration: 1.5, date: "2026-04-26", category: "PoM", completed: false },

  ...Array.from({ length: 15 }, (_, i) => ({
    title: `Water San ${i + 6}`, duration: 0.166, date: "2026-04-26", category: "Water Sanitation", completed: false
  })),

  { title: "DBMS Chapter 9", duration: 1, date: "2026-04-26", category: "DBMS", completed: false },
  { title: "DBMS Chapter 10", duration: 1, date: "2026-04-26", category: "DBMS", completed: false },

  { title: "DSA Coding", duration: 0.5, date: "2026-04-26", category: "DSA Coding", completed: false },
  { title: "ML", duration: 0.5, date: "2026-04-26", category: "ML", completed: false },

  // ===== APR 27 =====
  ...[11,12,13,14,15].map(i => ({
    title: `MUP Slide ${i}`, duration: 0.7, date: "2026-04-27", category: "MUP", completed: false
  })),

  { title: "PoM PPT 10", duration: 1.5, date: "2026-04-27", category: "PoM", completed: false },
  { title: "PoM PPT 11", duration: 1.5, date: "2026-04-27", category: "PoM", completed: false },

  { title: "DBMS Chapter 11", duration: 1, date: "2026-04-27", category: "DBMS", completed: false },
  { title: "DBMS Chapter 12", duration: 1, date: "2026-04-27", category: "DBMS", completed: false },

  ...[21,22,23,24,25,26,27,28,29,30].map(i => ({
    title: `Water San ${i}`, duration: 0.1, date: "2026-04-27", category: "Water Sanitation", completed: false
  })),

  { title: "ML", duration: 0.5, date: "2026-04-27", category: "ML", completed: false },

  // ===== APR 28 =====
  ...Array.from({ length: 20 }, (_, i) => ({
    title: `Water San ${i + 31}`, duration: 0.15, date: "2026-04-28", category: "Water Sanitation", completed: false
  })),

  ...[16,17,18,19,20].map(i => ({
    title: `MUP Slide ${i}`, duration: 0.6, date: "2026-04-28", category: "MUP", completed: false
  })),

  { title: "PoM PPT 12", duration: 1.5, date: "2026-04-28", category: "PoM", completed: false },
  { title: "PoM PPT 13", duration: 1.5, date: "2026-04-28", category: "PoM", completed: false },

  { title: "DSA Coding", duration: 0.5, date: "2026-04-28", category: "DSA Coding", completed: false },
  { title: "ML", duration: 0.5, date: "2026-04-28", category: "ML", completed: false },

  // ===== APR 29 =====
  ...[1,2,3,4].map(i => ({
    title: `PoM Old PPT ${i}`, duration: 1, date: "2026-04-29", category: "PoM", completed: false
  })),

  { title: "DBMS Chapter 13", duration: 2, date: "2026-04-29", category: "DBMS", completed: false },

  ...[21,22,23].map(i => ({
    title: `MUP Slide ${i}`, duration: 0.8, date: "2026-04-29", category: "MUP", completed: false
  })),

  ...[51,52,53,54,55].map(i => ({
    title: `Water San ${i}`, duration: 0.2, date: "2026-04-29", category: "Water Sanitation", completed: false
  })),

  { title: "ML", duration: 0.5, date: "2026-04-29", category: "ML", completed: false },

  // ===== APR 30 =====
  ...[5,6,7,8].map(i => ({
    title: `PoM Old PPT ${i}`, duration: 1, date: "2026-04-30", category: "PoM", completed: false
  })),

  ...[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70].map(i => ({
    title: `Water San ${i}`, duration: 0.2, date: "2026-04-30", category: "Water Sanitation", completed: false
  })),

  { title: "MUP Slide 24", duration: 1, date: "2026-04-30", category: "MUP", completed: false },
  { title: "MUP Slide 25", duration: 1, date: "2026-04-30", category: "MUP", completed: false },

  { title: "DSA Coding", duration: 0.5, date: "2026-04-30", category: "DSA Coding", completed: false },
  { title: "ML", duration: 0.5, date: "2026-04-30", category: "ML", completed: false },

  // ===== MAY 1 =====
  { title: "MUP Old Slides", duration: 3, date: "2026-05-01", category: "MUP", completed: false },
  { title: "DBMS Chapter 14", duration: 1.5, date: "2026-05-01", category: "DBMS", completed: false },

  ...[71,72,73,74,75].map(i => ({
    title: `Water San ${i}`, duration: 0.4, date: "2026-05-01", category: "Water Sanitation", completed: false
  })),

  { title: "Revision", duration: 2.5, date: "2026-05-01", category: "Revision", completed: false },
  { title: "ML", duration: 0.5, date: "2026-05-01", category: "ML", completed: false },

  // ===== MAY 2 =====
  ...[76,77,78,79,80].map(i => ({
    title: `Water San ${i}`, duration: 0.4, date: "2026-05-02", category: "Water Sanitation", completed: false
  })),

  { title: "Final Revision", duration: 5, date: "2026-05-02", category: "Revision", completed: false },
  { title: "DSA Coding", duration: 1, date: "2026-05-02", category: "DSA Coding", completed: false },
  { title: "ML", duration: 1, date: "2026-05-02", category: "ML", completed: false }

];

export default tasks;
