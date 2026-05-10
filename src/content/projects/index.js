// src/content/projects/index.js — Project Registry
export const projects = [
  // ═══════════════════════════════════════════════════
  // FEATURED
  // ═══════════════════════════════════════════════════
  {
    slug: 'supervisor-training-system',
    title: 'Training Centre Management System',
    tagline: 'Enterprise management system for Northern Railways — digitizing candidate management, attendance, certification, and training operations.',
    type: 'group',
    featured: true,
    status: 'completed',
    year: 2025,
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'REST API', 'Tailwind CSS'],
    impact: 'Deployed for Northern Railways, Charbagh Lucknow · Reduced manual paperwork by 50%',
    links: {
      github: 'https://github.com/inspiredrishabh/Supervisor-Training-Centre-Management-System',
    },
    problem: 'The Supervisor\'s Training Centre at Northern Railways relied entirely on manual registers and paper-based tracking for candidate enrollment, daily attendance, exam scheduling, and certificate generation — creating bottlenecks, data loss risks, and administrative overhead.',
    approach: 'Designed and built a full-stack management platform during the Summer Training Program. Implemented role-based access (Admin/Supervisor) with JWT authentication, PostgreSQL for relational data integrity, and a modular REST API architecture. Built a dashboard with real-time attendance tracking, automated certificate generation, and exam result management.',
    outcome: 'System is deployed and actively used at the Training Centre. Reduced administrative processing time by ~70%, eliminated paper-based tracking, and provided real-time visibility into trainee progress across multiple batches.',
  },

  // ═══════════════════════════════════════════════════
  // MAIN PROJECTS
  // ═══════════════════════════════════════════════════
  {
  slug: 'apna-network',
  title: 'Apna Network',
  tagline: 'Community-driven professional networking platform focused on meaningful connections, service discovery, and collaborative growth.',
  type: 'group',
  featured: true,
  status: 'completed',
  year: 2025,
  tech: [
    'Next.js',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JWT Authentication',
    'REST API',
    'Tailwind CSS'
  ],
  impact: 'Scalable provider-community ecosystem · Real-time interactions · End-to-end full-stack architecture',
  links: {
    github: 'https://github.com/priyanshu6729/apna-network-frontend',
  },
  problem: 'Traditional networking platforms often feel impersonal and overcrowded, making it difficult for users and service providers to build authentic professional relationships, discover opportunities, and engage within trusted communities.',
  approach: 'Designed and developed a full-stack networking platform with a modern Next.js frontend and a scalable Node.js + MongoDB backend architecture. Implemented secure JWT-based authentication, dynamic provider listings, profile management, service discovery, filtering systems, and responsive UI/UX workflows. Focused heavily on clean component architecture, optimized API integration, and a community-centric user experience.',
  outcome: 'Successfully delivered a production-ready networking platform featuring user onboarding, provider discovery, profile systems, service management, authentication flows, responsive dashboards, and scalable frontend architecture — demonstrating strong full-stack engineering, modern UI design, and real-world platform development capabilities.',
 },
 {
    slug: 'model-movement-control',
    title: 'Model Movement Control',
    tagline: 'AI-powered full-stack evacuation planning and simulation system with real-time location tracking.',
    type: 'group',
    featured: false,
    status: 'completed',
    year: 2025,
    tech: ['Next.js', 'Node.js', 'MERN', 'Gemini AI API', 'A* Algorithm', 'Tailwind CSS'],
    impact: 'Sub-2s load times · Live on Vercel + Render',
    links: {
      demo: 'https://modelmovementcontrol-client.onrender.com',
      github: 'https://github.com/priyanshu6729/model-movement-control',
    },
    problem: 'Disaster response teams lack real-time tools for dynamic evacuation routing in dense urban environments.',
    approach: 'Built a full-stack platform using React.js for the frontend and Node.js backend. Integrated Google Gemini AI API for adaptive route recommendations and implemented the A* pathfinding algorithm for collision-free, optimized evacuation routing with real-time location tracking.',
    outcome: 'Deployed on Render (frontend) and Render (backend) achieving sub-2-second load times through React.js server-side rendering. Dynamic movement visualization enables real-time situational awareness.',
  },

  // ═══════════════════════════════════════════════════
  // RESEARCH
  // ═══════════════════════════════════════════════════
  {
  slug: 'ar-mad',
  title: 'AR-MAD',
  tagline: 'An AI-powered research project focused on detecting and analyzing AI-generated images using deep learning and computer vision techniques.',
  type: 'research',
  featured: false,
  status: 'in-progress',
  year: 2026,
  tech: [
    'Python',
    'Deep Learning',
    'Computer Vision',
    'CNN',
    'PyTorch',
    'OpenCV',
    'Machine Learning'
  ],
  impact: 'Research project exploring reliable detection of synthetic and AI-generated visual content.',
  links: {
    github: 'https://github.com/mherenow/AR-MAD',
  },
  problem:
    'With the rapid growth of generative AI models such as GANs and diffusion models, AI-generated images are becoming increasingly realistic, creating risks related to misinformation, deepfakes, identity misuse, and digital authenticity.',
  approach:
    'Developing a deep learning-based detection framework using CNN architectures and computer vision pipelines to identify artifacts, frequency inconsistencies, unnatural color distributions, and missing camera noise patterns in AI-generated images. The project combines image preprocessing, feature extraction, and model training using Python, PyTorch, and OpenCV for robust classification of real and synthetic images.',
  outcome:
    'Research in progress — building toward a generalized AI-image detection framework capable of identifying synthetic media across multiple generation models with improved accuracy, explainability, and real-world applicability.',
 },

  // ═══════════════════════════════════════════════════
  // PERSONAL / SIDE PROJECTS
  // ═══════════════════════════════════════════════════
  {
    slug: 'portfolio',
    title: 'Transmission from the Void',
    tagline: 'A cinematic, brutalist-tech developer portfolio featuring physics-based interactive graphs and optimized scroll animations.',
    type: 'personal',
    featured: true,
    status: 'completed',
    year: 2026,
    tech: ['Next.js 15', 'React.js', 'Tailwind CSS v4', 'Pure JavaScript'],
    impact: 'Custom design system · Zero UI library dependencies',
    links: {
      demo: 'https://pr-portfolio-eta.vercel.app/',
      github: 'https://github.com/priyanshu6729/Portfolio',
    },
    problem: 'Developer portfolios often rely on generic templates or heavy animation libraries (like GSAP/Framer Motion), sacrificing performance and personal brand identity.',
    approach: 'Architected a bespoke portfolio from scratch without external animation libraries. Built a custom force-directed collision graph for the skills section using pure math and SVG. Implemented hardware-accelerated scroll reveals via IntersectionObserver and optimized Next.js server/client component boundaries for maximum performance.',
    outcome: 'Delivered a highly performant, production-grade portfolio that doubles as a working demonstration of advanced frontend engineering, state management, and modern CSS architecture.',
  },
  {
    slug: 'cryptoplace',
    title: 'CryptoPlace',
    tagline: 'Real-time cryptocurrency price tracker displaying live data for 100+ digital assets with interactive charting.',
    type: 'personal',
    featured: false,
    status: 'completed',
    year: 2024,
    tech: ['React.js', 'CoinGecko API', 'Chart.js', 'Tailwind CSS', 'REST API'],
    impact: '100+ assets tracked · 60s auto-refresh',
    links: {
      demo: 'https://cryptoplace-p3bx.vercel.app',
      github: 'https://github.com/priyanshu6729/cryptoplace',
    },
    problem: 'Existing crypto trackers are cluttered, slow to refresh, and lack robust charting for trend analysis.',
    approach: 'Built with React.js consuming the CoinGecko REST API with 60-second auto-refresh cycles. Implemented interactive Chart.js price charts with multiple timeframes (1D, 7D, 30D, 1Y), advanced search, and market-cap filtering.',
    outcome: 'Designed a fully responsive UI using PureCSS with seamless experience and optimized rendering performance, tracking 100+ digital assets in real time.',
  },
];
