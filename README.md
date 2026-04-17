# Bracket — Industrial Engineering Company Website

A modern, visually stunning single-page application (SPA) for **Bracket**, an electromechanical engineering company based in Alexandria, Egypt. Established in April 2002, specializing in industrial fabrication, offshore & marine, fire fighting, cranes, and full commissioning services.

> **Live Demo:** [https://MohamedAbuZamil.github.io/bracket](https://MohamedAbuZamil.github.io/bracket) _(update after deployment)_

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19 | UI framework (SPA) |
| **TypeScript** | 6 | Type-safe development |
| **Vite** | 8 | Build tool & dev server (HMR) |
| **Tailwind CSS** | 4 | Utility-first styling with CSS variables |
| **Framer Motion** | 12 | Scroll animations, parallax, transitions |
| **React Router DOM** | 7 | Client-side routing (SPA navigation) |
| **Lucide React** | 1.8 | Icon library |

---

## Project Structure

```
bracket/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Logo and images
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx       # Navigation with dropdowns
│   │   ├── Hero.tsx         # Landing hero section
│   │   ├── ServicesSlider.tsx # Cinematic services carousel
│   │   ├── Services.tsx     # Services grid
│   │   ├── About.tsx        # About section
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── Partners.tsx     # Partners section
│   │   ├── CTA.tsx          # Call to action
│   │   └── Footer.tsx       # Footer with contact info
│   ├── context/             # Theme context (dark/light mode)
│   ├── pages/               # Dedicated service pages
│   │   ├── FabricationConstruction.tsx
│   │   ├── OffshoreMarine.tsx
│   │   ├── FireFighting.tsx
│   │   ├── Cranes.tsx
│   │   ├── Mechanical.tsx
│   │   ├── SpecialJobs.tsx
│   │   ├── Civil.tsx
│   │   ├── ElectricalInstrumentation.tsx
│   │   ├── CoatingInsulation.tsx
│   │   ├── Commissioning.tsx
│   │   ├── MissionStatement.tsx
│   │   ├── Objectives.tsx
│   │   ├── HSSE.tsx
│   │   ├── QualityAssurance.tsx
│   │   └── ContactUs.tsx
│   ├── App.tsx              # Router & layout
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & CSS variables
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Run Locally

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9 (or yarn / pnpm)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/MohamedAbuZamil/bracket.git
cd bracket

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Other Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint the codebase
npm run lint
```

---

## Deploy to Hosting

### Option 1: Netlify (Recommended)

1. Push your code to GitHub
2. Go to [netlify.com](https://www.netlify.com/) → **Add new site** → **Import from Git**
3. Select your repository `MohamedAbuZamil/bracket`
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com/) → **New Project** → Import from GitHub
2. Select `MohamedAbuZamil/bracket`
3. Vercel auto-detects Vite — just click **Deploy**

### Option 3: GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Then run:
npm run deploy
```

> **Note:** For GitHub Pages with React Router, add a `404.html` redirect or use `HashRouter`.

### Option 4: Manual / VPS

```bash
# Build the project
npm run build

# Upload the 'dist' folder to your server
# Serve with nginx, apache, or any static file server
```

**Nginx example config:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/bracket/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Features

- **Cinematic Services Slider** — Split-text 3D letter animations, glitch transitions, ember particles, petroleum pipe progress indicators
- **10 Dedicated Service Pages** — Full content with hero, animations, and CTAs
- **Dark / Light Theme** — Toggle with smooth transitions
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Smooth Animations** — Scroll-triggered, parallax, typewriter effects
- **SPA Navigation** — Fast client-side routing with React Router

---

## License & Copyright

**© 2025 Mohamed Abu Zamil. All Rights Reserved.**

This project, including all source code, design, UI/UX, animations, and visual assets, is the exclusive intellectual property of **Mohamed Abu Zamil**.

**Unauthorized use, copying, modification, distribution, or reproduction of any part of this project — in whole or in part — is strictly prohibited without prior written permission from the copyright holder.**

For inquiries or licensing requests, contact:

- **Email:** abozamil4204251@gmail.com
- **Phone:** +20 1036622885
- **Location:** Alexandria, Egypt
