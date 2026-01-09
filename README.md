# Devrai Vidnyan Ashram Website

Official website for Devrai Vidnyan Ashram NGO, built with [Next.js](https://nextjs.org).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Contributing

This is a private repository. Please follow these guidelines when contributing:

### Branch Workflow

1. Create a new branch from `main` using a descriptive name with the appropriate prefix:

   ```bash
   git checkout -b feature/add-donation-form
   git checkout -b fix/navbar-mobile-layout
   git checkout -b chore/update-dependencies
   git checkout -b docs/improve-readme
   ```

   **Branch prefixes:**

   - `feature/` - New features or enhancements
   - `fix/` - Bug fixes
   - `chore/` - Maintenance tasks (dependencies, configs)
   - `docs/` - Documentation updates
   - `refactor/` - Code refactoring without changing behavior

2. Keep your branch up to date with `main` to avoid merge conflicts.

### Commit Guidelines

We encourage [Conventional Commits](https://www.conventionalcommits.org/) for clear and consistent commit history:

```
<type>: <description>

[optional body]
```

**Commit types:**

- `feat:` - A new feature
- `fix:` - A bug fix
- `docs:` - Documentation changes
- `style:` - Formatting, missing semicolons, etc. (no code change)
- `refactor:` - Code restructuring without changing behavior
- `chore:` - Maintenance tasks, dependency updates
- `test:` - Adding or updating tests

**Examples:**

```bash
git commit -m "feat: add volunteer registration form"
git commit -m "fix: resolve image loading issue on gallery page"
git commit -m "docs: update setup instructions in README"
```

- Use present tense ("add feature" not "added feature").
- Keep the first line under 72 characters.
- Reference relevant issue numbers if applicable (e.g., `fix: resolve login bug #42`).

### Pull Requests

1. Ensure your code runs without errors (`npm run build`).
2. Test your changes locally before submitting.
3. Create a pull request to `main` with a clear description of your changes.
4. Request a review from a team member.

### Code Style

- Follow the existing code style and conventions.
- Run `npm run lint` before committing to catch any linting issues.
- Keep components modular and reusable.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
