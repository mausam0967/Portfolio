# Mausam Paudel - Modern Portfolio

A cutting-edge, high-performance portfolio website built with React, TypeScript, and modern web technologies. This portfolio showcases advanced frontend development skills with a focus on performance, accessibility, and user experience.

## 🚀 Features

### Core Features
- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Advanced 3D Background**: Interactive Three.js particle system with performance optimization
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Dark/Light Theme**: System preference detection with smooth transitions
- **Progressive Web App**: Offline functionality and app-like experience
- **SEO Optimized**: Comprehensive meta tags, structured data, and performance metrics

### Performance Features
- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: All metrics in "Good" range
- **Bundle Optimization**: Code splitting and tree shaking
- **Image Optimization**: WebP format with lazy loading
- **Caching Strategy**: Service worker and CDN optimization

### User Experience
- **Smooth Animations**: Framer Motion integration with micro-interactions
- **Accessibility**: WCAG 2.1 AA compliance with ARIA labels
- **Loading States**: Skeleton screens and progress indicators
- **Error Handling**: Graceful error boundaries and user feedback
- **Keyboard Navigation**: Full keyboard accessibility

### Developer Experience
- **TypeScript**: Full type safety and better development experience
- **ESLint & Prettier**: Code quality and formatting
- **Hot Reload**: Fast development with Vite
- **Component Library**: Reusable, modular components
- **Testing Setup**: Jest and React Testing Library ready

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with concurrent features
- **TypeScript** - Type safety and better DX
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Advanced animations
- **Three.js** - 3D graphics and effects
- **Lucide React** - Beautiful icons

### Styling
- **CSS Custom Properties** - Theme system and design tokens
- **CSS Modules** - Scoped styling
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Cross-browser compatibility

### Performance & SEO
- **React Helmet Async** - Dynamic meta tags
- **Service Worker** - Offline functionality
- **Web Vitals** - Performance monitoring
- **Structured Data** - Rich search results

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Commitizen** - Conventional commits

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── common/         # Shared components
│   ├── layout/         # Layout components
│   └── sections/       # Page sections
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── styles/             # Global styles and themes
├── types/              # TypeScript type definitions
└── assets/             # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mausam0967/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types

# Performance
npm run analyze      # Analyze bundle size
npm run lighthouse   # Run Lighthouse audit
```

## 🎨 Customization

### Theme Configuration
The portfolio uses CSS custom properties for theming. Modify the variables in `src/index.css`:

```css
:root {
  --color-primary: #ff6b6b;
  --color-bg-primary: #0a0a0a;
  --color-text-primary: #ffffff;
  /* ... more variables */
}
```

### Content Updates
1. **Personal Information**: Update `src/data/personal.js`
2. **Projects**: Modify `src/data/projects.js`
3. **Skills**: Edit `src/data/skills.js`
4. **Contact**: Update contact information in components

### Styling
- Global styles: `src/index.css`
- Component styles: `src/components/*.css`
- Theme variables: CSS custom properties

## 📊 Performance Optimization

### Bundle Optimization
- **Code Splitting**: Route-based and component-based
- **Tree Shaking**: Remove unused code
- **Dynamic Imports**: Lazy load components
- **Bundle Analysis**: Monitor bundle size

### Image Optimization
- **WebP Format**: Modern image format with fallbacks
- **Responsive Images**: srcset for different screen sizes
- **Lazy Loading**: Intersection Observer API
- **Compression**: Optimized image sizes

### Three.js Performance
- **Conditional Rendering**: Only render when visible
- **Reduced Complexity**: Lower particle count on mobile
- **Frame Rate Limiting**: Prevent excessive rendering
- **Memory Management**: Proper cleanup

## 🔍 SEO Strategy

### Technical SEO
- **Meta Tags**: Comprehensive meta descriptions
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: XML sitemap generation
- **Robots.txt**: Search engine directives

### Content SEO
- **Semantic HTML**: Proper heading structure
- **Alt Text**: Image descriptions
- **Internal Linking**: Strategic link structure
- **URL Structure**: Clean, descriptive URLs

### Performance SEO
- **Core Web Vitals**: Optimize LCP, FID, CLS
- **Mobile-First**: Mobile optimization
- **Page Speed**: Fast loading times
- **Accessibility**: WCAG compliance

## 📱 Progressive Web App

### Features
- **Offline Functionality**: Service worker caching
- **App-like Experience**: Full-screen mode
- **Install Prompt**: Add to home screen
- **Background Sync**: Offline data sync

### Configuration
PWA settings are configured in `vite.config.js`:

```javascript
VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    name: 'Mausam Paudel - Portfolio',
    short_name: 'Mausam Portfolio',
    // ... more configuration
  }
})
```

## 🧪 Testing

### Testing Setup
- **Jest**: Unit testing framework
- **React Testing Library**: Component testing
- **MSW**: API mocking
- **Playwright**: E2E testing

### Running Tests
```bash
npm run test          # Run unit tests
npm run test:e2e      # Run E2E tests
npm run test:coverage # Generate coverage report
```

## 📈 Analytics & Monitoring

### Performance Monitoring
- **Web Vitals**: Core Web Vitals tracking
- **Bundle Analysis**: Bundle size monitoring
- **Error Tracking**: Error boundary reporting
- **User Analytics**: User behavior tracking

### SEO Monitoring
- **Search Console**: Google Search Console integration
- **Lighthouse**: Regular performance audits
- **PageSpeed Insights**: Performance monitoring
- **Core Vitals**: Real user metrics

## 🚀 Deployment

### Build Process
```bash
npm run build        # Create production build
npm run preview      # Preview build locally
```

### Deployment Options
- **Vercel**: Zero-config deployment
- **Netlify**: Git-based deployment
- **GitHub Pages**: Static site hosting
- **AWS S3**: Cloud hosting

### Environment Variables
Create `.env` file for environment-specific configuration:

```env
VITE_GA_ID=your-google-analytics-id
VITE_EMAILJS_PUBLIC_KEY=your-emailjs-key
VITE_EMAILJS_SERVICE_ID=your-service-id
VITE_EMAILJS_TEMPLATE_ID=your-template-id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow TypeScript best practices
- Use ESLint and Prettier
- Write meaningful commit messages
- Add tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js** - 3D graphics library
- **Framer Motion** - Animation library
- **Lucide** - Icon library
- **Vite** - Build tool
- **React** - UI library

## 📞 Contact

- **Email**: paudelmausam00766@gmail.com
- **LinkedIn**: [Mausam Paudel](https://linkedin.com/in/mausampaudel)
- **GitHub**: [mausam0967](https://github.com/mausam0967)

---

**Built with ❤️ by Mausam Paudel** 