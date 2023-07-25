import { MoviesCard } from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

export function MovieCardList(props) {
    return (
        <section className="movies">
            <ul className="movies__list">
                {props.movieList.map((card) => (
                    <MoviesCard card={card} key={card._id}/>
                ))}
            </ul>
        </section>
    )
}