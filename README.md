# Gatherkind — Event Planner Website

A responsive React + Vite landing page inspired by the supplied luxury event-planner reference.

## Requirements
- Node.js (LTS recommended)
- npm
- VS Code (recommended)

## Run locally
1. Extract this folder.
2. Open it in VS Code.
3. Open the VS Code terminal in this folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Customize before publishing
- Replace “Gatherkind” with the event planner's actual business name.
- Replace `hello@gatherkind.example` in `src/App.jsx` with the real inquiry email.
- Replace the demo Instagram URL with the real account.
- Replace the Unsplash demo photographs with licensed images / the planner's own event photographs.
- Update service descriptions and location.
- The inquiry form currently opens the visitor's email app via `mailto:`. To receive enquiries reliably without depending on the visitor's email app, connect Formspree or create a backend endpoint.
- The photos are loaded from Unsplash URLs, so an internet connection is needed to display them.

## Main files
- `src/App.jsx`: page sections, event cards, mobile navigation, inquiry form
- `src/styles.css`: colors, typography, layouts, breakpoints
- `src/main.jsx`: React entry point
- `index.html`: page title, metadata, fonts
