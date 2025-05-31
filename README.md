# 🍿 usePopcorn

A modern, interactive movie search and rating application built with React and the OMDb API. Search for movies, view detailed information, and rate them with a custom star rating component.

---

## 🚀 Features

- 🔍 **Search Movies**: Type and search in real-time using the OMDb API.
- 🎬 **View Movie Details**: See poster, release year, genre, plot, actors, and director.
- ⭐ **Rate Movies**: Use an interactive star rating system to score movies.
- 📊 **Watch List Summary**: Tracks your watched movies, average IMDb rating, user rating, and runtime.
- ✅ **Responsive & Component-Based**: Built using clean and reusable React components.

---

## 📦 Tech Stack

- **React 19** with Hooks (`useState`, `useEffect`, `useRef`)
- **Custom Hooks**: `useMovies` for fetching OMDb data
- **Vite** as build tool (alternatively Create React App)
- **gh-pages** for optional deployment
- **OMDb API** for movie data

## 🛠️ How to Run Locally

1. **Clone this repository**

```bash
git clone https://github.com/yymengduuu/use-popcorn.git
cd use-popcorn
```

2. **Install dependencies**

```bash
   npm install
```

3. **Start the development server**

```bash
npm run dev   # For Vite
# or
npm start     # If using CRA
```

4. **Build for production**

```bash
npm run build
```

5. **Deploy to GitHub Pages**

```bash
npm run deploy
```

---

## 🔑 API Key

This app uses the OMDb API with a demo key:

```bash
const KEY = "f84fc31d";
```

---

## ✨ Credits

- Built by @yymengduuu
- Data from OMDb API
- Icons: Emoji + SVG
