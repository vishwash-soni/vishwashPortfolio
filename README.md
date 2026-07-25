# Vishwash Soni — Portfolio

A premium, dark-themed personal portfolio built with React.js (JavaScript), Vite, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL shown in your terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
 ├── components/   # Reusable UI components (Navbar, Hero, ProjectCard, etc.)
 ├── pages/        # Home.jsx assembles all sections into the page
 ├── data/         # Edit these files to update content (profile, projects, certificates, achievements)
 ├── App.jsx
 └── main.jsx
```

## Customizing content

You don't need to touch any component to update your info — just edit the files in `src/data/`:

- `profile.js` — name, title, tagline, email, social links, resume path
- `projects.js` — add/edit/remove project cards
- `certificates.js` — add/edit/remove certificate cards
- `achievements.js` — LeetCode stats, skills, experience, tech stack

## Adding your resume

Place your resume PDF inside the `public/` folder and name it `resume.pdf`
(or update `resumeUrl` in `src/data/profile.js` to match your filename).

## Connecting the contact form to a backend

The contact form in `src/components/ContactForm.jsx` is fully wired up on the
frontend (controlled inputs + submit state) but does not send data anywhere yet.
See the comment block at the top of that file for exact steps to connect it to
Firebase or Supabase later.

## Tech Stack

- React.js (JavaScript, no TypeScript)
- Vite
- Tailwind CSS
- lucide-react (icons only — no animation libraries used)
