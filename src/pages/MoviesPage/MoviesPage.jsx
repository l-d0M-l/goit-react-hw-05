import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { getMovieByName } from "../../components/FetchData/FetchData";
import MoviesList from "../../components/MoviesList/MoviesList";
import css from "./MoviesPage.module.css";

function MoviesPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [searchQuery, setSearchQuery] = useState(query || "");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function submitSearchMovie(e) {
    e.preventDefault();
    const newQuery = e.target.query.value.trim();
    if (!newQuery) return;

    setSearchQuery(newQuery);
    navigate(`/movies?query=${newQuery}`);
  }

  useEffect(() => {
    async function getMovies() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getMovieByName(searchQuery);
        setMovies(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [searchQuery]);
  return (
    <>
      <form onSubmit={submitSearchMovie}>
        <input
          name="query"
          type="text"
          className={css.input}
          defaultValue={query}
        />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
      {error && <p>Whoops, something went wrong, please try to reload</p>}
      {isLoading && <p>Loading, please wait..</p>}
      <MoviesList movies={movies}></MoviesList>
    </>
  );
}

export default MoviesPage;
