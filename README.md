# Mustafizur Rahman Chowdhury — Portfolio

A dark, neon-accented portfolio for a full-stack developer, built with Next.js 16, React 19, and custom CSS.

## Stack

- Next.js App Router (static prerendering)
- React server components with small client islands
- `next/font` for self-hosted Space Grotesk and JetBrains Mono
- `next/image` for optimized project screenshots and the hero portrait
- Custom CSS with CSS variables and responsive layouts (no UI library)

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

```bash
npm run build
npm run start
```

## Structure

```text
src/
  app/
    globals.css      Design tokens, layout, sections, responsive rules
    icon.svg         Favicon
    layout.tsx       Fonts, metadata, viewport
    page.tsx         All portfolio content and SEO data
  components/
    contact-form.tsx Mailto contact form with status feedback
    scroll-effects.tsx Scroll progress and active nav state
    typed-role.tsx   Typewriter role animation
public/
  portrait.jpg       Hero portrait
  projects/          Project screenshots
  resume.pdf         Downloadable resume
```

## Customize

- Content, links, projects, and skills live in `src/app/page.tsx`.
- Colors, type, and spacing live in `src/app/globals.css`.
- Replace `public/portrait.jpg` and the three project images in `public/projects/`.
- Replace `public/resume.pdf` with an updated resume.

## Notes

The contact form has no backend. It opens the visitor's email client with the message prefilled, and still works without JavaScript through the form's `mailto:` action.
