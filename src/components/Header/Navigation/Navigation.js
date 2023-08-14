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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link_active"
                : "navigation__link"
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link_active"
                : "navigation__link"
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link_active"
                : "navigation__link"
            }
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <div className="navigation__profile">
          <NavLink
            className="navigation__profile-link navigation__link"
            to="/profile"
          >
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
