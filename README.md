# BMGR — Bhutanese Musical Group of Rochester

Official website for the Bhutanese Musical Group of Rochester, NY. Built with Astro, Tailwind CSS, and deployed to Cloudflare Pages.

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`

## Update Site Content

All organization data lives in one file: `src/config/site.config.ts`

Edit this file to update: members, programs, events, contact info, social links, and more.

## Add New Members / Photos

1. Add photo to `public/images/members/` (lowercase, hyphenated name, e.g., `new-member.jpg`)
2. Add member entry to the `members` array in `site.config.ts`
3. Set `photo: '/images/members/new-member.jpg'` or `photo: null` for initials avatar

## Deployment

Pushes to `main` automatically deploy via GitHub Actions to Cloudflare Pages.

### Setup (one-time)

1. Create a Cloudflare Pages project named `bmgr`
2. Add GitHub repository secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

## Build

```bash
npm run build    # Build for production
npm run preview  # Preview production build locally
```
