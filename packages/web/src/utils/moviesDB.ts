import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/',
  timeout: 1000,
});

const genreList = {
  '28': 'Action',
  '12': 'Adventure',
  '16': 'Animation',
  '35': 'Comedy',
  '80': 'Crime',
  '99': 'Documentary',
  '18': 'Drama',
  '10751': 'Family',
  '14': 'Fantasy',
  '34': 'History',
  '27': 'Horror',
  '10402': 'Music',
  '9648': 'Mystery',
  '10749': 'Romance',
  '878': 'Sci-Fi',
  '10770': 'TV Movie',
  '53': 'Thriller',
  '10752': 'War',
  '37': 'Western',
  '10762': 'Kids',
};

type GenresList = keyof typeof genreList;

function setGenre(genreId: GenresList): string {
  return genreList[genreId] ? genreList[genreId] : 'Off genre';
}

export async function getMovieInfos(title: string) {
  const res = await api.get(
    `/movie?api_key=${process.env.TMDB_KEY}&query=${title}`,
  );

  const image = `https://image.tmdb.org/t/p/original/${res.data.results[0].poster_path}`;
  const genre = setGenre(res.data.results[0].genre_ids[0]);
  const description = res.data.results[0].overview;
  const averageString = (res.data.results[0].vote_average / 2).toFixed(1);
  const average = parseFloat(averageString);
  const moviesInfos = { image, description, average, genre };
  return moviesInfos;
}
