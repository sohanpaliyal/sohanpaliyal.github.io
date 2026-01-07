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
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sohan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sohan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sohan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
    image: carrent,
    source_code_link: "https://github.com/",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Event-local",
    description:
      "Role-based admin panels for event management, featuring ticket generation, invitation distribution, and post-event certificate generation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Qbitt",
    description:
      "Appointment system for local businesses, enabling users to manage availability, appointments, and recurring events with ease.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Phlenu Delivery",
    description:
      "Real-time delivery application panel featuring orders, customer management, merchant-customer chats, and promo-code systems.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "websocket",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

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
