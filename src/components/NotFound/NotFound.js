import { NavLink } from "react-router-dom";
import './NotFound.css';

export function NotFound(){
    return (
        <section className="notFound">
            <h2 className="notFound__title">404</h2>
            <p className="notFound__subtitle">Страница не найдена</p>
            <NavLink className='notFound__link' to='/'>Назад</NavLink>
        </section>
    )
}