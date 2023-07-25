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
      <img
        className="movies__image"
        src={props.card.image}
        alt={props.card.nameRU}
      />
      <div className="movies__info">
        <h2 className="movies__name">{props.card.nameRU}</h2>
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
        ></MoviesCardButton>
      </div>
      <p className="movies__duration">{props.card.duration} минут</p>
    </li>
  );
}
