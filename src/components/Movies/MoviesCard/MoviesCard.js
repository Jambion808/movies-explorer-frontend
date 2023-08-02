import "./MoviesCard.css";
import { MoviesCardButton } from "./MoviesCardButton/MoviesCardButton";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export function MoviesCard(props) {
  const { pathname } = useLocation();
  const [isLikeCard, setIsLikeCard] = useState(false);

  const saveMovieHandle = () => {
    setIsLikeCard(!isLikeCard);
    console.log("Фильм сохранен");
  };

  const deleteMovieHandle = () => {
    console.log("Фильм удален");
  };
  return (
    <li className="movies__card">
      <div className="movies__info">
        <h2 className="movies__name">{props.card.nameRU}</h2>
        <p className="movies__duration">{props.card.duration} минут</p>
      </div>
      <img
        className="movies__image"
        src={props.card.image}
        alt={props.card.nameRU}
      />
      <MoviesCardButton
          onClickHandler={
            pathname === "/movies" ? saveMovieHandle : deleteMovieHandle
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
          {pathname === '/movies' && !isLikeCard ? "Сохранить" : null}
          {pathname === '/movies' && isLikeCard ? "✔" : null}
          {pathname === '/movies' ? null : "🞪"}
        </MoviesCardButton>
      
    </li>
  );
}
