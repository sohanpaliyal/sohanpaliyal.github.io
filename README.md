# 🚀 Portfolio

A modern 3D portfolio website showcasing my professional experience, technical skills, and projects. Built with React, Three.js, and Tailwind CSS, featuring immersive 3D animations and interactive elements.

[![Deploy to GitHub Pages](https://github.com/sohanpaliyal/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/sohanpaliyal/portfolio/actions/workflows/deploy.yml)

## ✨ Features

- **3D Interactive Hero Section** - Animated 3D desktop model with smooth camera movements
- **Professional Experience Timeline** - Vertical timeline showcasing work history
- **Technical Skills Display** - 3D floating tech stack icons with interactive animations
- **Command Palette (Cmd+K)** - Quick navigation and search functionality
- **Technical Blog** - Integrated markdown-based blog with SEO optimization
- **Theme Support** - Dark/Light mode toggle with system preference detection
- **Project Showcase** - Categorized projects with "Architecture Mode" visualization
- **Responsive Design** - Fully optimized for all devices and screen sizes
- **Smooth Animations** - Framer Motion powered transitions throughout

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **3D Graphics:** Three.js, React Three Fiber, React Three Drei
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS, Lucide React
- **Language:** TypeScript
- **Deployment:** GitHub Pages (Static Exports)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The optimized build will be generated in the `.next` directory (or `out` for static exports).

### Run Production Build

```bash
npm run start
```

## 📦 CI/CD Deployment

This project uses GitHub Actions for automated deployment to GitHub Pages.

### Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) performs the following:
- Checks out the code
- Sets up Node.js environment
- Installs dependencies
- Builds the production bundle (Static Export)
- Deploys to GitHub Pages

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD workflow
├── public/                     # Static assets
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── blog/               # Blog routes
│   │   ├── favicon.ico
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── assets/                 # Images, icons, 3D models
│   ├── components/             # React components
│   │   ├── canvas/             # 3D canvas components
│   │   ├── sections/           # Landing page sections
│   │   └── ui/                 # Reusable UI components
│   ├── constants/              # Configuration and data
│   ├── context/                # Global contexts (Command Palette)
│   ├── lib/                    # Utilities (Motion etc.)
│   └── utils/                  # Helper functions
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
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
Contributions are always welcome! If you'd like to improve this project, please follow these steps:

1.  **Fork the repository**
2.  **Clone your fork**:
    ```bash
    git clone https://github.com/your-username/portfolio.git
    ```
3.  **Create a new branch**:
    ```bash
    git checkout -b feature/amazing-feature
    ```
4.  **Make your changes** and commit them:
    ```bash
    git commit -m 'feat: add some amazing feature'
    ```
5.  **Push to the branch**:
    ```bash
    git push origin feature/amazing-feature
    ```
6.  **Open a Pull Request** via GitHub

## 📧 Contact

Sohan Paliyal - [GitHub](https://github.com/sohanpaliyal)

---

Built with ❤️ using React, Three.js, and Tailwind CSS
