import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../utils/constants";

const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
    setIsLoading(true);
    const data = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${query}`);
    const json = await data.json();

    if (json.Response === "False") {
      setMovies([]);
      return;
    }
    //console.log(json.Search);
    setMovies(json.Search);
    setIsLoading(false);
  };

  useEffect(() => {
    if (query.length < 3) {
      setMovies([]);
      return;
    }
    //handleCloseMovie();
    getMovies();
  }, [query]);
  return { movies, isLoading };
};

export default useMovies;
