# 🎮 GameHub

GameHub is a modern gaming discovery app built with Next.js 16, TypeScript, Tailwind CSS, the RAWG API, and Appwrite for authentication and user saved collections.

It helps users explore games by trending, genres, platforms, and personalized favorites or wishlist lists while maintaining a clean, responsive gaming UI.

## ✨ Features

### Home Experience

- Featured games hero section
- Trending, top-rated, and newest releases sliders
- Popular genres and platforms sections
- Dark and light mode support
- Reusable game and section components
- Smooth transitions and modern card layouts
- Route-level loading states for a polished experience

### Game Discovery

- Browse games with filtering by genre, platform, and rating
- URL-driven search parameters for shareable filters
- Server-side pagination with previous/next controls
- Responsive game cards with metadata and cover art
- Search suggestions and click-to-navigate results
- Detailed game pages with screenshots and similar games

### Genre and Platform Browsing

- Browse all genres and platform categories
- View genre-specific and platform-specific game collections
- Reusable discovery cards and shared catalog navigation
- Active route highlighting for easier orientation
- Empty, loading, and error states across browse pages

### User Accounts and Protection

- Appwrite authentication for sign in and sign up
- Protected favorites and wishlist pages
- User profile page with account details and sign out flow
- Server-side session handling with protected collection access
- Appwrite TablesDB-backed user data storage

### Wishlist and Favorites

- Save games to favorites or wishlist from any game card
- Toggle actions with instant UI feedback
- Per-user persistence stored in Appwrite TablesDB
- Collection pages for both favorites and wishlist
- Empty-state messaging when no games have been saved yet

### Search and Navigation

- Global header search with live results
- Debounced search behavior and dropdown suggestions
- Active navigation styling for home, games, genres, platforms, favorites, and wishlist
- Shared header patterns for consistent browsing experience

## 🛠 Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### UI and UX

- Next.js image optimization
- Lucide React icons
- Responsive interface design
- Skeleton loading states

### APIs and Services

- RAWG API for games, genres, platforms, screenshots, and metadata
- Appwrite for authentication and session management
- Appwrite TablesDB for per-user saved collections

## 📁 Project Structure

```text
app/
├── api/
│   ├── appwrite/
│   ├── search/
│   └── user-games/
├── auth/
│   ├── login/
│   ├── signup/
│   └── error.tsx
├── favorites/
├── game/[id]/
├── games/
├── genres/
│   └── [slug]/
├── platforms/
│   └── [id]/
├── profile/
├── wishlist/
├── globals.css
├── layout.tsx
├── loading.tsx
├── page.tsx
└── providers.tsx
components/
├── auth/
├── game/
├── games/
├── genres/
├── home/
├── shared/
└── ...
hooks/
lib/
├── rawg.ts
├── user-games.ts
public/
.env.example
README.md
package.json
```

## ⚡ Performance and Architecture

- Server-first rendering with Next.js App Router
- Server-side data fetching for catalog and detail pages
- Reusable RAWG API layer to avoid duplication
- Route-level loading boundaries and graceful error handling
- Lightweight client components only where interactivity is required
- Shared UI patterns for consistent design and maintainability

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd gaming-hub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file and add the following values:

```env
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
APPWRITE_API_KEY=your_api_key
DATABASE_ID=your_database_id
TABLE_ID=your_table_id
RAWG_API_KEY=your_rawg_api_key
```

> The Appwrite configuration is used for user login, sign up, profile access, and persistent favorites/wishlist data.

### 4. Start the development server

```bash
npm run dev
```

### 5. Available scripts

```bash
npm run dev      # Start local development server
npm run build    # Create a production build
npm run start    # Run the production build
npm run lint     # Run ESLint checks
```

## 📌 Completed Features

- [x] Home page and discovery sections
- [x] Game catalog and filtering
- [x] Game details pages
- [x] Search and navigation
- [x] Genre browsing
- [x] Platform browsing
- [x] Authentication with Appwrite
- [x] Favorites and wishlist tracking
- [x] User profile page
- [x] Loading and error states
- [x] Appwrite TablesDB migration

## 🧪 Verification

This project was validated with production checks using:

```bash
npx tsc --noEmit
npm run build
```

Both checks were run successfully during implementation.

## 📄 License

This project is for educational and portfolio purposes.
