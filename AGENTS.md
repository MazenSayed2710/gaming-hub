# Frontend Development Instructions

## General Principles

- Follow clean architecture and separation of concerns.
- Keep the code clean, readable, and maintainable.
- Prefer scalable solutions over quick fixes.
- Follow existing project conventions before introducing new patterns.
- Reuse existing code whenever possible instead of creating new implementations.

---

## Project Structure

- Keep page.tsx responsible only for composing the page.
- Move reusable UI into dedicated components.
- Keep components small and focused on a single responsibility.
- Extract repeated UI into reusable components.
- Separate business logic from presentation components.
- Separate API logic from UI logic.
- Extend the existing API layer instead of duplicating fetch logic.
- Keep utility functions inside dedicated utility files.
- Reuse existing hooks before creating new ones.

---

## React & Next.js

- Use Server Components whenever possible.
- Only use Client Components when interactivity is required.
- Avoid unnecessary client-side rendering.
- Avoid unnecessary re-renders.
- Prefer server-side data fetching.
- Use Suspense and loading.tsx when appropriate.
- Use Error Boundaries or proper error handling when appropriate.

---

## TypeScript

- Use strong TypeScript types.
- Do not use `any` unless absolutely necessary.
- Prefer existing types before creating new ones.
- Keep types reusable.
- Use meaningful type names.

---

## API

- Keep all API requests inside the existing API layer.
- Never duplicate fetch logic.
- Handle API errors gracefully.
- Return consistent data structures from API functions.
- Keep API functions reusable.

---

## Components

- Keep components reusable.
- Avoid large components.
- Split components when they have multiple responsibilities.
- Keep props simple and well typed.
- Prefer composition over duplication.

---

## State Management

- Keep state as local as possible.
- Avoid unnecessary global state.
- Avoid prop drilling when a better solution already exists.
- Use custom hooks for reusable stateful logic.

---

## UI / UX

- Match the existing design system.
- Keep spacing consistent.
- Use responsive layouts.
- Avoid horizontal scrolling unless intentionally required.
- Add subtle animations only.
- Keep hover effects simple.
- Support dark and light mode if the project already includes it.

---

## Performance

- Optimize images using next/image.
- Lazy load heavy components when appropriate.
- Avoid unnecessary API requests.
- Debounce user input when appropriate.
- Memoize expensive calculations only when needed.

---

## Code Quality

- Avoid duplicated code.
- Keep functions small.
- Keep files organized.
- Use meaningful names for files, variables, functions, and components.
- Prefer readability over clever code.
- Remove unused code.
- Do not leave commented-out code.

---

## Accessibility

- Use semantic HTML.
- Add accessible labels where needed.
- Ensure keyboard accessibility.
- Use proper button and link elements.

---

## Error Handling

- Handle loading, empty, and error states.
- Display user-friendly error messages.
- Avoid application crashes caused by missing data.

---

## Before Finishing Any Task

Verify that:

- The implementation follows the existing project architecture.
- No duplicated code was introduced.
- Existing reusable components were reused whenever possible.
- Business logic is separated from presentation.
- API logic remains inside the API layer.
- The page is fully responsive.
- TypeScript types are correct.
- The solution is production-ready.
