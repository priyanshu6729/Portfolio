// src/content/academics.js — Academic Record
export const academics = {
  degree: 'B.Tech — Computer Science & Engineering',
  institution: 'University of Lucknow',
  location: 'Lucknow, Uttar Pradesh',
  cgpa: 8.22,
  cgpaMax: 10.0,
  cgpaPercentile: 'Top 10% cohort',
  start: 2022,
  end: 2026,
  status: 'In Progress',
  courses: [
    { name: 'Data Structures & Algorithms', domain: 'core', grade: 'A', status: 'completed' },
    { name: 'Object-Oriented Programming', domain: 'core', grade: 'A', status: 'completed' },
    { name: 'Database Management Systems', domain: 'systems', grade: 'A', status: 'completed' },
    { name: 'Operating Systems', domain: 'systems', grade: 'B+', status: 'completed' },
    { name: 'Computer Networks', domain: 'systems', grade: 'A', status: 'completed' },
    { name: 'System Design', domain: 'systems', grade: 'A', status: 'completed' },
    { name: 'Machine Learning', domain: 'ml', grade: null, status: 'in-progress' },
    { name: 'Web Technologies', domain: 'web', grade: 'A', status: 'completed' },
    { name: 'Software Engineering', domain: 'core', grade: 'A', status: 'completed' },
    { name: 'Compiler Design', domain: 'systems', grade: null, status: 'upcoming' },
    { name: 'Artificial Intelligence', domain: 'ml', grade: null, status: 'upcoming' },
  ],
  certifications: [
    {
      name: 'Coding and Programming',
      issuer: 'Samsung Innovation Campus (SIC)',
      date: '2024',
      icon: '🏅',
    },
  ],
  achievements: [
    { label: 'CGPA 8.22', detail: 'Top 10% cohort' },
    { label: 'Full Stack Intern', detail: 'Swabhiman Foundation' },
    { label: 'Govt Internship', detail: 'Northern Railways, India' },
  ],
};
