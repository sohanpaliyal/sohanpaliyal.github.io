import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  gts_infosoft_llp,
  simprosys_logo,
  carrent,
  jobit,
  tripguide,
  whatsweb,
  simprosysapis,
  karmm,
  pipeline_builder,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Angular Developer",
    icon: backend,
  },
  {
    title: "UI/UX & Animations",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Simprosys Infomedia",
    icon: simprosys_logo,
    iconBg: "#E6DEDD",
    date: "April 2024 - Current",
    points: [
      "Designed intuitive UI for SimprosysAPIs, enabling seamless product feed management across Google, Microsoft, and Meta.",
      "Developed 'Manage Products' table with collapsible variant views, advanced filters, and bulk update functionality.",
      "Built customizable bulk editing and automated rule interfaces for efficient feed management.",
      "Integrated dynamic data visualizations for real-time product visibility and API performance tracking.",
      "Optimized key performance metrics, focusing on loading speed and application stability.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "GTS Infosoft LLP",
    icon: gts_infosoft_llp,
    iconBg: "#383E56",
    date: "March 2021 - March 2024",
    points: [
      "Worked on over 10 diverse projects, designing, building, and maintaining reusable and reliable code, and guiding Junior Frontend Developers.",
      "Implemented RxJs, modules, services, directives, pipes, and forms; wrote elegant, self-documenting, scalable, and testable code.",
      "Collaborated with designers and managers to create exceptional user experiences and consistently delivered projects on time.",
      "Optimized performance metrics like FCP and LCP using next-gen image formats and other optimization techniques.",
    ],
  },
];

const technicalEnhancements = [
  {
    title: "01. Complex UI & Data Systems",
    description:
      "Designed intuitive interfaces for SimprosysAPIs, featuring dynamic \"Manage Products\" tables with collapsible variant views, advanced filtering, and bulk-customization rule engines for seamless feed management.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "purple-text-gradient",
      },
      {
        name: "Tanstack Table",
        color: "blue-text-gradient",
      },
    ],
  },
  {
    title: "02. Scalable Architectures",
    description:
      "Engineered multi-role platforms like Karmm using single codebases. Built complex modules for real-time delivery tracking, automated certificate generation, and secure role-based admin panels.",
    tags: [
      {
        name: "Redux Toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "purple-text-gradient",
      },
      {
        name: "System Design",
        color: "blue-text-gradient",
      },
    ],
  },
  {
    title: "03. Performance Engineering",
    description:
      "Specialized in optimizing Core Web Vitals (FCP & LCP) and implementing reactive programming with RxJS. Focused on modular, testable code and next-gen assets for optimal user experience.",
    tags: [
      {
        name: "RxJS",
        color: "blue-text-gradient",
      },
      {
        name: "Optimization",
        color: "purple-text-gradient",
      },
      {
        name: "Performance",
        color: "blue-text-gradient",
      },
    ],
  },
];

const companyProjects = [
  {
    name: "SimprosysAPIs",
    description:
      "eCommerce Campaign Manager with seamless integration to Google, Meta, and Bing. Features advanced forms, filters, and modules like bulk-customization and product updates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: simprosysapis,
    source_code_link: "https://admin.simprosysapis.com/",
  },
  {
    name: "Karmm",
    description:
      "Multirole astrology platform with customer, astrologer, and seller interfaces. Features consultancy, kundli, panchang, matchmaking, live chat, and horoscope.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: karmm,
    source_code_link: "https://karmm.com/",
  },
  {
    name: "Phlenu Delivery",
    description:
      "PHLENU is a real-time delivery web app for scheduling, managing, and tracking parcel deliveries with instant price quotes.",
    tags: [
      {
        name: "angular",
        color: "red-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "material ui",
        color: "purple-text-gradient",
      },
      {
        name: "tailwind",
        color: "cyan-text-gradient",
      },
      {
        name: "agm map",
        color: "green-text-gradient",
      },

    ],
    image: jobit,
    source_code_link: "https://phlenudelivery.com/auth/login",
  },
];

const personalProjects = [
  {
    name: "WhatsApp Web Clone",
    description:
      "A static website clone of the WhatsApp Web interface, demonstrating pixel-perfect implementation using pure HTML, CSS, and Tailwind.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: whatsweb,
    source_code_link: "https://sohanpaliyal.github.io/whatsweb-chat/",
  },
  {
    name: "Pipeline Builder",
    description:
      "Visual pipeline builder for creating and managing data transformation workflows with drag-and-drop nodes, supporting LLM, database, API, and transformation operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "reactflow",
        color: "pink-text-gradient",
      },
    ],
    image: pipeline_builder,
    source_code_link: "https://sohanpaliyal.github.io/pipeline-builder-frontend/",
  },

];

export { services, technologies, experiences, technicalEnhancements, companyProjects, personalProjects };

export const socialLinks = [
  {
    name: "Email",
    url: "mailto:officialsohanpaliyal@gmail.com",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sohanpaliyal",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5V13.2a3.26 3.26 0 0 0-3.26-3.26c-1.1 0-2.02.58-2.5 1.46V10.2h-2.8v8.3h2.8v-4.6c0-.62.51-1.12 1.12-1.12s1.12.5 1.12 1.12v4.6h2.8M7.33 8.35c.93 0 1.68-.75 1.68-1.68s-.75-1.68-1.68-1.68-1.68.75-1.68 1.68.75 1.68 1.68 1.68m1.4 10.15V10.2h-2.8v8.3h2.8z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/sohanpaliyal",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 .3a12.1 12.1 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12.1 12.1 0 0 0 12 .3z" />
      </svg>
    ),
  },
  {
    name: "X",
    url: "https://x.com/sohanpaliyal",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M18.9 4H5.1C4.5 4 4 4.5 4 5.1v13.8c0 .6.5 1.1 1.1 1.1h13.8c.6 0 1.1-.5 1.1-1.1V5.1c0-.6-.5-1.1-1.1-1.1zM16 16h-2l-2.6-3.7L8.8 16H7l3.5-4.8L7 7h2l2.4 3.4L13.9 7h1.8l-3.3 4.5L16 16z" />
      </svg>
    ),
  },
];

export const ctaText = "Open to frontend / product engineer roles";
