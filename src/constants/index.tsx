import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  angular,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  gts_infosoft_llp,
  simprosys_logo,
  whatsweb,
  whatsweb_v2,
  simprosysapis,
  simprosysapis_v2,
  karmm,
  pipeline_builder,
  phlenu_delivery,
  browser_storage,
  event_bubbling,
  react_architecture
} from "../assets";
import {
  NavLink,
  Service,
  Technology,
  Experience,
  Project,
  Blog,
  SocialLink
} from "../types";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/sohanpaliyal",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sohanpaliyal",
    icon: "linkedin",
  },
  {
    name: "Mail",
    url: "mailto:paliyalsohan7@gmail.com",
    icon: "mail",
  },
  {
    name: "Call",
    url: "tel:+919587711187",
    icon: "phone",
  },
];

export const navLinks: NavLink[] = [
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
  {
    id: "blog",
    title: "Blog",
  },
];

export const tiltOptions = {
  tiltMaxAngleX: 10,
  tiltMaxAngleY: 10,
  scale: 1,
  transitionSpeed: 450,
};

export const services: Service[] = [
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
    icon: angular,
  },
  {
    title: "UI/UX & Animations",
    icon: creator,
  },
];

export const technologies: Technology[] = [
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
    name: "Angular",
    icon: angular,
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

export const experiences: Experience[] = [
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

export const technicalEnhancements = [
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

export const companyProjects: Project[] = [
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
    image: simprosysapis_v2,
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
    image: phlenu_delivery,
    source_code_link: "https://phlenudelivery.com/auth/login",
  },
];

export const personalProjects: Project[] = [
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
    image: whatsweb_v2,
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
    imageClassName: "scale-[1.15] object-center",
  },
];

export const ctaText = "Open to frontend / product engineer roles";

export const blogs: Blog[] = [
  /*
    {
      id: "architecting-scalable-react-systems",
      title: "Architecting Scalable React Systems: A 5-Year Retrospective",
      subtitle: "From 'just making it work' to designing robust component systems. A deep dive into Compound Components, Headless UI, and architectural patterns that scale.",
      author: "Sohan Paliyal",
      date: "Jan 17, 2026",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "architecture",
          color: "pink-text-gradient",
        },
        {
          name: "system-design",
          color: "green-text-gradient",
        },
      ],
      image: react_architecture,
      content: `
  # Architecting Scalable React Systems: A 5-Year Retrospective
  
  Writing React code is easy. Writing React code that survives 5 years of feature creep, team expansion, and design pivots is hard. Here are the core architectural patterns I've adopted after half a decade in the trenches.
  
  ## 1. The compound Component Pattern 🧩
  
  Stop passing 50 props to a single component. When building complex UI components like Selects, Modals, or Accordions, the **Compound Component Pattern** is non-negotiable.
  
  ### The Problem: Prop Explosion
  \`\`\`tsx
  // ❌ Hard to maintain, hard to read
  <Select
    options={options}
    value={value}
    onChange={onChange}
    label="Choose"
    renderOption={(opt) => <span>{opt.label}</span>}
    dropdownClassName="my-dropdown"
    itemClassName="my-item"
  />
  \`\`\`
  
  ### The Solution: Composition
  \`\`\`tsx
  // ✅ Flexible, readable, declarative
  <Select value={value} onChange={onChange}>
    <Select.Label>Choose</Select.Label>
    <Select.Trigger />
    <Select.Content>
      {options.map(opt => (
         <Select.Item key={opt.id} value={opt.value}>
           {opt.label}
         </Select.Item>
      ))}
    </Select.Content>
  </Select>
  \`\`\`
  
  **Why it wins:**
  1.  **Inversion of Control**: The consumer decides the layout.
  2.  **No Prop Drilling**: Internal state is shared via Context.
  3.  **Clean API**: It reads like HTML.
  
  ## 2. Separation of Concerns: Hooks as Logic Layers 🧠
  
  Components should care about *how things look*. Hooks should care about *how things work*.
  
  If your component has more than 2 \`useEffect\` hooks, it's doing too much.
  
  \`\`\`tsx
  // ❌ Tightly coupled logic
  const UserProfile = () => {
      const [user, setUser] = useState(null);
      useEffect(() => {
          fetch('/api/user').then(u => setUser(u));
      }, []);
      // presentation logic...
  }
  
  // ✅ Separated Logic
  const UserProfile = () => {
      const { user, isLoading } = useUser(); // All fetch logic hidden
      
      if (isLoading) return <Spinner />;
      return <ProfileCard data={user} />;
  }
  \`\`\`
  
  ## 3. Performance: Stability over Memoization ⚡
  
  Don't sprinkle \`useMemo\` everywhere. Instead, focus on **Reference Stability**.
  
  The most common performance killer isn't expensive calculations; it's **unnecessary re-renders caused by unstable props**.
  
  ### The Unstable Object Trap
  \`\`\`tsx
  // ❌ This object is recreated on EVERY render
  <Chart config={{ theme: 'dark', animate: true }} />
  \`\`\`
  
  Even if \`<Chart>\` is wrapped in \`React.memo\`, it will re-render because \`{}\` !== \`{}\`.
  
  ### The Fix
  \`\`\`tsx
  // ✅ Stable reference
  const chartConfig = useMemo(() => ({ theme: 'dark', animate: true }), []);
  <Chart config={chartConfig} />
  \`\`\`
  Or better yet, define usage-independent constants **outside** the component.
  
  ## 4. Headless UI Libraries 💀
  
  Stop building accessible UI from scratch. You will get it wrong. Keyboard navigation, ARIA attributes, focus management—it's a minefield.
  
  Use "Headless" libraries that provide the *behavior* but zero *styles*.
  -   **Radix UI**
  -   **Headless UI**
  -   **React Aria**
  
  You own the CSS (Tailwind), they own the \`aria-expanded\`, \`tabindex\`, and focus trappings.
  
  ---
  
  ## Conclusion
  
  Scalable React architecture isn't about knowing every API feature. It's about:
  1.  **Composition** over Configuration.
  2.  **Separating** Logic from View.
  3.  **Respecting** Render Cycles.
  
  Code you wrote 6 months ago should feel like a helpful friend, not a mysterious burden.
      `
    },
  */
  {
    id: "browser-storage-remember-me",
    title: "Understanding localStorage, sessionStorage, and Cookies",
    subtitle: "A technical deep dive into browser storage mechanisms, how we built a 'Remember Me' feature, and understanding session restoration behavior.",
    author: "Sohan Paliyal",
    date: "Dec 30, 2024",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "web-dev",
        color: "green-text-gradient",
      },
      {
        name: "architecture",
        color: "pink-text-gradient",
      },
    ],
    image: browser_storage,
    content: `
# Understanding localStorage, sessionStorage, and Cookies — and How We Built a “Remember Me” Feature

Modern web applications need to maintain state and session continuity to provide a seamless user experience. To manage this "auth state," browsers provide three main storage mechanisms: **localStorage**, **sessionStorage**, and **Cookies**.

In this article, we will decode these storage layers, explore how we built a "Remember Me" feature, and discuss interesting browser behaviors regarding session restoration.

## Browser Storage Fundamentals

### 1. localStorage 💾
**localStorage** is a mechanism for storing key-value pairs in a web browser with no expiration time.
- **Shared across all tabs**: Data stored in localStorage is accessible across all tabs and windows of the same origin.
- **Persists continuously**: The data persists even after the browser is closed and reopened. It stays until explicitly deleted.
- **Capacity**: Generally allows for 5-10 MB of data.
- **Client-side only**: Data is not sent to the server with every request.

\`\`\`javascript
localStorage.setItem("remember_me", "true"); // Persists until cleared
\`\`\`

### 2. sessionStorage ⏱️
**sessionStorage** allows you to access a storage area that's unique to a specific browser session.
- **Tab-scoped**: Data stays within the specific tab where it was created.
- **Cleared when tab closes**: The data is automatically cleared when the page session ends (i.e., when the tab is closed).
- **Survives reloads**: Data persists through page reloads and restores.

\`\`\`javascript
sessionStorage.setItem("step", "2"); // Available for the duration of the page session
\`\`\`

### 3. Cookies 🍪
**Cookies** are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by the user's web browser.
- **Sent with requests**: Cookies are sent to the server with every HTTP request, making them useful for authentication.
- **Expiration**: Can be "Session" cookies (expire when the client shuts down) or "Persistent" cookies (expire at a specific date).
- **Security**: Can be configured with flags like \`HttpOnly\` (inaccessible to JavaScript), \`Secure\` (HTTPS only), and \`SameSite\` (CSRF protection).

\`\`\`http
Set-Cookie: session_id=abc123; HttpOnly; Secure
\`\`\`

---

## Designing the "Remember Me" Feature

We implemented a specific behavior for our authentication flow:
1.  **If "Remember Me" is checked** → The user stays logged in even after closing and reopening the browser.
2.  **If "Remember Me" is UNCHECKED** → The user is logged out when the browser is closed.

### The Implementation Strategy
We combined two mechanisms:
1.  A **Session Cookie** (no fixed expiry) — Serves as the active session identifier.
2.  A **remember_me** flag in \`localStorage\` — Indicates user intent for persistence.

#### Step 1: On Login
\`\`\`javascript
localStorage.setItem("remember_me", "false"); // Stores user preference
document.cookie = "active_session=true; path=/"; // Sets the session cookie
\`\`\`

#### Step 2: On App Initialization
\`\`\`javascript
const rememberMe = localStorage.getItem("remember_me");
const hasSessionCookie = document.cookie.includes("active_session=true");

if (rememberMe !== "true" && !hasSessionCookie) {
  logoutUser(); // Clears session if specific criteria aren't met
}
\`\`\`
*Logic*: If the user did not opt for "Remember Me" AND the session cookie is missing (indicating a fresh browser session), the application logs the user out.

#### Step 3: On Browser Close
Browsers typically clear *session cookies* when the application closes, handling the cleanup automatically.

---

## The Tab Restore Behavior (Cmd + Shift + T) 🔄

An interesting edge case arises with the "Restore Closed Tab" feature found in modern browsers.

If a user unchecks "Remember Me", closes the browser, and then uses **Cmd + Shift + T** (or Ctrl + Shift + T) to restore the tab, they will often find themselves still logged in.

### Why Does This Happen?
Modern browsers treat "Tab Restore" as a continuation of the previous session rather than a fresh start.
- **Session cookies** are restored.
- **Application state** is preserved.
- From the application's perspective, the session never actually ended.

### Is this a Bug?
**No, this is intended behavior.** 
GitLab and other major platforms document this: "Session restoration is considered a trusted continuity signal."

Forcing a logout in this scenario would disrupt the user experience, as the user explicitly requested to restore their previous state.

### Is it Acceptable?
**Yes.**
- **Security Check**: It typically occurs on the same device and browser instance.
- **Industry Standard**: It is standard behavior across most modern web applications.
- **Mental Model**: "Remember Me" controls persistence across fresh starts (cold opens), not session restorations.

---

## Key Takeaways

1.  **localStorage** offers persistent storage on the client side.
2.  **sessionStorage** is tied to the lifecycle of a specific tab.
3.  **Cookies** are essential for server-side communication and authentication.
4.  **"Remember Me"** implementations often rely on a combination of persistent flags and session cookies.
5.  **Tab Restore** restores the full state of the session, including session cookies, which is a deliberate browser feature.

Understanding these storage nuances helps in designing robust authentication flows and state management systems.

*Happy Coding!* 🚀
    `
  },
  {
    id: "event-bubbling-explained",
    title: "Event Bubbling in JavaScript: Why Parents Feel What Children Do",
    subtitle: "If you’ve ever clicked a button and wondered 'why did the parent also react?' — welcome to event bubbling.",
    author: "Sohan Paliyal",
    date: "Jan 13, 2026",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "web-dev",
        color: "green-text-gradient",
      },
      {
        name: "concepts",
        color: "pink-text-gradient",
      },
    ],
    image: event_bubbling,
    content: `
# Event Bubbling: Why Parents Feel What Children Do

If you’ve ever clicked a button and wondered **“Why did the parent also react?”** — welcome to **Event Bubbling**.

## What is Event Bubbling? 🫧

Event bubbling means that when an event happens on a child element, it first runs on that element and then **“bubbles up”** to its parents, one by one.

Think of it like this:
👉 **You tap a glass on a table** → the glass feels it → the table feels it → the floor feels it.

## Simple Example (HTML + JS)

Consider this structure:

\`\`\`html
<div id="parent">
  Parent
  <button id="child">Click me</button>
</div>
\`\`\`

And this JavaScript:

\`\`\`javascript
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
\`\`\`

### What happens when you click the button?

**Output:**
1. \`Child clicked\`
2. \`Parent clicked\`

**Why?**
Because the click starts at the **button** (child), then bubbles up to the **div** (parent).

---

## Real-Life Use Case: Why is this Useful? 🛠️

Imagine you have a list of 100 items. Instead of adding click listeners to **100 list items**, you can add just **one listener** to the parent \`<ul>\`.

\`\`\`javascript
// Event Delegation
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Item clicked:", e.target.textContent);
  }
});
\`\`\`

This pattern is called **Event Delegation**, and it works entirely because of bubbling.
✅ **Less code**
✅ **Better performance**
✅ **Easier maintenance**

---

## Stopping the Bubble 🛑

Sometimes you **don’t** want the event to go up. You can stop it!

\`\`\`javascript
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation(); // <--- The magic line
  console.log("Only child clicked");
});
\`\`\`

Now, if you click the child, the parent **won’t** react at all.

---

## Quick Summary

1.  **Event starts** at the target element.
2.  Then **moves upward** through parents.
3.  This behavior is called **Event Bubbling**.
4.  It is useful for **Event Delegation**.
5.  It can be stopped using \`e.stopPropagation()\`.

### Final Thought

Event bubbling isn’t magic — it’s just the browser trying to be helpful:
> *"Hey parent, your child just did something. Just letting you know."*

*Happy Coding!* 🚀
    `
  }
];
