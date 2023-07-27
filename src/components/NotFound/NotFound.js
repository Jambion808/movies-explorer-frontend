import { NavLink } from "react-router-dom";
import './NotFound.css';

export function NotFound(){
    return (
        <main className="notFound">
            <h1 className="notFound__title">404</h1>
            <p className="notFound__subtitle">Страница не найдена</p>
            <NavLink className='notFound__link' to='/'>Назад</NavLink>
        </main>
    )
}