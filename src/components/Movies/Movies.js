import './Movies.css';
import { movieList } from "../../constants/movieList";
import { MovieCardList } from "./MoviesCardList/MoviesCardList";
import { SearchForm } from "./SearchForm/SearchForm";

export function Movies() {
    return (
        <section className='movies__container'>
            <SearchForm/>
            <MovieCardList movieList={movieList} />
            <button type='button' className='movies__more'>Еще</button>
        </section>
    )
}