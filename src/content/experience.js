// src/content/experience.js — Work History
export const experiences = [
  {
    company: 'Swabhiman Foundation',
    role: 'Full Stack Developer Intern',
    type: 'internship',
    location: 'Remote',
    remote: true,
    start: '2025-06',
    end: '2025-12',
    bullets: [
      'Built a modular MERN stack service marketplace supporting multiple user roles, service listings, and end-to-end request workflows with scalable architecture.',
      'Engineered secure RESTful APIs with JWT authentication, OTP email verification, and centralized error handling — reducing authentication-related bugs by 30%.',
      'Optimized MongoDB schemas with strategic indexing and aggregation pipelines, improving query performance by ~40% on high-traffic endpoints.',
      'Integrated Next.js SSR for key pages, improving page load speed and SEO performance of the platform frontend.',
    ],
    tech: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
  },
  {
    company: 'STVT STC — Northern Railways',
    role: 'Software Developer Intern',
    type: 'internship',
    location: 'Lucknow, Uttar Pradesh',
    remote: false,
    start: '2025-06',
    end: '2025-07',
    bullets: [
      'Developed a full-stack MERN Trainee Management System to streamline onboarding, record management, and administrative processes across departments.',
      'Implemented Role-Based Access Control (RBAC) with secure admin dashboards and trainee portals, enforcing granular authorization policies and improving system security.',
      'Automated marksheet generation, digital certificate issuance, and resignation workflows — reducing administrative workload by 50% and saving 20+ staff hours per week.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC', 'PostgreSQL'],
  },
];
