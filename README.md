# NeuroCore Frontend

Frontend for [mlmadeeasy.in](https://mlmadeeasy.in), the public-facing NeuroCore experience.

NeuroCore is built to make machine learning feel practical and approachable. This app presents the product story, highlights the platform, and includes a working ML workbench experience with a leaderboard route for model training and evaluation workflows.

## Overview

This repository contains the website frontend for NeuroCore. It is a React single-page application built with Vite and TypeScript, styled with Tailwind CSS and shadcn/ui, and wired with route-based navigation for the home page and leaderboard page.

### What you will find here

- A polished landing page for mlmadeeasy.in
- A dedicated ML workbench flow with dataset upload and model analysis UI
- A leaderboard route for comparing runs and model results
- Reusable UI primitives from shadcn/ui
- Responsive, animated sections powered by Framer Motion

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- TanStack Query
- Framer Motion
- Recharts
- Lucide Icons

## Project Structure

- `src/pages` contains the routed pages
- `src/components` contains the landing page sections and shared UI pieces
- `src/components/ui` contains the shadcn/ui component library
- `src/hooks` contains shared React hooks
- `backend` contains the companion backend service for local development or deployment workflows

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm, pnpm, yarn, or bun

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

```bash
npm run dev        # Start the Vite dev server
npm run build      # Build for production
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
npm run test       # Run Vitest once
npm run test:watch # Run Vitest in watch mode
```

## Deployment

The frontend is ready to deploy as a standard Vite static site. A common setup is:

1. Run `npm run build`.
2. Deploy the generated `dist` folder to your hosting provider.
3. Point the domain `mlmadeeasy.in` at the deployed site.

The repository also includes `vercel.json`, so Vercel deployments can be used without additional routing changes.

## Notes

- This repository is the frontend only. If you are deploying the full product, make sure the backend service is configured separately.
- The app uses client-side routing, so your hosting provider should serve `index.html` for unknown routes.

## License

Add your preferred license here before publishing the repository publicly.
