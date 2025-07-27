# Stealth Rev - Modern Fortune 500 Website

A sleek, modern website built with Next.js, React, TypeScript, and Tailwind CSS. This project showcases a Fortune 500-style company website with cutting-edge design and animations.

## 🚀 Features

- **Modern Design**: Clean, professional layout with Fortune 500 aesthetics
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations using Framer Motion
- **Performance**: Optimized for speed and SEO
- **Accessibility**: WCAG compliant with proper semantic HTML
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **Fonts**: Inter & Poppins (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stealth-rev-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features showcase
│   ├── About.tsx            # About section
│   ├── Services.tsx         # Services grid
│   ├── Testimonials.tsx     # Client testimonials
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Gray scale (#64748b to #0f172a)
- **Accent**: Purple gradient (#d946ef to #c026d3)

### Typography
- **Headings**: Poppins (Display font)
- **Body**: Inter (Sans-serif)

### Components
- **Buttons**: Primary and secondary variants with hover effects
- **Cards**: Elevated cards with hover animations
- **Forms**: Modern form inputs with focus states

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **SEO**: Meta tags, structured data, and semantic HTML

## 🔧 Customization

### Adding New Sections
1. Create a new component in `components/`
2. Import and add to `app/page.tsx`
3. Update navigation in `Header.tsx`

### Styling
- Modify `tailwind.config.js` for theme changes
- Update `app/globals.css` for custom styles
- Use Tailwind classes for component styling

### Content
- Update text content in component files
- Replace placeholder images in `public/`
- Modify contact information in `Contact.tsx` and `Footer.tsx`

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, email hello@stealthrev.com or create an issue in the repository.

---

Built with ❤️ by Stealth Rev 