// ===== PERSONAL INFO =====
export const PERSONAL_INFO = {
  name: 'Pratiksha Vyawhare',
  title: 'Full Stack Developer',
  location: 'Wagholi, Pune 412207',
  email: 'pratikshavyawhare79@gmail.com',
  phone: '7666095620',
  github: 'https://github.com/pratiksha-vyawhare79',
  linkedin: 'https://linkedin.com/in/pratikshavyawhare',
  hackerrank: 'https://hackerrank.com/pratikshavyawhare',
  bio: `Passionate Full Stack Developer with hands-on experience in Java, Spring Boot, and React.js. 
  I specialize in building scalable, responsive web applications with clean architecture and modern UI/UX. 
  Currently working at Codeverge IT Solutions, I bring ideas to life through code — from robust backend APIs 
  to polished frontend interfaces.`,
  shortBio: `Full Stack Developer skilled in Java, Spring Boot & React.js. Building scalable web apps with clean code and modern design.`,
}

// ===== SKILLS =====
export const SKILL_CATEGORIES = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'code',
    color: 'from-purple-500 to-purple-700',
    skills: [
      { name: 'Java', icon: 'FaJava', color: '#f89820' },
      { name: 'JavaScript', icon: 'SiJavascript', color: '#f7df1e' },
      { name: 'SQL', icon: 'SiMysql', color: '#4479a1' },
      { name: 'C', icon: 'SiC', color: '#a8b9cc' },
      { name: 'C++', icon: 'SiCplusplus', color: '#00599c' },
    ],
  },
  {
    id: 'backend-java',
    title: 'Backend (Java)',
    icon: 'server',
    color: 'from-blue-500 to-blue-700',
    skills: [
      { name: 'Spring Boot', icon: 'SiSpringboot', color: '#6db33f' },
      { name: 'Spring MVC', icon: 'SiSpring', color: '#6db33f' },
      { name: 'Spring Security', icon: 'SiSpringsecurity', color: '#6db33f' },
      { name: 'Hibernate/JPA', icon: 'SiHibernate', color: '#59666c' },
      { name: 'RESTful APIs', icon: 'TbApi', color: '#22d3ee' },
      { name: 'JDBC', icon: 'FaDatabase', color: '#4479a1' },
      { name: 'JSP/Servlets', icon: 'FaJava', color: '#f89820' },
      { name: 'Microservices', icon: 'MdMiscellaneousServices', color: '#9333ea' },
    ],
  },
  {
    id: 'backend-js',
    title: 'Backend (JavaScript)',
    icon: 'server',
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'Node.js', icon: 'FaNodeJs', color: '#339933' },
      { name: 'Express.js', icon: 'SiExpress', color: '#68A063' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'monitor',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React.js', icon: 'FaReact', color: '#61dafb' },
      { name: 'HTML5', icon: 'FaHtml5', color: '#e34f26' },
      { name: 'CSS3', icon: 'FaCss3Alt', color: '#1572b6' },
      { name: 'Bootstrap', icon: 'FaBootstrap', color: '#7952b3' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06b6d4' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'database',
    color: 'from-green-500 to-teal-500',
    skills: [
      { name: 'MySQL', icon: 'SiMysql', color: '#4479a1' },
      { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#336791' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: 'tool',
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Git', icon: 'FaGit', color: '#f05032' },
      { name: 'GitHub', icon: 'FaGithub', color: '#4078c0' },
      { name: 'Maven', icon: 'SiApachemaven', color: '#c71a36' },
      { name: 'Postman', icon: 'SiPostman', color: '#ff6c37' },
      { name: 'Apache Tomcat', icon: 'SiApachetomcat', color: '#f8dc75' },
      { name: 'VS Code', icon: 'SiVisualstudiocode', color: '#007acc' },
      { name: 'Eclipse', icon: 'SiEclipseide', color: '#2c2255' },
    ],
  },
  {
    id: 'concepts',
    title: 'Core Concepts',
    icon: 'brain',
    color: 'from-violet-500 to-purple-700',
    skills: [
      { name: 'OOPs', icon: 'MdCode', color: '#9333ea' },
      { name: 'SDLC', icon: 'MdLoop', color: '#3b82f6' },
      { name: 'MVC Pattern', icon: 'MdArchitecture', color: '#22d3ee' },
      { name: 'API Integration', icon: 'TbApi', color: '#f59e0b' },
      { name: 'Authentication', icon: 'MdSecurity', color: '#ef4444' },
      { name: 'Agile/Scrum', icon: 'MdGroups', color: '#10b981' },
    ],
  },
]

// ===== EXPERIENCE =====
export const EXPERIENCE = [
  {
    id: 1,
    role: 'Software Developer',
    company: 'Codeverge IT Solutions',
    duration: 'Dec 2025 – Present',
    type: 'Full-time',
    location: 'Pune, India',
    current: true,
    color: 'from-purple-500 to-blue-500',
    highlights: [
      {
        project: 'NGO Website',
        tech: 'React.js, Node.js, MySQL',
        description: 'Developed a responsive web platform for an NGO, enabling seamless content management and donor engagement with modern UI/UX.',
      },
      {
        project: 'Vispera',
        tech: 'React.js, Tailwind CSS, Spring Boot',
        description: 'Built a creative studio website with a modern, responsive UI using React.js and Tailwind CSS, backed by a Spring Boot REST API.',
      },
      {
        project: 'Development Support',
        tech: 'Various',
        description: 'Contributed to platforms like Book at Doorstep and JPR Research — implementing features, fixing bugs, and improving performance.',
      },
    ],
  },
  {
    id: 2,
    role: 'Java Developer Intern',
    company: 'HackVeda Pvt. Ltd.',
    duration: 'Jun 2024 – Sep 2024',
    type: 'Internship',
    location: 'Remote',
    current: false,
    color: 'from-blue-500 to-cyan-500',
    highlights: [
      {
        project: 'Backend Development',
        tech: 'Spring Boot, Spring MVC, JPA, REST APIs, Microservices, MySQL',
        description: 'Developed robust backend modules using Spring Boot ecosystem, implementing RESTful APIs and microservices architecture.',
      },
      {
        project: 'Frontend Development',
        tech: 'HTML, CSS, JavaScript, React.js',
        description: 'Built and improved UI components, creating responsive and interactive user interfaces.',
      },
      {
        project: 'Version Control & Collaboration',
        tech: 'Git, GitHub, Agile/Scrum',
        description: 'Collaborated effectively using Git/GitHub workflows and followed Agile/Scrum practices for iterative development.',
      },
      {
        project: 'API Testing & Optimization',
        tech: 'Postman',
        description: 'Tested and optimized APIs using Postman, ensuring reliability, performance, and proper documentation.',
      },
    ],
  },
]

// ===== PROJECTS =====
export const PROJECTS = [
  {
    id: 1,
    title: 'AI-Powered Vehicle Assistance System',
    subtitle: 'Real-time Breakdown Support Platform',
    duration: 'Apr 2025 – Jun 2025',
    description: `A comprehensive real-time breakdown support platform that connects vehicle owners with nearby service providers. 
    Features location tracking, automated billing, and an AI-powered chatbot for instant user assistance.`,
    longDescription: [
      'Real-time location tracking using Google Maps API for precise breakdown location identification',
      'Integrated Dialogflow chatbot for intelligent user interaction and automated support',
      'Admin dashboard for managing service requests, providers, and billing',
      'Automated billing system with transparent cost calculation',
      'Responsive design for seamless mobile and desktop experience',
    ],
    techStack: ['Java', 'JSP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Google Maps API', 'Dialogflow'],
    techColors: {
      'Java': '#f89820',
      'JSP': '#f89820',
      'HTML': '#e34f26',
      'CSS': '#1572b6',
      'JavaScript': '#f7df1e',
      'MySQL': '#4479a1',
      'Google Maps API': '#4285f4',
      'Dialogflow': '#ff9800',
    },
    github: 'https://github.com/pratiksha-vyawhare79',
    live: null,
    featured: true,
    gradient: 'from-purple-600 via-blue-600 to-cyan-500',
    icon: '🚗',
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'NGO Platform',
    subtitle: 'Content Management & Donor Engagement',
    duration: '2025',
    description: `A responsive web platform for NGOs enabling seamless content management and donor engagement with modern UI/UX design.`,
    longDescription: [
      'Developed a comprehensive NGO management system with React.js frontend',
      'Node.js backend for robust API development and data management',
      'MySQL database for structured storage of donor information and content',
      'Modern UI/UX design focused on user engagement and accessibility',
      'Content management system for easy updates and maintenance',
      'Donor engagement features with interactive elements and forms',
    ],
    techStack: ['React.js', 'Node.js', 'MySQL', 'Express.js', 'JWT', 'REST APIs'],
    techColors: {
      'React.js': '#61dafb',
      'Node.js': '#339933',
      'MySQL': '#4479a1',
      'Express.js': '#68A063',
      'JWT': '#f7931e',
      'REST APIs': '#22d3ee',
    },
    github: 'https://github.com/pratiksha-vyawhare79',
    live: 'https://ngo-platform-7erf.vercel.app/',
    featured: true,
    gradient: 'from-green-500 via-teal-500 to-blue-500',
    icon: '🌍',
    category: 'Full Stack',
  },
  {
    id: 3,
    title: 'Vispera',
    subtitle: 'Creative Studio Website',
    duration: '2025',
    description: `A modern creative studio website built with React.js and Tailwind CSS, featuring a responsive design and Spring Boot backend.`,
    longDescription: [
      'Creative studio website with modern, responsive UI using React.js',
      'Tailwind CSS for rapid styling and responsive design',
      'Spring Boot REST API for robust backend functionality',
      'Interactive components and smooth animations',
      'Optimized performance and SEO-friendly structure',
      'Professional portfolio showcase with dynamic content',
    ],
    techStack: ['React.js', 'Tailwind CSS', 'Spring Boot', 'REST APIs', 'MySQL', 'Vite'],
    techColors: {
      'React.js': '#61dafb',
      'Tailwind CSS': '#06b6d4',
      'Spring Boot': '#6db33f',
      'REST APIs': '#22d3ee',
      'MySQL': '#4479a1',
      'Vite': '#646cff',
    },
    github: 'https://github.com/pratiksha-vyawhare79',
    live: 'https://visionary-choux-410cae.netlify.app/',
    featured: true,
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    icon: '🎨',
    category: 'Full Stack',
  },
  {
    id: 4,
    title: 'Talent Portal',
    subtitle: 'Recruitment Management System',
    duration: 'Dec 2025 – Present',
    description: `A full-featured recruitment management platform that streamlines the hiring process for companies and candidates. Features AI-powered candidate matching, email notifications, and a clean, responsive interface.`,
    longDescription: [
      'AI-powered candidate matching using Blanz AI for intelligent recruitment recommendations',
      'Email notification system integrated via SMTP for automated alerts and updates',
      'Responsive UI built with React.js and Bootstrap for seamless experience across devices',
      'Spring Boot REST APIs for robust backend logic and candidate/job management',
      'SQL database for structured storage of job postings, applications, and user data',
      'Admin dashboard for managing candidates, job listings, and recruitment pipeline',
    ],
    techStack: ['React.js', 'Bootstrap', 'Spring Boot', 'Blanz AI', 'SMTP', 'SQL'],
    techColors: {
      'React.js': '#61dafb',
      'Bootstrap': '#7952b3',
      'Spring Boot': '#6db33f',
      'Blanz AI': '#9333ea',
      'SMTP': '#f59e0b',
      'SQL': '#4479a1',
    },
    github: 'https://github.com/pratiksha-vyawhare79',
    live: null,
    featured: true,
    gradient: 'from-violet-500 via-purple-500 to-blue-500',
    icon: '💼',
    category: 'Full Stack',
  },
]

// ===== EDUCATION =====
export const EDUCATION = [
  {
    id: 1,
    degree: 'Master of Computer Applications (MCA)',
    institution: 'G.H. Raisoni College of Engineering',
    location: 'Pune',
    duration: 'Aug 2023 – Jun 2025',
    score: 'CGPA: 9.6',
    scoreType: 'cgpa',
    icon: '🎓',
    color: 'from-purple-500 to-blue-500',
    highlight: true,
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Smt. Kesharbai Lahoti College',
    location: 'Amravati',
    duration: 'Jul 2020 – May 2023',
    score: '83.64%',
    scoreType: 'percentage',
    icon: '🎓',
    color: 'from-blue-500 to-cyan-500',
    highlight: false,
  },
  {
    id: 3,
    degree: 'HSC (12th)',
    institution: 'Bharat Junior College',
    location: 'Risod',
    duration: '2019 – 2020',
    score: '79.54%',
    scoreType: 'percentage',
    icon: '📚',
    color: 'from-cyan-500 to-teal-500',
    highlight: false,
  },
  {
    id: 4,
    degree: 'SSC (10th)',
    institution: 'B.M. School',
    location: 'Risod',
    duration: '2017 – 2018',
    score: '86.80%',
    scoreType: 'percentage',
    icon: '📚',
    color: 'from-teal-500 to-green-500',
    highlight: false,
  },
]

// ===== TRAINING =====
export const TRAINING = [
  {
    id: 1,
    title: 'Full Stack Java Development',
    organization: 'Yes Infotech, Pune',
    duration: 'May 2025 – Nov 2025',
    type: '6 Months | Real-Time Projects',
    icon: '💻',
    color: 'from-orange-500 to-red-500',
    topics: [
      'Core Java & Advanced Java',
      'JSP/Servlets',
      'Spring Boot & Spring MVC',
      'Hibernate/JPA',
      'REST APIs & Microservices',
      'MySQL & Backend Logic',
      'React.js, HTML, CSS, JavaScript',
      'Real-time Full-Stack Projects',
    ],
  },
]

// ===== CERTIFICATIONS =====
export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Full Stack Java Development',
    issuer: 'Yes Infotech, Pune',
    type: '6 Months, Real-Time Projects',
    icon: '🏆',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 2,
    title: 'Java Certification',
    issuer: 'HackerRank',
    type: 'Online Certification',
    icon: '✅',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 3,
    title: 'Core Java Certification',
    issuer: 'ICTC',
    type: 'Professional Certification',
    icon: '✅',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 4,
    title: 'C++ Certification',
    issuer: 'ICTC',
    type: 'Professional Certification',
    icon: '✅',
    color: 'from-purple-500 to-violet-500',
  },
  {
    id: 5,
    title: 'Third Prize – State-Level PPT & Seminar Competition',
    issuer: 'State Level Competition',
    type: 'Award',
    icon: '🥉',
    color: 'from-amber-500 to-yellow-500',
  },
]

// ===== NAV LINKS =====
export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

// ===== TYPING TITLES =====
export const TYPING_TITLES = [
  'Full Stack Developer',
  'Java Developer',
  'React Developer',
  'Spring Boot Expert',
  'Problem Solver',
]

// ===== STATS =====
export const STATS = [
  { label: 'Years Experience', value: '1+', icon: '💼' },
  { label: 'Projects Built', value: '5+', icon: '🚀' },
  { label: 'MCA CGPA', value: '9.6', icon: '🎓' },
  { label: 'Certifications', value: '4+', icon: '🏆' },
]
