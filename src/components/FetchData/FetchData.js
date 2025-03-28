import axios from "axios";

export const getTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWI5NzQwODgwNWM3MDc2YTE4ZjhiZDZhODY0OWVlZCIsIm5iZiI6MTc0MzEwOTk1MC44NDcwMDAxLCJzdWIiOiI2N2U1YmYzZTMzYTc0MzQxZTMxMGMxMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7NDnGF7cqQkBMwh21k27xdkmAEYivANBGoYX1QtI98s",
    },
  };

  const resp = await axios.get(url, options);
  // console.log(resp.data);
  return resp.data;
};
export const getMovieById = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWI5NzQwODgwNWM3MDc2YTE4ZjhiZDZhODY0OWVlZCIsIm5iZiI6MTc0MzEwOTk1MC44NDcwMDAxLCJzdWIiOiI2N2U1YmYzZTMzYTc0MzQxZTMxMGMxMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7NDnGF7cqQkBMwh21k27xdkmAEYivANBGoYX1QtI98s",
    },
  };
  const resp = await axios.get(url, options);
  return resp.data;
};

export const getMovieCasts = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWI5NzQwODgwNWM3MDc2YTE4ZjhiZDZhODY0OWVlZCIsIm5iZiI6MTc0MzEwOTk1MC44NDcwMDAxLCJzdWIiOiI2N2U1YmYzZTMzYTc0MzQxZTMxMGMxMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7NDnGF7cqQkBMwh21k27xdkmAEYivANBGoYX1QtI98s",
    },
  };
  const resp = await axios.get(url, options);
  // console.log(resp.data.cast);
  return resp.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWI5NzQwODgwNWM3MDc2YTE4ZjhiZDZhODY0OWVlZCIsIm5iZiI6MTc0MzEwOTk1MC44NDcwMDAxLCJzdWIiOiI2N2U1YmYzZTMzYTc0MzQxZTMxMGMxMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7NDnGF7cqQkBMwh21k27xdkmAEYivANBGoYX1QtI98s",
    },
  };
  const resp = await axios.get(url, options);
  // console.log(resp.data.results);
  return resp.data.results;
};

export const getMovieByName = async (movieName) => {
  if (!movieName) {
    return [];
  }
  const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWI5NzQwODgwNWM3MDc2YTE4ZjhiZDZhODY0OWVlZCIsIm5iZiI6MTc0MzEwOTk1MC44NDcwMDAxLCJzdWIiOiI2N2U1YmYzZTMzYTc0MzQxZTMxMGMxMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7NDnGF7cqQkBMwh21k27xdkmAEYivANBGoYX1QtI98s",
    },
  };
  const resp = await axios.get(url, options);
  // console.log(resp.data.results);
  return resp.data.results;
};
