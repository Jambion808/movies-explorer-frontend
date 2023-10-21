import { NavLink, useNavigate } from "react-router-dom";
import './NotFound.css';


export function NotFound(){
    const navigate = useNavigate();
    return (
        <main className="notFound">
            <h1 className="notFound__title">404</h1>
            <p className="notFound__subtitle">Страница не найдена</p>
            <NavLink className='notFound__link' onClick={() => navigate(-1)}>Назад</NavLink>
        </main>
    )
}