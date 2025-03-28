import { useEffect, useState } from "react";
import { useParams } from "react-router";
import css from "./MovieCast.module.css";

import { getMovieCasts } from "../FetchData/FetchData";

function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovieCast() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getMovieCasts(movieId);
        setMovieCast(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {error && <p>Whoops, something went wrong, please try to reload</p>}
      {isLoading && <p>Loading, please wait..</p>}

      {movieCast.length > 0 && (
        <ul className={css.actorsList}>
          {movieCast.map((movie) => (
            <li key={movie.id} className={css.actorCard}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`}
                alt="Actor photo"
                className={css.actorPhoto}
              />
              <ul className={css.actorInfo}>
                <li className={css.actorName}>
                  <b>Name:</b> {movie.name}
                </li>
                <li className={css.actorCharacter}>
                  <b>Character: </b> {movie.character}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
      {movieCast.length === 0 && (
        <p>Sorry, we don't have any information about movie cast</p>
      )}
    </>
  );
}

export default MovieCast;
