import {SHORTS_MOVIE_DURATION} from "../constants/constants";

export function searchMoviesName(movies, name) {
  if(name) {
    return movies.filter((data) => {
      return data.nameRU.toLowerCase().includes(name.toLowerCase()) ||
      data.nameEN.toLowerCase().includes(name.toLowerCase())
    })
  }
  else {
    return (movies)
  }
  }
  
  export function searchMoviesDuration(movies) {
    return movies.filter((data) => data.duration <= SHORTS_MOVIE_DURATION);
  }