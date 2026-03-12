# AGENTS.md - across.to

This repository contains the Across Protocol marketing website — a Next.js 15 application with Contentful CMS integration, Amplitude analytics, and Vercel deployment.

## How to use docs in this repo

1. This file (`AGENTS.md`) for top-level navigation and module map.

## Documentation maintenance

Update this `AGENTS.md` when new routes, integrations, or CMS content types are added.

## Quick index

- App router pages: `src/app/(routes)/`
- Shared components: `src/app/_components/`
- Icon library: `src/app/_components/icons/`
- Contentful CMS client: `src/app/_lib/contentful.ts`
- Constants and env config: `src/app/_constants/`
- Custom hooks: `src/app/_hooks/`
- Utility libraries: `src/app/_lib/`
- Static assets: `src/app/_assets/` and `public/`
- API routes: `src/app/api/`
- Analytics: `src/app/_amplitude/`

## Architecture

Next.js 15 App Router with:

- **Contentful CMS** for blog content (rich text, images, tags)
- **Amplitude** for event tracking
- **Tailwind CSS** for styling
- **Vercel** for deployment with ISR revalidation

### Routes

| Route                | Purpose                                        |
| -------------------- | ---------------------------------------------- |
| `/`                  | Homepage                                       |
| `/across-bridge`     | Bridge product page                            |
| `/across-plus`       | Plus product page                              |
| `/across-settlement` | Settlement layer page                          |
| `/blog`              | Blog listing (Contentful)                      |
| `/blog/[slug]`       | Blog article (dynamic, Contentful)             |
| `/megaeth`           | MegaETH campaign page                          |
| `/privacy-policy`    | Privacy policy                                 |
| `/terms-of-service`  | Terms of service                               |
| `/api/revalidate`    | ISR revalidation endpoint (Contentful webhook) |

### CMS integration

- Content type: `acrossBlogPost` (title, slug, content, tags, image, date)
- Client: `src/app/_lib/contentful.ts`
- Required env vars: `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN`, `CONTENTFUL_REVALIDATE_SECRET`

## Directory tree

```text
across.to/
├── src/app/
│   ├── (routes)/                     # App Router pages (grouped)
│   │   ├── page.tsx                  # Homepage
│   │   ├── across-bridge/            # Bridge product
│   │   ├── across-plus/              # Plus product
│   │   ├── across-settlement/        # Settlement layer
│   │   ├── blog/                     # Blog listing
│   │   │   └── [slug]/              # Dynamic blog articles
│   │   ├── megaeth/                  # Campaign page
│   │   ├── privacy-policy/           # Legal
│   │   └── terms-of-service/         # Legal
│   ├── api/revalidate/               # ISR revalidation webhook
│   ├── _components/                  # Shared React components
│   │   ├── header-nav/              # Navigation
│   │   └── icons/                   # Icon library (100+ SVG components)
│   ├── _assets/                     # Product images and chain logos
│   ├── _constants/                  # Config constants (env, links, amplitude)
│   ├── _hooks/                      # Custom React hooks
│   ├── _lib/                        # Utility libraries (contentful, analytics, cache)
│   ├── _amplitude/                  # Amplitude SDK integration
│   ├── layout.tsx                   # Root layout
│   ├── globals.css                  # Global styles
│   └── not-found.tsx                # 404 page
├── public/                          # Static assets
├── next.config.mjs                  # Next.js config (image remotes: twitter, contentful)
├── tailwind.config.ts               # Tailwind CSS config
├── vercel.json                      # Vercel deployment config
├── .nvmrc                           # Node version (lts/hydrogen, Node 20.x)
└── package.json                     # Yarn, Next.js 15, React 18
```

## Build and test

```bash
# Install
yarn

# Dev server
yarn dev

# Build
yarn build

# Lint
yarn lint
yarn format

# Pull Amplitude tracking data
yarn ampli:pull
```

## Key conventions

- Underscore-prefixed directories (e.g., `_components/`, `_lib/`) are private to the app router and not exposed as routes.
- Blog content is managed in Contentful — changes trigger ISR revalidation via webhook.
- The icon library in `_components/icons/` contains 100+ SVG components for chains and UI elements.
