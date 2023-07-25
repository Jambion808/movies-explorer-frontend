import "./Navigation.css";
import { NavLink } from "react-router-dom";

export function Navigation(props) {
  return (
    <div
      className={`navigation-cover ${
        props.isOpenMenu && "navigation-cover_visual"
      }`}
    >
      <div
        className={`navigation ${
          props.isOpenMenu ? "navigation_visual" : "navigation_hidden"
        }`}
      >
        <nav className="navigation__links">
          <NavLink className="navigation__link" to="/">
            Главная
          </NavLink>
          <NavLink className="navigation__link" to="/movies">
            Фильмы
          </NavLink>
          <NavLink className="navigation__link" to="/saved-movies">
            Сохранённые фильмы
          </NavLink>
        </nav>
        <div className="navigation__profile">
          <NavLink className="navigation__profile-link navigation__link" to="/profile">
            Аккаунт
          </NavLink>
        </div>
        <button
          className="navigation__close"
          type="button"
          onClick={props.handleOpenMenu}
        ></button>
      </div>
    </div>
  );
}
