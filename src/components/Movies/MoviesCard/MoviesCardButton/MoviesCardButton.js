import "./MoviesCardButton.css";

export function MoviesCardButton({ onClickHandler, typeClass }) {
  return (
    <button
      className={`movies__card-button ${typeClass}`}
      type="button"
      onClick={onClickHandler}
    />
  );
}
