# MichaelAssessment

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is ready ✨.

A modern monorepo demonstrating React Router v7, shadcn/ui components, and Nx best practices.

## Overview

This workspace showcases a production-ready React application architecture with:
- **React Router v7** with file-based routing and SSR
- **Shadcn/UI** component library with Radix UI primitives
- **Tailwind CSS v4** for styling
- **Nx monorepo** with proper package structure
- **Custom generator** for creating new React Router v7 apps

## Demo

[![Demo Video](./video.mp4)](./video.mp4)

## Workspace Structure

```
michael-assessment/
├── apps/
│   └── monoquest/           # Main React Router v7 application
├── packages/
│   ├── ui/                   # Application-specific UI (breadcrumbs)
│   ├── shadcn-components/    # Reusable shadcn/ui components
│   └── shadcn-utils/         # Shared utilities (cn, styles)
├── tools/
│   ├── rr7-plugin/           # Custom React Router v7 generator
│   └── tailwind-sync-plugin/ # Tailwind configuration sync
```

## Getting Started

### Run the App

```bash
# Start dev server
nx dev monoquest

# Build for production
nx build monoquest

# Start production server
nx start monoquest
```

The app will be available at http://localhost:4200

### Generate a New App

Use the custom RR7 plugin to generate a new React Router v7 application:

```bash
nx g @michael-assessment/rr7-plugin:rr7-app --name=my-app --withTailwind
```

This creates a new app at `apps/my-app` with the same structure as monoquest.

### Available Nx Commands

```bash
# List all projects
nx show projects

# Run specific targets
nx dev monoquest          # Start dev server
nx build monoquest        # Build for production
nx test monoquest         # Run tests
nx lint monoquest         # Run linting

# Generate code
nx g @michael-assessment/rr7-plugin:rr7-app --name=app-name
```

## Packages

### @michael-assessment/ui
Application-specific UI components, including:
- Breadcrumb provider with context management
- Breadcrumb utilities and configuration

### @michael-assessment/shadcn-components
Reusable component library:
- Button, Card, Typography (H1-H4, Paragraph, List)
- Breadcrumb, Separator
- All built with Radix UI primitives

### @michael-assessment/shadcn-utils
Shared utilities:
- `cn()` function for className merging
- Global CSS styles
- Tailwind configuration

## Plugins

### rr7-plugin
Custom Nx plugin for generating React Router v7 applications.

**Usage:**
```bash
nx g @michael-assessment/rr7-plugin:rr7-app --name=app-name --withTailwind --withShadcn
```

**Features:**
- Matches monoquest structure
- React Router v7 with SSR
- Tailwind CSS v4 support
- TypeScript configuration
- Jest testing setup
- ESLint configuration

### tailwind-sync-plugin
Synchronizes Tailwind configuration across packages in the monorepo.

## Technologies

- **React Router v7** - Latest routing with SSR and file-based routes
- **Nx** - Monorepo management and build system
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Shadcn/UI** - Component library built on Radix UI
- **Vite** - Fast build tool
- **Jest** - Testing framework
- **ESLint** - Code quality

## Development

### Add New Projects

```bash
# Generate a new React Router v7 app
nx g @michael-assessment/rr7-plugin:rr7-app --name=dashboard

# Generate a new library
nx g @nx/react:library my-lib
```

### Build Everything

```bash
# Build all apps and libraries
nx run-many -t build --all

# Build only affected projects
nx affected -t build
```

## Learn More

- [Nx Documentation](https://nx.dev)
- [React Router Documentation](https://reactrouter.com)
- [Shadcn/UI Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## Useful Links

- [Learn about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins)

Join the community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools)
- [Our blog](https://nx.dev/blog)
