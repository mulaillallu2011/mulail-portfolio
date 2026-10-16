# Mulail — personal portfolio

A responsive portfolio for Mulail, a Class 10 student developer and Team ThinkORB member. Built with Next.js App Router, TypeScript, Tailwind CSS, Motion, and Lucide icons. Designed for static hosting, with no backend or secrets required.

## Run locally

Use Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

Visit the local address printed by Next.js.

## Validate and build

```sh
npm run lint
npm run typecheck
npm run build
```

The production build exports the site to `out/`, including the custom 404 page.

## Content and assets

- `app/data.ts`: verified profile links, projects, achievements, and gallery entries.
- `app/portfolio.tsx`: navigation, project filtering, modal details, gallery/lightbox, timeline, and illustrations.
- `app/globals.css`: responsive styling, animation, and reduced-motion handling.
- `public/images/`: approved website images only.

The Speleo Bot logo was supplied in the user’s “Speleo Bot Presentation Script” chat. It is project artwork, not a rover photograph. The optimized WebP is derived from that supplied file. Original attachments were preserved outside the website. Rover and other project illustrations are clearly labeled; they are not evidence of a built prototype. Three real portraits and three certificate previews have been imported from the user-provided OneDrive Desktop mulail-portfolio folder. Originals are untouched. The file named WRO-REGIONALS-CERTIFICATE.pdf actually describes a Virtual Championship Round 2026 Gold Badge in Future Innovators Senior, so its displayed caption preserves that distinction. The Speleo Bot, IoT, and other-project photo folders are empty. Add approved photos to `public/images`, set the relevant `image` and `imageAlt` in the project record, and add gallery entries with truthful captions. Do not publish IDs, sensitive certificates, or unrelated personal files.

Startup Management offers a Files link to `startup-management/` in this repository. That folder contains only recovered configuration files, not runnable app source. Preview is explicitly unavailable until the complete app is validated and deployed; then add its verified HTTPS URL as `previewUrl` on project `03` in `app/data.ts`. The portfolio continues to build and deploy from the repository root.

The national WRO silver badge is deliberately distinct from regional second place. YIP is described as selection. Speleo Bot capabilities are design objectives pending verification; Desk Buddy is a simulation in development. No competition dates were invented beyond the provided WRO year.

## Deploy to Vercel

Import this project’s GitHub repository into Vercel, choose Next.js, and deploy. The existing static-export setting is supported. No environment variables are required. Set `metadataBase` in `app/layout.tsx` to the verified public origin if the hosting domain changes.

## Deploy to another static host

Run `npm run build` and deploy the contents of `out/`. Serve `404.html` for unknown routes. The included `.openai/hosting.json` links this project to its Sites hosting instance; do not reuse that project ID for an unrelated website.

## Accessibility and performance

Semantic landmarks, skip link, visible keyboard focus, native modal focus containment, Escape to close, descriptive image text, mobile navigation, and reduced-motion support. Expensive continuous animations are also disabled on touch and slow-update devices. Gallery images are lazy-loaded. Contact uses mailto; there is no nonfunctional contact form or analytics tracking.

## Latest content review

Project descriptions were checked against the user’s Portfolio Details Writing, Rover Software Design, Build Desk Buddy Assistant, Design accounting software, Build Music Player, and Technology Workshop Projects chats. Only portfolio-relevant details were used; full chat transcripts, account settings, and credentials are not included. Planned workshops are not described as delivered.
