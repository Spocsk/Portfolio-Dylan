# Dylan Portfolio

Personal portfolio website built with Next.js App Router and TypeScript.

## Tech Stack

- Next.js
- React
- TypeScript
- CSS
- Vercel Analytics

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project Structure

```text
.
├── app/
├── components/
├── lib/
├── public/
├── style.css
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Notes

- `/` is the canonical portfolio route.
- `/portfolio.html` is redirected to `/` for backward compatibility.
- The intro loader is disabled so the portfolio loads immediately.
- Vercel Analytics is mounted in the root Next.js layout.

## License

This project is for personal portfolio use.
