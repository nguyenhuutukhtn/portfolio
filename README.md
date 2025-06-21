# Portfolio Website - Nguyen Huu Tu

A modern, responsive portfolio website built with Nuxt.js 3, featuring smooth animations, SEO optimization, and professional design.

## ✨ Features

- **Modern Tech Stack**: Nuxt.js 3, Vue 3, TypeScript, Tailwind CSS
- **State Management**: Pinia for centralized data management
- **Animations**: GSAP with ScrollTrigger for smooth, professional animations
- **SEO Optimized**: Server-side rendering, meta tags, sitemap, and robots.txt
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fast Performance**: Optimized images, lazy loading, and efficient code splitting
- **Contact Form**: Integrated contact form with EmailJS support
- **Interactive CV**: Downloadable PDF with animated progress bars and timeline

## 🚀 Pages & Features

### Home Page (`/`)
- Hero section with typewriter effect
- Featured projects showcase
- Technical skills overview
- Call-to-action sections
- Smooth scroll animations

### Projects Page (`/projects`)
- Project grid with filtering by category
- Search functionality
- Hover effects and transitions
- Responsive card layouts

### Project Detail Page (`/projects/[id]`)
- Dynamic routing for individual projects
- Image carousel with auto-play
- Technology badges and achievements
- Related projects suggestions

### CV Page (`/cv`)
- Interactive timeline for experience
- Animated skill progress bars
- Education and certifications
- Downloadable PDF CV
- Open source contributions

### Contact Page (`/contact`)
- Contact form with validation
- EmailJS integration (configurable)
- Social media links
- Availability status

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   # EmailJS Configuration (optional)
   EMAILJS_SERVICE_ID=your_service_id
   EMAILJS_TEMPLATE_ID=your_template_id
   EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Generate static site**
   ```bash
   npm run generate
   ```

## 🛠️ Customization

### Personal Information
Update your personal information in `stores/cv.ts`:
- Name, title, contact details
- Professional summary
- Skills and proficiency levels
- Work experience and achievements
- Education and certifications

### Projects
Add your projects in `stores/projects.ts`:
- Project details and descriptions
- Technologies used
- Screenshots/images
- Live demo and GitHub links

### Styling
- Colors and theme: `assets/css/main.css`
- Component styles: Individual `.vue` files
- Tailwind config: `tailwind.config.js` (if needed)

### Contact Form
To enable the contact form:
1. Create an EmailJS account
2. Set up a service and template
3. Add your credentials to `.env`
4. Update the form submission logic in `pages/contact.vue`

## 📁 Project Structure

```
portfolio-website/
├── assets/
│   ├── css/
│   │   └── main.css          # Global styles and Tailwind
│   └── images/               # Static images
├── components/
│   ├── AppHeader.vue         # Navigation header
│   ├── AppFooter.vue         # Site footer
│   └── ProjectCard.vue       # Project card component
├── pages/
│   ├── index.vue             # Home page
│   ├── contact.vue           # Contact page
│   ├── cv.vue                # CV/Resume page
│   └── projects/
│       ├── index.vue         # Projects listing
│       └── [id].vue          # Project detail page
├── stores/
│   ├── cv.ts                 # CV data and state
│   └── projects.ts           # Projects data and state
├── public/
│   ├── cv/
│   │   └── Nguyen-Huu-Tu-CV.pdf  # Downloadable CV
│   ├── favicon.ico
│   └── robots.txt
├── app.vue                   # Main app layout
├── nuxt.config.ts           # Nuxt configuration
└── package.json             # Dependencies
```

## 🎨 Design Guidelines

### Color Palette
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Accent: Yellow (#FCD34D) for highlights
- Neutral: Gray shades for text and backgrounds

### Typography
- Font: Inter (loaded from Google Fonts)
- Headings: Bold, larger sizes
- Body: Regular weight, readable sizes

### Animations
- Page entrance: Fade in with slide up
- Scroll triggers: Progressive element reveals
- Hover effects: Scale and color transitions
- Form interactions: Focus states and feedback

## 🔧 Configuration

### SEO Settings
Update meta tags and site information in:
- `nuxt.config.ts` - Global settings
- Individual page files - Page-specific meta tags

### Analytics (Optional)
Add Google Analytics or other tracking:
1. Install the appropriate Nuxt module
2. Configure in `nuxt.config.ts`
3. Add tracking IDs to environment variables

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimizations

- **Image Optimization**: Uses Nuxt Image for automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components load on demand
- **GSAP**: Lightweight animations with hardware acceleration
- **SSR**: Server-side rendering for better SEO and performance

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Build command: `npm run generate`
2. Publish directory: `dist`
3. Set environment variables in Netlify settings

### Traditional Hosting
1. Run `npm run generate`
2. Upload `dist` folder contents to your web server

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, pull requests are welcome!

## 📧 Contact

**Nguyen Huu Tu**
- Email: nguyenhuutu@example.com
- LinkedIn: [linkedin.com/in/nguyenhuutu](https://linkedin.com/in/nguyenhuutu)
- GitHub: [github.com/nguyenhuutu](https://github.com/nguyenhuutu)

---

Built with ❤️ using Nuxt.js, Vue 3, and Tailwind CSS
