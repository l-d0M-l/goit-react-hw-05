import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieReviews } from "../FetchData/FetchData";
import css from "./MovieReviews.module.css";

function MovieReviews() {
  const { movieId } = useParams();
  const [movieReviews, setmovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovieCast() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setmovieReviews(data);
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
      {isLoading && <p>Loading, please wait..</p>}
      {error && <p>Whoops, something went wrong, please try to reload</p>}
      {movieReviews.length > 0 && (
        <ul className={css.reviewList}>
          {movieReviews.map((review) => (
            <li key={review.id}>
              <ul className={css.reviewCard}>
                <li className={css.authorName}>{review.author}</li>
                <li className={css.reviewText}>{review.content}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
      {movieReviews.length === 0 && <p>Sorry, there are no reviews..</p>}
    </>
  );
}

export default MovieReviews;
