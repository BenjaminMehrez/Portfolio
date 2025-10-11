# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React, TypeScript, and Vite. The application showcases projects, skills, education timeline, and certificates for a full-stack developer. The project uses Tailwind CSS for styling and includes a complete internationalization system supporting English and Spanish.

## Development Commands

All commands should be run from the `frontend` directory:

```bash
cd frontend
```

### Build and Development
- `npm run dev` - Start development server with hot reload
- `npm run build` - Type check with TypeScript and build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on the codebase

### TypeScript
The build command includes TypeScript checking (`tsc -b`), so build failures may indicate type errors that need to be resolved.

## Architecture

### Project Structure

The codebase follows a standard React application structure within the `frontend/` directory:

```
frontend/src/
├── components/       # Reusable UI components
│   ├── Home/        # Home page specific components
│   ├── Navigation/  # Navigation components (NavBar, Footer, Language switcher)
│   └── ui/          # Generic UI components (shadcn-style)
├── containers/      # Page-level components
├── data/           # Static data (e.g., projects.ts)
├── hooks/          # Custom React hooks
├── i18n/           # Internationalization configuration
├── lib/            # Utility functions
├── store/          # Zustand state management
└── types/          # TypeScript type definitions
```

### Key Architectural Patterns

#### State Management
- **Zustand** is used for global state management
- Currently manages language preference with persistence via `zustand/middleware`
- Language store is located at `src/store/useLanguage.ts`

#### Internationalization (i18n)
The application supports English and Spanish through a custom i18n implementation:
- Translation definitions: `src/ i18n/index.ts`
- Type definitions: `src/ i18n/types.ts`
- Custom hook: `src/hooks/useTranslation.ts` provides `{ t, language }` interface
- Language state is persisted in localStorage via Zustand
- To add new translations:
  1. Update the `Translations` type in `src/ i18n/types.ts`
  2. Add translations for both 'es' and 'en' in `src/ i18n/index.ts`
  3. Use the `useTranslation()` hook to access translations

#### Routing
- Uses React Router v7 (`react-router-dom`)
- Routes are defined in `src/App.tsx`
- Current routes:
  - `/` - Home page
  - `/projects/:id` - Individual project detail page

#### Component Organization
- **Layout Component**: Wraps pages with common elements (NavBar, Footer, BannerLanguage)
- **Container Components**: Page-level components in `containers/` (Home, ProjectDetail)
- **Feature Components**: Organized by feature in subdirectories (e.g., `components/Home/`)
- **UI Components**: Reusable primitives in `components/ui/`

#### Styling
- **Tailwind CSS v4** with Vite plugin
- DaisyUI for additional component utilities
- Custom animations via `tw-animate-css`
- AOS (Animate On Scroll) library for scroll animations
- Path alias `@/` maps to `src/` directory

#### Build Configuration
- **Vite** as build tool with SWC for fast compilation
- Path resolution configured for `@/*` imports in both Vite and TypeScript
- ESLint configured with React hooks and React refresh rules

## Important Notes

### Path Aliases
The project uses `@/` as an alias for the `src/` directory. Both Vite and TypeScript are configured to resolve this alias:
- Vite config: `vite.config.ts`
- TypeScript config: `tsconfig.json`

### i18n Path Issue
Note that `i18n` directory imports appear with a space in the path (`@/ i18n/`) which is unconventional but currently functional.

### Dependencies of Note
- **React 19**: Using the latest React version
- **Motion**: For animations (newer library, successor to Framer Motion)
- **Heroicons**: Icon library used in components
- **Radix UI**: Accessible component primitives (currently just radio-group)
- **Zustand**: Lightweight state management
- **AOS**: Scroll animations initialized in `App.tsx`

### Data Management
Static data like project information is stored in `src/data/` directory (e.g., `projects.ts`). This is the appropriate location for any hardcoded content that doesn't require translation strings.
