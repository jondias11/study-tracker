const tasks = [

  // ===== APR 19 =====
  ...[11,12,13,14,15].map(i => ({
    title: `DSA Lecture ${i}`,
    duration: 1,
    date: "2026-04-19",
    category: "DSA",
    completed: false
  })),

  { title: "PoM PPT 1", duration: 1.5, date: "2026-04-19", category: "PoM", completed: false },

  { title: "MUP Slide 1", duration: 0.75, date: "2026-04-19", category: "MUP", completed: false },
  { title: "MUP Slide 2", duration: 0.75, date: "2026-04-19", category: "MUP", completed: false },

  { title: "DBMS Chapter 1", duration: 1, date: "2026-04-19", category: "DBMS", completed: false },

  // ===== APR 20 =====
  { title: "MUP Lab Prep", duration: 3, date: "2026-04-20", category: "MUP", completed: false },

  ...[16,17,18,19,20].map(i => ({
    title: `DSA Lecture ${i}`,
    duration: 1,
    date: "2026-04-20",
    category: "DSA",
    completed: false
  })),

  { title: "DSA Coding", duration: 1, date: "2026-04-20", category: "DSA", completed: false },

  // ===== APR 21 =====
  ...[21,22,23,24,25].map(i => ({
    title: `DSA Lecture ${i}`,
    duration: 1,
    date: "2026-04-21",
    category: "DSA",
    completed: false
  })),

  ...[1,2,3,4,5,6].map(i => ({
    title: `Water San ${i}`,
    duration: 1/6,
    date: "2026-04-21",
    category: "Water",
    completed: false
  })),

  { title: "PoM PPT 2", duration: 1, date: "2026-04-21", category: "PoM", completed: false },
  { title: "DBMS Chapter 2", duration: 1.5, date: "2026-04-21", category: "DBMS", completed: false },
  { title: "DSA Coding", duration: 0.5, date: "2026-04-21", category: "DSA", completed: false },

  // ===== APR 22 =====
  { title: "PoM Assignment Prep", duration: 2, date: "2026-04-22", category: "PoM", completed: false },

  ...[26,27,28,29].map(i => ({
    title: `DSA Lecture ${i}`,
    duration: 1,
    date: "2026-04-22",
    category: "DSA",
    completed: false
  })),

  { title: "DBMS Chapter 3", duration: 1, date: "2026-04-22", category: "DBMS", completed: false },
  { title: "DBMS Chapter 4", duration: 1, date: "2026-04-22", category: "DBMS", completed: false },
  { title: "PoM PPT 3", duration: 1, date: "2026-04-22", category: "PoM", completed: false },
  { title: "DSA Coding", duration: 0.5, date: "2026-04-22", category: "DSA", completed: false },

  // ===== APR 23 =====
  ...[30,31,32,33].map(i => ({
    title: `DSA Lecture ${i}`,
    duration: 1,
    date: "2026-04-23",
    category: "DSA",
    completed: false
  })),

  { title: "PoM Assignment Prep", duration: 1, date: "2026-04-23", category: "PoM", completed: false },

  // ===== APR 24 =====
  { title: "DBMS Chapter 5", duration: 1.5, date: "2026-04-24", category: "DBMS", completed: false },
  { title: "PoM PPT 4", duration: 1.5, date: "2026-04-24", category: "PoM", completed: false },

  ...[7,8,9,10].map(i => ({
    title: `Water San ${i}`,
    duration: 0.25,
    date: "2026-04-24",
    category: "Water",
    completed: false
  })),

  { title: "DSA Coding", duration: 1, date: "2026-04-24", category: "DSA", completed: false },

  // ===== APR 25 =====
  { title: "DBMS Chapter 6", duration: 1.5, date: "2026-04-25", category: "DBMS", completed: false },
  { title: "DBMS Chapter 7", duration: 1.5, date: "2026-04-25", category: "DBMS", completed: false },
  { title: "PoM PPT 5", duration: 1.5, date: "2026-04-25", category: "PoM", completed: false },

  ...[11,12,13,14,15,16].map(i => ({
    title: `Water San ${i}`,
    duration: 2/6,
    date: "2026-04-25",
    category: "Water",
    completed: false
  })),

  ...[3,4,5,6].map(i => ({
    title: `MUP Slide ${i}`,
    duration: 0.5,
    date: "2026-04-25",
    category: "MUP",
    completed: false
  })),

  { title: "DSA Coding", duration: 1, date: "2026-04-25", category: "DSA", completed: false },

  // ===== APR 26 =====
  { title: "DBMS Chapter 8", duration: 1.5, date: "2026-04-26", category: "DBMS", completed: false },
  { title: "DBMS Chapter 9", duration: 1.5, date: "2026-04-26", category: "DBMS", completed: false },

  { title: "PoM PPT 6", duration: 1.5, date: "2026-04-26", category: "PoM", completed: false },
  { title: "PoM PPT 7", duration: 1.5, date: "2026-04-26", category: "PoM", completed: false },

  ...Array.from({ length: 8 }, (_, i) => ({
    title: `Water San ${17 + i}`,
    duration: 0.25,
    date: "2026-04-26",
    category: "Water",
    completed: false
  })),

  ...[7,8,9,10].map(i => ({
    title: `MUP Slide ${i}`,
    duration: 0.5,
    date: "2026-04-26",
    category: "MUP",
    completed: false
  })),

  // ===== APR 27 =====
  { title: "DBMS Chapter 10", duration: 1.5, date: "2026-04-27", category: "DBMS", completed: false },
  { title: "DBMS Chapter 11", duration: 1.5, date: "2026-04-27", category: "DBMS", completed: false },

  { title: "PoM PPT 8", duration: 1.5, date: "2026-04-27", category: "PoM", completed: false },
  { title: "PoM PPT 9", duration: 1.5, date: "2026-04-27", category: "PoM", completed: false },

  ...Array.from({ length: 11 }, (_, i) => ({
    title: `Water San ${25 + i}`,
    duration: 2.5/11,
    date: "2026-04-27",
    category: "Water",
    completed: false
  })),

  ...[11,12,13,14,15].map(i => ({
    title: `MUP Slide ${i}`,
    duration: 0.3,
    date: "2026-04-27",
    category: "MUP",
    completed: false
  })),

  // ===== APR 28 =====
  { title: "DBMS Chapter 12", duration: 1.5, date: "2026-04-28", category: "DBMS", completed: false },
  { title: "DBMS Chapter 13", duration: 1.5, date: "2026-04-28", category: "DBMS", completed: false },

  { title: "PoM PPT 10", duration: 1.5, date: "2026-04-28", category: "PoM", completed: false },
  { title: "PoM PPT 11", duration: 1.5, date: "2026-04-28", category: "PoM", completed: false },

  ...Array.from({ length: 15 }, (_, i) => ({
    title: `Water San ${36 + i}`,
    duration: 2.5/15,
    date: "2026-04-28",
    category: "Water",
    completed: false
  })),

  ...[16,17,18].map(i => ({
    title: `MUP Slide ${i}`,
    duration: 0.5,
    date: "2026-04-28",
    category: "MUP",
    completed: false
  })),

  // ===== APR 29 =====
  { title: "DBMS Chapter 14", duration: 1, date: "2026-04-29", category: "DBMS", completed: false },

  { title: "PoM PPT 12", duration: 1.5, date: "2026-04-29", category: "PoM", completed: false },
  { title: "PoM PPT 13", duration: 1.5, date: "2026-04-29", category: "PoM", completed: false },

  ...Array.from({ length: 15 }, (_, i) => ({
    title: `Water San ${51 + i}`,
    duration: 3/15,
    date: "2026-04-29",
    category: "Water",
    completed: false
  })),

  ...[19,20,21,22].map(i => ({
    title: `MUP Slide ${i}`,
    duration: 0.5,
    date: "2026-04-29",
    category: "MUP",
    completed: false
  })),

  { title: "DSA Coding", duration: 1, date: "2026-04-29", category: "DSA", completed: false },

  // ===== APR 30 =====
  { title: "PoM Old PPT 1", duration: 1, date: "2026-04-30", category: "PoM", completed: false },
  { title: "PoM Old PPT 2", duration: 1, date: "2026-04-30", category: "PoM", completed: false },
  { title: "PoM Old PPT 3", duration: 1, date: "2026-04-30", category: "PoM", completed: false },

  ...Array.from({ length: 10 }, (_, i) => ({
    title: `Water San ${66 + i}`,
    duration: 3/10,
    date: "2026-04-30",
    category: "Water",
    completed: false
  })),

  ...[23,24,25].map(i => ({
    title: `MUP Slide ${i}`,
    duration: 2/3,
    date: "2026-04-30",
    category: "MUP",
    completed: false
  })),

  { title: "DBMS Practice", duration: 1.5, date: "2026-04-30", category: "DBMS", completed: false },

  // ===== MAY 1 =====
  ...[4,5,6,7,8].map(i => ({
    title: `PoM Old PPT ${i}`,
    duration: 0.8,
    date: "2026-05-01",
    category: "PoM",
    completed: false
  })),

  ...[76,77,78,79,80].map(i => ({
    title: `Water San ${i}`,
    duration: 0.4,
    date: "2026-05-01",
    category: "Water",
    completed: false
  })),

  { title: "MUP Old Slides", duration: 3, date: "2026-05-01", category: "MUP", completed: false },

  // ===== MAY 2 =====
  { title: "MUP Completion", duration: 4, date: "2026-05-02", category: "MUP", completed: false },
  { title: "DBMS Practice", duration: 2, date: "2026-05-02", category: "DBMS", completed: false },
  { title: "PoM Active Recall", duration: 1.5, date: "2026-05-02", category: "PoM", completed: false },
  { title: "DSA Practice", duration: 1.5, date: "2026-05-02", category: "DSA", completed: false },

  // ===== MAY 3 =====
  ...[34,35,36,37].map(i => ({
    title: `DSA Lecture ${i}`,
    duration: 1,
    date: "2026-05-03",
    category: "DSA",
    completed: false
  })),

  { title: "DSA Revision", duration: 2, date: "2026-05-03", category: "DSA", completed: false }

];

export default tasks;
