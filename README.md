# Board App - Task Management Dashboard

A modern, responsive task management board application built with Next.js, featuring drag-and-drop functionality, real-time state management, and a beautiful user interface.

## 🚀 Technologies & Frameworks

### Core Framework
- **Next.js 15.5.4** - React framework with App Router for server-side rendering and static generation
- **React 19.1.0** - Modern React with latest features and hooks
- **TypeScript 5** - Type-safe JavaScript development

### State Management
- **Zustand 5.0.8** - Lightweight state management with persistence middleware
- **Local Storage Persistence** - Automatic data persistence across browser sessions

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework with custom design system
- **Heroicons 2.2.0** - Beautiful SVG icons from the makers of Tailwind CSS
- **Custom CSS Variables** - Brand colors and design tokens for consistent theming
- **Responsive Design** - Mobile-first approach with touch-friendly interactions

### Drag & Drop
- **@dnd-kit/core 6.3.1** - Modern drag and drop toolkit for React
- **@dnd-kit/sortable 10.0.0** - Sortable functionality for drag and drop
- **@dnd-kit/utilities 3.2.2** - Utility functions for drag and drop operations

### Development Tools
- **ESLint 9** - Code linting with Next.js and TypeScript configurations
- **PostCSS** - CSS processing and optimization
- **Path Aliases** - Clean imports with `@/*` path mapping

## 🏗️ Architecture & Techniques

### Component Architecture
- **Functional Components** - Modern React with hooks
- **Custom Hooks** - Reusable state logic with Zustand
- **Component Composition** - Modular, reusable UI components
- **TypeScript Interfaces** - Strong typing for data structures

### State Management Patterns
- **Centralized Store** - Single source of truth with Zustand
- **Immutable Updates** - Functional state updates
- **Computed Values** - Derived state with getter functions
- **Persistence Layer** - Automatic localStorage integration

### UI/UX Techniques
- **Drag & Drop Interface** - Intuitive task management with visual feedback
- **Responsive Grid Layout** - Adaptive swimlanes for different screen sizes
- **Touch Optimization** - Mobile-friendly interactions and gestures
- **Visual Feedback** - Drag overlays and smooth animations
- **Search & Filtering** - Real-time task filtering across multiple fields

### Performance Optimizations
- **Client-Side Rendering** - Interactive components with "use client" directive
- **Efficient Re-renders** - Optimized state updates and component structure
- **CSS Custom Properties** - Dynamic theming and consistent design tokens
- **Mobile Performance** - Touch manipulation and smooth scrolling

### Data Management
- **JSON Data Source** - Static task data with TypeScript interfaces
- **Type-Safe Operations** - Full TypeScript coverage for data handling
- **Search Functionality** - Multi-field search across title, description, assignee, and tags
- **Status Management** - Kanban-style workflow with drag-and-drop status updates

## 🎨 Design System

### Color Palette
- **Primary**: #3772ff (Blue)
- **Secondary**: #64748b (Slate)
- **Accent**: #ffa800 (Orange)
- **Status Colors**: Green (Approved), Red (Reject), Orange (In Progress), Gray (To Do)

### Typography
- **Font**: Poppins (Google Fonts)
- **Responsive Typography** - Scalable text across devices

### Layout
- **Sidebar Navigation** - Collapsible sidebar with project navigation
- **Header Bar** - Search functionality and user actions
- **Swimlane Layout** - Four-column Kanban board (To Do, In Progress, Approved, Reject)
- **Card-Based Design** - Individual task cards with rich metadata

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd board-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Features

- **Drag & Drop Tasks** - Move tasks between swimlanes with visual feedback
- **Real-time Search** - Filter tasks by title, description, assignee, or tags
- **Persistent State** - Tasks persist across browser sessions
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Rich Task Cards** - Display priority, due dates, assignees, tags, and attachments
- **Touch-Friendly** - Optimized for mobile and tablet interactions

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and CSS variables
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Dashboard.tsx   # Main dashboard with drag & drop
│   ├── Header.tsx      # Top navigation bar
│   ├── Sidebar.tsx     # Side navigation
│   ├── TaskCard.tsx    # Individual task component
│   └── Swimlane.tsx    # Column component
├── data/              # Static data
│   └── tasks.json     # Sample task data
├── store/             # State management
│   └── taskStore.ts   # Zustand store configuration
└── types/             # TypeScript definitions
    └── task.ts        # Task and store interfaces
```

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn React
- [Zustand Documentation](https://github.com/pmndrs/zustand) - State management guide
- [@dnd-kit Documentation](https://dndkit.com) - Drag and drop toolkit
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework
