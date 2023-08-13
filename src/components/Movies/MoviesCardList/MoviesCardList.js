import { MoviesCard } from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export function MovieCardList(props) {

  
  return (
    <section className="movies">
      <ul className="movies__list">
        {props.movieList &&
          props.movieList.map((card) => (
            <MoviesCard
              isSavedMovies={props.isSavedMovies}
              placeWithSavedData={props.placeWithSavedData}
              saveMovies={props.saveMovies}
              deleteMovies={props.deleteMovies}
              key={card.id || card._id}
              card={card}
            />
          ))}
      </ul>
    </section>
  );
}
