import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import "./App.css";

const AppHeader = lazy(() => import("../AppHeader/AppHeader"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

const MovieDetailPage = lazy(() =>
  import("../../pages/MovieDetailPage/MovieDetailPage")
);
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));

function App() {
  return (
    <>
      <AppHeader></AppHeader>
      <Suspense fallback={<p>Loading page..</p>}>
        <Routes>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailPage />}>
            <Route path="cast" element={<MovieCast />}></Route>
            <Route path="reviews" element={<MovieReviews />}></Route>
          </Route>
          <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
