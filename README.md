# 🎮 Gaming Hub

A modern gaming discovery app built with Next.js 16, TypeScript, Tailwind CSS, and the RAWG API. It helps players browse trending games, discover genres and platforms, and save favorites and wishlist entries with Appwrite authentication.

## ✨ Features

### Core browsing experience

- Home page with hero, trending games, top-rated games, and new releases
- Browse all games with filtering by genre, platform, and rating
- Genre directory and genre-specific game pages
- Platform directory and platform-specific game pages
- Search bar with live results and navigation to game details
- Responsive card-based grid layouts across desktop and mobile viewports
- Shared navigation with active states for current and nested routes

### Game details and discovery

- Full game detail pages with artwork, platform information, description, screenshots, and similar titles
- Reusable game cards and section components
- Empty, loading, and error states throughout the app
- Server-side data fetching and URL-driven filtering

### Authentication and user profiles

- Sign in and sign up flows with Appwrite authentication
- Protected profile page displaying account details and sign out action
- Secure user-specific saved collections using Appwrite TablesDB

### Wishlist and favorites

- Add or remove games from favorites and wishlist from the game cards
- Protected collection pages for saved games
- Per-user persistence with Appwrite row storage
- Empty state handling and pagination for saved lists

### UX and performance

- Dark and light mode styling
- Route-level loading states and skeleton screens
- Optimized images with next/image
- Clean, reusable architecture with server and client separation

## 🛠 Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Appwrite
- RAWG API
- Lucide React

## 🔐 Environment variables

Create a .env.local file in the project root with the following values:

```env
RAWG_API_KEY=your_rawg_api_key
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
APPWRITE_API_KEY=your_appwrite_server_key
DATABASE_ID=your_appwrite_database_id
TABLE_ID=your_appwrite_table_id
```

## 🚀 Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Run the production build locally

```bash
npm run start
```

### Available scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 📁 Project structure

```text
app/
├── api/
│   ├── appwrite/
│   ├── search/
│   └── user-games/
├── auth/
│   ├── login/
│   └── signup/
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
├── providers.tsx
components/
├── auth/
├── game/
├── games/
├── genres/
├── home/
├── shared/
hooks/
lib/
├── rawg.ts
├── user-games.ts
public/
README.md
```

## 📌 Notes

This project uses a server-first architecture with Next.js App Router, route-level loading states, and Appwrite for authentication and user data storage. The saved games feature is backed by Appwrite TablesDB rather than the older document/collections API.

## 📄 License

This project is intended for educational and portfolio use.
