# rr7-plugin

An Nx plugin for generating React Router v7 applications.

## What it does

This plugin provides a generator that creates React Router v7 applications with the same structure and configuration as `monoquest`.

## Installation

The plugin is part of the workspace and doesn't need separate installation.

## Usage

### Generate a new React Router v7 app

```bash
nx g @michael-assessment/rr7-plugin:rr7-app --name=my-app --withTailwind
```

### Options

- `--name` (required): The name of the app to create
- `--directory`: Optional subdirectory under apps/
- `--tags`: Comma-separated tags (e.g. "scope:web,type:app")
- `--withTailwind` (default: true): Include Tailwind CSS v4
- `--withShadcn` (default: false): Initialize shadcn/ui

### Example

```bash
nx g @michael-assessment/rr7-plugin:rr7-app --name=dashboard --withTailwind --withShadcn
```

This will create an app at `apps/dashboard` with:
- React Router v7 setup
- Tailwind CSS v4
- Proper Nx configuration
- Jest testing setup
- ESLint configuration

## Generated App Structure

The generator creates an app matching the monoquest structure:

```
apps/my-app/
├── app/
│   ├── app.tsx          # Main app component
│   ├── root.tsx         # Root layout
│   └── routes.tsx       # Route configuration
├── src/
│   ├── styles.css       # Global styles
│   └── test-setup.ts    # Test setup
├── package.json         # Dependencies
├── vite.config.ts       # Vite configuration
├── react-router.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── jest.config.ts
└── eslint.config.mjs
```

## Running the Generated App

```bash
# Start dev server
nx dev my-app

# Build for production
nx build my-app

# Serve production build
nx start my-app

# Run tests
nx test my-app

# Run linting
nx lint my-app
```

## Development

### Building the plugin

```bash
nx build rr7-plugin
```

### Running tests

```bash
nx test rr7-plugin
```

## Features

- ✅ React Router v7 with file-based routing
- ✅ Tailwind CSS v4 support
- ✅ TypeScript with proper types
- ✅ Jest testing setup
- ✅ ESLint configuration
- ✅ Nx integration
- ✅ Matches monoquest structure
