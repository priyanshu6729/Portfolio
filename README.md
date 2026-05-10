# Transmission from the Void — Portfolio

A premium, brutalist-tech portfolio website built for high performance, immersive storytelling, and flawless user experience. Designed to resemble a classified terminal interface, it features physics-based interactions, smooth scroll reveals, and a carefully crafted dark mode aesthetic.

## 🚀 Live Demo
*(Add your live deployment link here once deployed, e.g., https://priyanshuraj.vercel.app)*

## 🛠 Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4 + Custom Vanilla CSS (Variables, Animations)
- **Language:** Pure JavaScript (ES6+)
- **Hosting/Deployment:** Vercel (Recommended)

## ✨ Key Features
- **Immersive Brutalist-Tech Aesthetic:** "Mission Log" and "Omega Clearance" theme with scanline effects, custom cursors, and glowing hover states.
- **Physics-Based Skills Graph:** A custom-built, collision-detected SVG node graph for the "Technical Arsenal" section. Features smooth repulsion physics and dynamic label scaling.
- **Performant Animations:** Centralized `useInView` hook utilizing `IntersectionObserver` to trigger hardware-accelerated scroll reveals without heavy scroll-event listeners.
- **Zero-Dependency Interactions:** Interactive elements like the initial booting loader, modal overlays, and sticky navigation are built without heavy third-party animation libraries to keep the bundle size minimal.
- **Accessibility Ready:** Includes `aria-hidden` on decorative elements, semantic HTML5 tags, keyboard navigation support (e.g., Escape key to close modals), and respects `prefers-reduced-motion` for users sensitive to animations.

## 📂 Project Structure
```text
transmission/
├── src/
│   ├── app/                # Next.js App Router (layout, page, globals.css)
│   ├── components/         
│   │   ├── canvas/         # Interactive background (Starfield)
│   │   ├── layout/         # Nav and Footer components
│   │   ├── sections/       # Main page sections (Hero, About, Skills, Projects, etc.)
│   ├── content/            # Data layer (JSON-like objects for skills, projects, meta)
│   └── hooks/              # Reusable React hooks (useInView)
├── public/                 # Static assets (images, icons)
```

## 💻 Local Development

1. **Clone the repository** (if applicable) or download the source code.
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 🏗 Build for Production

To create an optimized production build:
```bash
npm run build
```
To test the production build locally:
```bash
npm run start
```

## 🎨 Design System Constraints
- **Typography:** Uses `JetBrains Mono` for technical text and `Outfit` or `Inter` (configurable in layout) for display.
- **Spacing:** Enforced via custom CSS variables (`--space-sm`, `--space-md`, etc.) in `globals.css` to maintain rigorous visual rhythm.
- **Colors:** Deep void backgrounds (`#05050a`), bright primary text (`#f8f8f8`), and distinct accent colors (e.g., saber blue `#4fc3f7`) mapped to CSS variables.

## 📝 License
This project is proprietary.
