import "./MoviesCard.css";
import { MoviesCardButton } from "./MoviesCardButton/MoviesCardButton";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BEATFILM_URL } from "../../../constants/constants";

export function MoviesCard(props) {
  const { pathname } = useLocation();
  const [isLikeCard, setIsLikeCard] = useState(false);
  const dataMovies = {
    country: props.card.country,director: props.card.director,duration: props.card.duration,year: props.card.year,
    description: props.card.description,image: props.card.image,trailerLink: props.card.trailerLink,
    thumbnail: props.card.thumbnail,movieId: props.card.id,nameRU: props.card.nameRU,nameEN: props.card.nameEN,
  };

  function duration(duration) {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    const result = [];
    if (hours) result.push(`${hours}ч`);
    if (minutes) result.push(`${minutes}м`);
    return result.join("");
  }

  useEffect(() => {
    if (props.isSavedMovies.some((data) => data.movieId === props.card.id)) {
      setIsLikeCard(true);
    }
  }, [props.isSavedMovies, props.card.id]);


  const deleteMovieHandle = () => {
    props.deleteMovies(props.card.id || props.card._id, setIsLikeCard);
    // console.log("Фильм удален");
  };

  const saveMovieHandle = () => {
    props.saveMovies(dataMovies, setIsLikeCard);
    // setIsLikeCard(!isLikeCard);
    console.log("Фильм сохранен");
  };

  // function handleLikeCard() {
  //   if(!props.isPreloader) {
  //     if(isLikeCard) {
  //       let id
  //       props.
  //     }
  //   }
  // }



  return (
    <li className="movies__card">
      <div className="movies__info">
        <h2 className="movies__name">{props.card.nameRU}</h2>
        <p className="movies__duration">{duration(props.card.duration)}</p>
      </div>
      <a className="movies__link" href={props.card.trailerLink} target="blank">
        <img
          className="movies__image"
          src={
            // `${BEATFILM_URL}${props.card.image.url}`
            props.placeWithSavedData
              ? `${props.card.image}`
              : `${BEATFILM_URL}${props.card.image.url}`
          }
          alt={props.card.nameRU}
        />
      </a>
      <MoviesCardButton
        onClickHandler={
          // pathname === "/movies" ? saveMovieHandle : deleteMovieHandle

          props.placeWithSavedData
            ? deleteMovieHandle
            : isLikeCard
            ? deleteMovieHandle
            : saveMovieHandle
        }
        typeClass={
          pathname === "/movies"
            ? isLikeCard
              ? "movies__card-button_like"
              : ""
            : "movies__card-button_delete"
        }
        // typeClass={isLikeCard ? 'movies__card-button_like' : null}
      >
        {pathname === "/movies" && !isLikeCard ? "Сохранить" : null}
        {pathname === "/movies" && isLikeCard ? "✔" : null}
        {pathname === "/movies" ? null : "🞪"}
      </MoviesCardButton>
    </li>
  );
}
