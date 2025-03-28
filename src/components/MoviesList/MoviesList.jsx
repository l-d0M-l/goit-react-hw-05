import { Link, NavLink, useLocation } from "react-router";
import css from "./MoviesList.module.css";

function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.movieCard}>
            <NavLink
              to={`/movies/${movie.id}`}
              className={css.movieTitle}
              state={location}
            >
              {movie.original_title}
            </NavLink>

            <p className={css.movieDescription}>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoviesList;
