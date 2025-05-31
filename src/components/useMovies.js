import { useState, useEffect } from "react";

const KEY = "f84fc31d";
export default function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (!res.ok) {
          throw new Error("Something went wrong with fetching the movies");
        }
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        setMovies(data.Search);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchMovies();
  }, [query]);

  return { movies, error };
}
