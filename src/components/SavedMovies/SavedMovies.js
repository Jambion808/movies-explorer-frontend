import "./SavedMovies.css";
// import { savedMovieList } from "../../constants/savedMoviesList";
import { MovieCardList } from "../Movies/MoviesCardList/MoviesCardList";
import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { useState, useEffect } from "react";
import { searchMoviesName, searchMoviesDuration } from "../../utils/findByName";
import * as MainApi from "../../utils/MainApi";

export function SavedMovies(props) {
  
  const [isShorts, setIsShorts] = useState(false);
  // console.log(isShorts)
  const [isContentOfSavedMovies, setIsContentOfSavedMovies] = useState(
    props.isSavedMovies
  );
  const [isBuild, setIsBuild] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState("");

  useEffect(() => {
    setIsContentOfSavedMovies(props.isSavedMovies);
    setIsBuild(true);
  }, [props.isSavedMovies]);

  function handleGetMovies(film, isShorts) {  
    const filtrateMovies = searchMoviesName(props.isSavedMovies, film);
    const shortsFiltrateMovies = searchMoviesDuration(filtrateMovies);

    if (isShorts) {
      setIsContentOfSavedMovies(shortsFiltrateMovies);
      setIsBuild(true);
      if (shortsFiltrateMovies.length < 1) {
        setIsBuild(false);
        setIsErrorMessage("Ничего не найдено");
      }
    } else {
      setIsContentOfSavedMovies(filtrateMovies);
      setIsBuild(true);
      if (filtrateMovies.length < 1) {
        setIsBuild(false);
        setIsErrorMessage("Ничего не найдено");
      }
    }
  }

  function handleDeleteMovie(movieId, protectBinder) {
    MainApi.deleteMovies(movieId)
      .then(() => {
        protectBinder(false);
        props.setIsSavedMovies((state) =>
          state.filter((data) => data._id !== movieId)
        );
        setIsContentOfSavedMovies((state) =>
          state.filter((data) => data._id !== movieId)
        );
      })
      .catch((err) => console.log(err));
  }

  return (
    <main className="saved-container">
      <SearchForm
        isLoading={props.isLoading}
        handleGetMovies={handleGetMovies}
        isShorts={isShorts}
        setIsShorts={setIsShorts}
        isInfoNotifyOpen={props.isInfoNotifyOpen}
        isMassage={props.isMassage}
        closeMessage={props.closeMessage}
      />
      {isBuild ? (
        <>
          <MovieCardList
            isSavedMovies={props.isSavedMovies}
            deleteMovies={handleDeleteMovie}
            movieList={isShorts?searchMoviesDuration(isContentOfSavedMovies): isContentOfSavedMovies}
            placeWithSavedData={true}
          />
        </>
      ) : (
        <><h2 className="saved-container__error">{isErrorMessage}</h2>
        </>
      )}
      <MovieCardList />
    </main>
  );
}
