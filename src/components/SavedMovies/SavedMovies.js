import './SavedMovies.css';
import { savedMovieList } from "../../constants/savedMoviesList";
import { MovieCardList } from "../Movies/MoviesCardList/MoviesCardList";
import { SearchForm }   from "../Movies/SearchForm/SearchForm";

export function SavedMovies() {
    return (
        <main className='saved-container'>
            <SearchForm/>
            <MovieCardList movieList={savedMovieList} />
        </main>
    )
}