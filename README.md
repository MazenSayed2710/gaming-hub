# 🎮 GameHub

A modern gaming discovery platform built with **Next.js 16**, **TypeScript**, and the **RAWG API**. Browse trending, top-rated, and newly released games through a clean, responsive interface inspired by modern gaming platforms.

🚧 This project is currently under active development. New features and pages will be added incrementally.

## ✨ Features

### Home Page

- Featured Games hero section.
- Trending Games slider.
- Top Rated Games slider.
- New Releases slider.
- Popular Genres section.
- Popular Platforms section.
- Responsive design for desktop, tablet, and mobile.
- Dark / Light mode.
- Skeleton loading for a smooth loading experience.
- Reusable slider and section components.
- Smooth hover animations and transitions.

### Browse Games

- Browse a collection of games from the RAWG API.
- Filter games by genre, platform, and rating.
- URL-based filtering using search parameters.
- Server-side pagination with Previous and Next navigation.
- Responsive game grid using reusable `GameCard` components.
- Click any game card to navigate to its details page.
- Skeleton loading for the entire page.
- Graceful error handling.
- Extended reusable RAWG API layer.
- Clean, reusable, and component-based architecture.

### Genres

- Browse popular genres from the RAWG API.
- Navigate from a genre to a filtered games collection.
- Responsive genre card grid with loading and error states.

### Platforms

- Browse consoles, computers, and handheld platforms from the RAWG API.
- View platform cards with artwork, game counts, and descriptions.
- Navigate to a platform-specific games collection.
- Filter platform games by genre and rating.
- Responsive platform grids with empty, loading, and error states.

### Game Details

- Hero section with game artwork and key information.
- About section with the game description.
- Screenshots gallery.
- Similar games recommendations.
- Extended reusable RAWG API layer.
- Skeleton loading for the entire page.
- Responsive design for desktop, tablet, and mobile.
- Graceful error handling.

### Search

- Search input in the app header.
- Debounced live search results while typing.
- Responsive dropdown results with game image, rating, and title.
- Click-to-navigate to the game detail page.
- Spinner loading state and no-results feedback.
- Outside-click closing behavior with a reusable custom hook.

### Navigation

- Shared navigation links for Home, Games, Genres, and Platforms.
- Active navigation styling for the current page and nested detail pages.
- Responsive navigation in both home and catalog headers.

## 🛠 Tech Stack

### Frontend

- Next.js 16 (App Router)
- React
- TypeScript
- Tailwind CSS

### UI & UX

- `next/image`
- `lucide-react`

### API

- RAWG Video Games Database API

## 📁 Project Structure

```text
app
├── api/search
├── game/[id]
├── games
├── genres
│   └── [slug]
├── platforms
│   └── [id]
├── globals.css
├── layout.tsx
└── page.tsx
components
├── game
├── games
├── genres
├── home
└── shared
	├── CatalogHeader.tsx
	├── DiscoveryCard.tsx
	├── PrimaryNavigation.tsx
	└── SectionHeader.tsx
hooks
lib
└── rawg.ts
```

## ⚡ Performance

- Server-side data fetching using Server Components.
- Optimized images with `next/image`.
- Reusable API layer.
- Component-based architecture.
- Responsive and accessible UI.
- URL-driven filtering for better navigation and shareable links.
- Parallel server-side requests for related page data.

## 🚀 Getting Started

### Clone the repository

```bash
git clone <repository-url>
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env.local` file and add:

```env
RAWG_API_KEY=YOUR_API_KEY
```

### Start the development server

```bash
npm run dev
```

### Available scripts

```bash
npm run lint       # Run ESLint
npm run build      # Create a production build
npm run start      # Start the production server
```

## 📌 Roadmap

- [x] Home Page
- [x] Browse Games
- [x] Game Details
- [x] Search
- [x] Genres
- [x] Platforms
- [ ] Authentication
- [ ] Wishlist
- [ ] Profile
- [ ] SEO Optimization

## 📄 License

This project is built for educational purposes and portfolio showcase.
