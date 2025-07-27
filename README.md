# Stealth Rev - Premium Pay Per Lead Solutions

A modern, Fortune 500-style website built with Next.js, React, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **UI Components:** Headless UI
- **Deployment:** GitHub Pages

## 📦 Dependencies

### Core Dependencies
- `next`: ^14.0.0 - React framework
- `react`: ^18.2.0 - UI library
- `react-dom`: ^18.2.0 - React DOM
- `framer-motion`: ^10.16.0 - Animations
- `lucide-react`: ^0.292.0 - Icons
- `@headlessui/react`: ^1.7.17 - UI components
- `clsx`: ^2.0.0 - Conditional classes
- `tailwind-merge`: ^2.0.0 - Tailwind class merging

### Development Dependencies
- `@types/node`: ^20.8.0 - Node.js types
- `@types/react`: ^18.2.0 - React types
- `@types/react-dom`: ^18.2.0 - React DOM types
- `autoprefixer`: ^10.4.16 - CSS autoprefixer
- `eslint`: ^8.51.0 - Linting
- `eslint-config-next`: ^14.0.0 - Next.js ESLint config
- `postcss`: ^8.4.31 - CSS processing
- `tailwindcss`: ^3.3.5 - CSS framework
- `typescript`: ^5.2.2 - Type checking

## 🎨 Design System

### Colors
- **Primary:** Red (#dc2626, #ef4444)
- **Dark:** Slate grays (#020617, #0f172a, #1e293b)
- **Text:** White, gray-300, gray-400

### Typography
- **Primary Font:** Inter (sans-serif)
- **Display Font:** Poppins (headings)

### Components
- **Buttons:** Primary (red) and Secondary (outlined)
- **Cards:** Dark background with borders
- **Gradients:** Dark to light transitions

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Header.tsx         # Navigation
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features section
│   ├── Services.tsx       # Services section
│   ├── About.tsx          # About section
│   ├── Testimonials.tsx   # Testimonials
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── lib/                    # Utility functions
├── public/                 # Static assets
└── out/                    # Static export
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/OfferLaunch/Stealthrev.git
cd Stealthrev

# Install dependencies
npm install

# Run development server
npm run dev
```

### Build & Export
```bash
# Build for production
npm run build

# Export static files
npm run export
```

## 🌐 Deployment

This project is configured for GitHub Pages deployment:

1. **Static Export:** Uses `next export` for static files
2. **Base Path:** Configured for `/Stealthrev` subdirectory
3. **GitHub Actions:** Automatic deployment on push to main

### Configuration Files
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration

## 🎯 Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark Theme** - Professional dark color scheme
- ✅ **Smooth Animations** - Framer Motion integration
- ✅ **SEO Optimized** - Meta tags and structured data
- ✅ **Performance** - Optimized images and code splitting
- ✅ **Accessibility** - ARIA labels and keyboard navigation
- ✅ **TypeScript** - Type safety throughout
- ✅ **Static Export** - Deployable to any static hosting

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  primary: {
    500: '#ef4444',
    600: '#dc2626',
    // ...
  },
  dark: {
    950: '#020617',
    900: '#0f172a',
    // ...
  }
}
```

### Fonts
Update font imports in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap');
```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🎨 CSS Architecture

- **Tailwind CSS** for utility classes
- **Custom components** for reusable styles
- **CSS-in-JS** for dynamic styles
- **PostCSS** for processing

## 🔍 Performance

- **Image Optimization** - Next.js Image component
- **Code Splitting** - Automatic route-based splitting
- **Static Generation** - Pre-rendered pages
- **Bundle Analysis** - Built-in webpack analyzer

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files

### Code Quality
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Prettier** - Code formatting

## 📄 License

This project is private and proprietary to Stealth Rev.

---

Built with ❤️ using Next.js, React, and Tailwind CSS 