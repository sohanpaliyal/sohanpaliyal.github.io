# 🚀 Portfolio

A modern 3D portfolio website showcasing my professional experience, technical skills, and projects. Built with React, Three.js, and Tailwind CSS, featuring immersive 3D animations and interactive elements.

[![Deploy to GitHub Pages](https://github.com/sohanpaliyal/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/sohanpaliyal/portfolio/actions/workflows/deploy.yml)

## ✨ Features

- **3D Interactive Hero Section** - Animated 3D desktop model with smooth camera movements
- **Professional Experience Timeline** - Vertical timeline showcasing work history
- **Technical Skills Display** - 3D floating tech stack icons with interactive animations
- **Project Showcase** - Categorized company and personal projects with live demos
- **Responsive Design** - Fully optimized for all devices and screen sizes
- **Smooth Animations** - Framer Motion powered transitions throughout
- **3D Background Effects** - Animated star field using Three.js

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **3D Graphics:** Three.js, React Three Fiber, React Three Drei
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Deployment:** GitHub Pages (CI/CD)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sohanpaliyal/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The optimized build will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 CI/CD Deployment

This project uses GitHub Actions for automated deployment to GitHub Pages.

### Setup Instructions

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to **Pages** section
   - Under **Source**, select **GitHub Actions**

2. **Push to Main Branch:**
   - The workflow automatically triggers on push to `main` branch
   - Build and deployment happen automatically
   - Your site will be live at `https://<username>.github.io/portfolio/`

3. **Manual Deployment:**
   - Go to **Actions** tab in your repository
   - Select the **Deploy to GitHub Pages** workflow
   - Click **Run workflow**

### Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) performs the following:
- Checks out the code
- Sets up Node.js environment
- Installs dependencies
- Builds the production bundle
- Deploys to GitHub Pages

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD workflow
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images, icons, 3D models
│   ├── components/             # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   ├── Works.jsx
│   │   └── canvas/             # 3D canvas components
│   ├── constants/              # Configuration and data
│   │   └── index.jsx
│   ├── hoc/                    # Higher-order components
│   ├── utils/                  # Utility functions
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `src/constants/index.jsx` to customize:
- Navigation links
- Professional services
- Work experience
- Technical skills
- Projects (company and personal)

### Modify Styling

- **Colors:** Update `tailwind.config.cjs` for theme colors
- **Animations:** Modify `src/utils/motion.js` for animation variants
- **Global Styles:** Edit `src/index.css` for custom CSS

### 3D Models

Replace 3D models in `src/components/canvas/` to customize the visual experience.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Sohan Paliyal - [GitHub](https://github.com/sohanpaliyal)

---

Built with ❤️ using React, Three.js, and Tailwind CSS
