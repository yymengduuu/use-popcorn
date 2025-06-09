import { useReducer, useEffect } from "react";

const KEY = "f84fc31d";

const initialState = {
  movies: [],
  error: null,
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        movies: action.payload,
        isLoading: false,
        error: null,
      };
    case "error":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case "loading":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    default: {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
};

export default function useMovies(query) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    function () {
      if (!query) return;

      const controller = new AbortController();

      dispatch({ type: "loading" });
      fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Response === "False") {
            throw new Error(data.Error);
          }
          dispatch({ type: "dataReceived", payload: data.Search });
        })
        .catch((err) => dispatch({ type: "error", payload: err.message }));
      return () => controller.abort();
    },
    [query]
  );

  return state;
}

/*  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

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
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Failed to fetch movies:", err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
 

    fetchMovies();
    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, error, isLoading }; */
