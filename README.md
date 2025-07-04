# HackfinityVortex - AI Hackathon Website

A modern, interactive website for the legendary Hackfinity AI Hackathon featuring advanced animations, 3D elements, and engaging user experiences.

## 🚀 Features

- **Modern UI/UX** with Framer Motion animations
- **3D Interactive Elements** using Three.js and React Three Fiber
- **Real-time Countdown** timers
- **Interactive Timeline** with expandable event cards
- **Dynamic Sponsorship Package** with pricing tiers
- **Responsive Design** for all devices
- **Performance Optimized** for fast loading

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js, React Three Fiber
- **Backend**: Express.js, Node.js
- **Database**: Drizzle ORM with PostgreSQL

## 🔧 Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd HackfinityVortex

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

## 📦 Deployment

### Netlify Deployment

1. **Build Command**: `npm run build:client`
2. **Publish Directory**: `dist/public`
3. **Node Version**: 18

```bash
# Deploy to Netlify
npm run deploy:netlify
```

**Auto-deploy**: Connect your GitHub repository to Netlify for automatic deployments.

### Vercel Deployment

1. **Build Command**: `npm run build:client`
2. **Output Directory**: `dist/public`
3. **Node Version**: 18

```bash
# Deploy to Vercel
npm run deploy:vercel
```

**Auto-deploy**: Connect your GitHub repository to Vercel for automatic deployments.

### Manual Deployment

```bash
# Build the project
npm run build:client

# The built files will be in dist/public/
# Upload this folder to your hosting provider
```

## 🎯 Performance Optimizations

- **Code Splitting**: Vendor, animations, and 3D libraries are split into separate chunks
- **Asset Optimization**: Images, models, and audio files are optimized
- **Caching**: Long-term caching for static assets
- **Minification**: Production builds are minified using Terser
- **Tree Shaking**: Unused code is automatically removed

## 🎨 Components

### Main Components
- **Hero3D**: Interactive 3D hero section
- **DomainShowcase**: Domain categories with enhanced countdown
- **Timeline**: Interactive event timeline with expandable cards
- **SponsorCTA**: Dynamic sponsorship packages with pricing tiers
- **Features**: Key features showcase
- **ContactForm**: Contact and registration form

### UI Components
- Custom Radix UI components
- Framer Motion wrappers
- 3D emoji icons system
- Interactive particle systems

## 🔧 Configuration Files

- `netlify.toml` - Netlify deployment configuration
- `vercel.json` - Vercel deployment configuration
- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 🎪 Features Highlights

### Interactive Timeline
- Click events to expand and see more details
- Real-time countdown to main event
- Animated progress indicators
- Action buttons for reminders and sharing

### Dynamic Sponsorship
- Real-time pricing with discounts
- Urgency indicators and countdown timers
- Interactive tier selection
- Live engagement metrics

### Enhanced Countdown
- Multiple countdown widgets
- Animated time segments
- Interactive hover effects
- Color-coded time units

## 🚀 Production Build

The production build includes:
- Minified and optimized JavaScript/CSS
- Automatic code splitting
- Compressed assets
- Performance optimizations
- SEO-friendly meta tags

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎉 Live Demo

Visit the live website: [Deploy URL will be here]

---

Built with ❤️ for the Hackfinity AI Hackathon community.