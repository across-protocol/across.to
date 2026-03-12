# Across Protocol Marketing Website

The marketing website for [Across Protocol](https://across.to) — the fastest and lowest-cost cross-chain bridge.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Contentful](https://www.contentful.com/) (Headless CMS for blog)
- [Vercel](https://vercel.com/) (Deployment)
- [Amplitude](https://amplitude.com/) (Analytics)

## Getting Started

### Requirements

- Node.js (see `.nvmrc` — lts/hydrogen)
- Yarn

### Setup

```bash
yarn
cp .env.example .env
```

Fill in the required environment variables in `.env`:

- `CONTENTFUL_SPACE_ID` — Contentful space identifier
- `CONTENTFUL_ACCESS_TOKEN` — Contentful API token
- `CONTENTFUL_REVALIDATE_SECRET` — ISR revalidation webhook secret

### Development

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
yarn build
```

### Lint & Format

```bash
yarn lint
yarn format
```

## Project Structure

```
src/app/
├── (routes)/          # Next.js App Router pages
│   ├── page.tsx       # Homepage
│   ├── across-bridge/ # Bridge product page
│   ├── across-plus/   # Plus product page
│   ├── across-settlement/ # Settlement layer page
│   ├── blog/          # Blog (Contentful CMS)
│   └── ...
├── api/               # API routes (ISR revalidation)
├── _components/       # Shared React components
├── _lib/              # Utilities (Contentful client, analytics)
├── _hooks/            # Custom React hooks
├── _constants/        # Configuration constants
└── _assets/           # Static images and logos
```

## CMS

Blog content is managed in [Contentful](https://www.contentful.com/). Changes published in Contentful trigger ISR revalidation via the `/api/revalidate` webhook endpoint.

## Analytics

Event tracking uses Amplitude. To refresh tracking data:

```bash
yarn ampli:pull
```

## License

Proprietary
