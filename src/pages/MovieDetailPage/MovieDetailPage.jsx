import { Suspense, useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router";
import css from "./MovieDetailPage.module.css";

import {
  getMovieById,
  getMovieCasts,
} from "../../components/FetchData/FetchData";

function MovieDetailPage() {
  const { movieId } = useParams();
  const [movieDetail, setMoviesDetails] = useState([]);
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    async function getMovie() {
      try {
        const data = await getMovieById(movieId);
        // console.log("datatata", data);
        setMoviesDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      <NavLink to={backLinkRef.current} className={css.back}>
        Go back
      </NavLink>
      <div className={css.wrapper}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
            alt="Movie photo"
            className={css.photo}
          />
        </div>
        <div className={css.mainInfo}>
          <h2>{movieDetail.original_title}</h2>
          <p>User score: {movieDetail.vote_average}/10</p>
          <p>
            <b>Overview</b>
          </p>
          <p>{movieDetail.overview}</p>
          <p>
            <b>Genres</b>
          </p>
          {movieDetail.genres?.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
          <p>
            <b> Country of origin:</b> {movieDetail.origin_country}
          </p>
        </div>
      </div>
      <div>
        <ul className={css.list}>
          <li>
            <NavLink to="cast" className={css.otherLink}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={css.otherLink}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<p>Loading..</p>}>
        <Outlet></Outlet>
      </Suspense>
    </>
  );
}

export default MovieDetailPage;
