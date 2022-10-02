import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/",
  timeout: 1000,
});

export async function getMovieInfos(title: string) {
  const res = await api.get(
    `/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&query=${title}`
  );

  const image = `https://image.tmdb.org/t/p/original/${res.data.results[0].poster_path}`;
  const description = res.data.results[0].overview;
  const averageString = (res.data.results[0].vote_average / 2).toFixed(1);
  const average = parseFloat(averageString);
  const moviesInfos = { image, description, average };
  return moviesInfos;
}
