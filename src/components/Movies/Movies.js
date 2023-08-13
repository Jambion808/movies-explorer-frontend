import "./Movies.css";
// import { movieList } from "../../constants/movieList";
import { MovieCardList } from "./MoviesCardList/MoviesCardList";
import { SearchForm } from "./SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import * as MoviesApi from "../../utils/MoviesApi";
import * as MainApi from "../../utils/MainApi";
import { useWidthBrowser } from "../hook/WidthDisplay";
import { searchMoviesName, searchMoviesDuration } from "../../utils/findByName";
import {
  tabletWidth,
  mobileWidth,
  desktopCards,
  tabletCards,
  mobileCards,
  addMaxCards,
  addMinCards,
  // BEATFILM_URL,
} from "../../constants/constants";

// function savedMovies

export function Movies(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isShorts, setIsShorts] = useState(false);
  const [isShownMovies, setIsShownMovies] = useState([]);
  const [isBuildMovie, setIsBuildMovie] = useState(false);
  let entireFilmList = localStorage.getItem("entirefilmlist");
  const allDataList = localStorage.getItem("alldatalist");
  let filtrateMovies = JSON.parse(allDataList)?.filtrateMovies || [];
  let shortsFiltrateMovies = JSON.parse(allDataList)?.shortsFiltrateMovies || [];
  const [isLastFilms, setIsLastFilms] = useState("");
  const [isQuantityFilms, setIsQuantityFilms] = useState(0); 
  const [isBasicMovies, setIsBasicMovies] = useState(0);
  const [isExtraMovies, setIsExtraMovies] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const widthBrowser = useWidthBrowser();
  const moviesCount = isBasicMovies + isExtraMovies * isQuantityFilms;

 
  useEffect(() => {
    if (allDataList) {
      setIsLastFilms(JSON.parse(allDataList)?.film);
      setIsShorts(JSON.parse(allDataList)?.isShorts);
    }
  }, []);

  useEffect(() => {
    if (!errorMessage) {
      setIsBuildMovie(true);
      isShorts
        ? setIsShownMovies(shortsFiltrateMovies.slice(0, moviesCount))
        : setIsShownMovies(filtrateMovies.slice(0, moviesCount));
    }
  }, [isShorts, moviesCount, errorMessage]);

  useEffect(() => {
    if (allDataList) {
      const upgradeAllData = JSON.parse(allDataList);
      upgradeAllData.isShorts = isShorts;
      localStorage.setItem("alldatalist", JSON.stringify(upgradeAllData));
    }
  }, [isShorts, allDataList]);



    // function handleGetMovies() {
    //   setIsLoading(true)
    //   return MoviesApi.getMovies()
    //   .then((res) => {
    //     localStorage.setItem("allMovies", JSON.stringify(res));
    //     allMovies = localStorage.getItem("allMovies");
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => setIsLoading(false))
    // }

  async function handleGetMovies(film, isShorts) {
    if (film === " " || !film) {
      props.setIsInfoNotifyOpen(true);
      props.setIsMassage("Введите параметры поиска");
    } else {
      try {
        setIsLoading(true);
        setIsQuantityFilms(0);
        if (!entireFilmList) {
          const allFilmsFinding = await MoviesApi.getMovies();
          localStorage.setItem("entirefilmlist", JSON.stringify(allFilmsFinding));
          entireFilmList = localStorage.getItem("entirefilmlist");
        }
        const allDataList = {
          filtrateMovies,
          shortsFiltrateMovies,
          film,
          isShorts,
        };
        filtrateMovies = searchMoviesName(JSON.parse(entireFilmList), film);
        shortsFiltrateMovies = searchMoviesDuration(filtrateMovies);

        localStorage.setItem("alldatalist", JSON.stringify(allDataList));

        if (isShorts) {
          setIsShownMovies(shortsFiltrateMovies.slice(0, isBasicMovies));
          setIsBuildMovie(true);
          if (shortsFiltrateMovies.length < 1) {
            setIsBuildMovie(false);
            setErrorMessage("Ничего не найдено");
          }
        } else {
          setIsShownMovies(filtrateMovies.slice(0, isBasicMovies));
          setIsBuildMovie(true);
          if (filtrateMovies.length < 1) {
            setIsBuildMovie(false);
            setErrorMessage("Ничего не найдено");
          }
        }
        setIsLoading(false);
      } catch (err) {
        setIsShownMovies([]);
        setIsBuildMovie(false);
        setErrorMessage(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
        setIsLoading(false);
      }
    }
  }



  function saveMovies(data, protectBinder) {
    MainApi.savedMovies(data)
      .then((res) => {
        props.setIsSavedMovies([...props.isSavedMovies, res]);
        protectBinder(true);
      })
      .catch((err) => console.log(err));
  }

  // function saveMovies(data) {
  //   return MainApi.savedMovies(data)
  //     .then((res) => {
  //       props.setIsSavedMovies(res);
  //     })
  //     .catch((err) => console.log(err));
  // }



  useEffect(() => {
    window.addEventListener("beforeunload", deleteFilmsStorage);
    return () => {
      window.removeEventListener("beforeunload", deleteFilmsStorage);
    };
  }, []);

  
  useEffect(() => {
    if (widthBrowser >= tabletWidth) {
      setIsBasicMovies(desktopCards);
      setIsExtraMovies(addMaxCards);
    } else if (widthBrowser > mobileWidth && widthBrowser < tabletWidth) {
      setIsBasicMovies(tabletCards);
      setIsExtraMovies(addMinCards);
    } else if (widthBrowser <= mobileWidth) {
      setIsBasicMovies(mobileCards);
      setIsExtraMovies(addMinCards);
    }
  }, [widthBrowser]);

  function deleteFilmsStorage() {
    localStorage.removeItem("entirefilmlist");
  }

  function handleDeleteMovies(movieId, protectBinder) {
    const currentMovie = props.isSavedMovies.find(
      (data) => data.movieId === movieId
    );
    MainApi.deleteMovies(currentMovie._id)
      .then(() => {
        protectBinder(false);
        props.setIsSavedMovies((state) =>
          state.filter((movie) => movie._id !== currentMovie._id)
        );
      })
      .catch((err) => console.log(err));
  }

  function moreContent() {
    setIsQuantityFilms((count) => count + 1);
  }

  return (
    <main className="movies-container">
      <SearchForm
        isLoading={isLoading}
        isShorts={isShorts}
        setIsShorts={setIsShorts}
        isLastFilms={isLastFilms}
        handleGetMovies={handleGetMovies}
        isInfoNotifyOpen={props.isInfoNotifyOpen}
        isMassage={props.isMassage}
        closeMessage={props.closeMessage}
      />
      {isLoading ? (
        <Preloader />
      ) : isBuildMovie ? (
        <>
          <MovieCardList
          isSavedMovies={props.isSavedMovies}
            deleteMovies={handleDeleteMovies}
            saveMovies={saveMovies}
            movieList={isShownMovies}
            // handleSaveMovies={props.handleSaveMovies}
            placeWithSavedData={false}
          />
          <button
            type="button"
            className={`movies-container__more ${
              isShorts
                ? moviesCount >= shortsFiltrateMovies.length &&
                  "movies-container__unvisible"
                : moviesCount >= filtrateMovies.length &&
                  "movies-container__unvisible"
            }`}
            onClick={moreContent}
            
          >
            Еще
          </button>
        </>
      ) : (
        <>
        <h2 className="movies-conteiner__error">{errorMessage}</h2>
        </>
      )}
    </main>
  );
}
