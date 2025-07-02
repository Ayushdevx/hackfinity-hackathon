# Hackfinity - Infinite Fun. Infinite Creativity

## Overview

This is a full-stack application for Hackfinity, "the world's biggest Agentic AI Hackathon." The project is built using a modern tech stack with React frontend, Express backend, and PostgreSQL database. The application features an immersive 3D landing page with interactive elements, comprehensive hackathon information, and sponsor management capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **3D Graphics**: React Three Fiber (@react-three/fiber) with Drei helpers
- **Animations**: Framer Motion for smooth transitions and effects
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **State Management**: Zustand for audio and game state management
- **Data Fetching**: TanStack Query (React Query) for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon serverless)
- **Storage**: In-memory storage with interface for easy database migration
- **Session Management**: Prepared for PostgreSQL session storage

### Build System
- **Development**: Vite dev server with HMR
- **Production**: Vite build + esbuild for server bundling
- **Asset Handling**: Support for 3D models (GLTF/GLB), audio files, and GLSL shaders

## Key Components

### 3D Interactive Landing Page
- **Hero Section**: Immersive 3D scene with floating particles and objects
- **Navigation**: Smooth scrolling navigation with audio controls
- **Visual Effects**: Particle systems, floating animations, and gradient materials

### Content Sections
- **Domain Showcase**: AI, ML, Blockchain, and other technology domains
- **Features**: Prize pool, mentors, networking opportunities
- **Timeline**: Event schedule with status indicators
- **Sponsor Management**: Current sponsors and sponsorship tiers
- **Contact Form**: Multi-purpose contact form with validation

### Audio System
- **Background Music**: Looped ambient audio
- **Sound Effects**: Hit sounds and success notifications
- **Mute Controls**: Global audio toggle functionality

## Data Flow

### Frontend Data Management
1. **Component State**: Local state for form inputs and UI interactions
2. **Global State**: Zustand stores for audio settings and game state
3. **Server State**: TanStack Query for API data with caching
4. **Form Handling**: Controlled components with validation

### Backend API Structure
- **RESTful Routes**: Organized under `/api` prefix
- **Error Handling**: Centralized error middleware
- **Logging**: Request/response logging for API endpoints
- **CORS**: Configured for cross-origin requests

### Database Schema
- **Users Table**: Basic user management with username/password
- **Extensible Design**: Ready for additional tables (sponsors, events, etc.)
- **Type Safety**: Drizzle schema with Zod validation

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **@radix-ui/***: Comprehensive UI component primitives
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers for React Three Fiber
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **drizzle-orm**: Type-safe database ORM

### Development Tools
- **TypeScript**: Type safety across the stack
- **Tailwind CSS**: Utility-first styling
- **Vite**: Fast build tool and dev server
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **Database**: Neon PostgreSQL with connection pooling
- **Asset Serving**: Vite handles static assets and 3D models

### Production Build
- **Frontend**: Vite builds to `dist/public`
- **Backend**: ESBuild bundles server to `dist/index.js`
- **Database Migrations**: Drizzle Kit for schema management
- **Environment Variables**: DATABASE_URL required for production

### File Structure
```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── lib/          # Utilities and stores
│   │   └── pages/        # Page components
│   └── public/           # Static assets
├── server/               # Backend Express application
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Database abstraction layer
│   └── vite.ts           # Development server setup
├── shared/               # Shared types and schemas
└── migrations/           # Database migration files
```

## Changelog

- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.