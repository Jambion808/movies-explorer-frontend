import "./MoviesCardButton.css";

export function MoviesCardButton({children, onClickHandler, typeClass }) {
  return (
    <button
      className={`movies__card-button ${typeClass}`}
      type="button"
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
