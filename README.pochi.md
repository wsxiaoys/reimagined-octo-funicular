Use **Bun** over npm.

Run `bun install` to ensure all dependencies are installed correctly.

Please start dev server as soon as possible, with `bun dev` command. This will help you to see the changes in real time.

This repository is pre-initialized with React 19, Next.js 15, Tailwind CSS v4 and shadcn/ui. All shadcn components are included in the repository, allowing you to use them directly.

when creating a landing page, make it content-rich (e.g add testimonials, feature sections, waitlist registration, pricing sections). Make it looks professional and decent, with a good aesthetic taste.

If not specified by user, prefer using futurism (dark mode, e.g purple-ish) style for the landing page.

When creating page, prefer make it a fully client side component ("use client")

Pay attention to page's layout, most of time for a landing page we want the content to be centered, and the header and footer to be full width.

Main entry of the page shall be `src/app/page.tsx`, and the main layout of the page shall be `src/app/layout.tsx` (it also contains `metadata` object which allows customization of title and description of the page).
