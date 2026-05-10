# Rishabh Kumar — Personal Portfolio

Source for my personal portfolio site, deployed on Vercel.

Built on **Next.js 16 + React 19 + Tailwind 4 + shadcn/ui**, scaffolded from [Magic UI's portfolio template](https://github.com/magicuidesign/portfolio) and customised for AI Full-Stack engineering content.

## Stack

- **Framework:** Next.js 16 · React 19 · TypeScript 5.9
- **Styling:** Tailwind 4 · shadcn/ui · Magic UI
- **Content:** content-collections + MDX
- **Hosting:** Vercel

## Local development

```bash
pnpm install
pnpm dev
```

The dev server runs on `http://localhost:3000` (or the next available port).

## Project structure

- [`src/data/resume.tsx`](src/data/resume.tsx) — single source of truth for personal data (identity, skills, work, education, projects, hackathons, contact)
- [`src/components/section/`](src/components/section) — page sections (work, projects, hackathons, contact)
- [`src/components/ui/svgs/`](src/components/ui/svgs) — tech-stack icon components
- [`content/`](content) — MDX blog posts (rendered at `/blog`)
- [`public/`](public) — static assets (avatar, institutional logos)

## License

MIT — see [LICENSE](LICENSE). Original template © Magic UI Design.
