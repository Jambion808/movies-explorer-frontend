import './SavedMovies.css';
import { savedMovieList } from "../../constants/savedMoviesList";
import { MovieCardList } from "../Movies/MoviesCardList/MoviesCardList";
import { SearchForm }   from "../Movies/SearchForm/SearchForm";

export function SavedMovies() {
    return (
        <section className='saved__container'>
            <SearchForm/>
            <MovieCardList movieList={savedMovieList} />
        </section>
    )
}