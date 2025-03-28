import css from "./HomePage.module.css";
import { getTrendingMovies } from "../../components/FetchData/FetchData";
import { useState, useEffect } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setError(false);
        setIsLoading(true);
        const movies = await getTrendingMovies();
        // const newMovies = movies.result;
        setTrendingMovies(movies.results);
        // console.log("mov", movies.re);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending movies today</h1>
      {isLoading && <p>Loading, please wait..</p>}
      {error && <p>Whoops, something went wrong, please try to reload</p>}
      <MoviesList movies={trendingMovies}></MoviesList>
    </>
  );
}

export default HomePage;
