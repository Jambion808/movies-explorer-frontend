import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import React from "react";
import HeaderLogo from "../../images/main-logo-1.svg";
// import HeaderLogoAuth from "../../images/main-logo-3.svg";
// import LogoAccount from "../../images/account-icon.svg";
import { useState } from "react";
import { Navigation } from "./Navigation/Navigation";

export function Header(props) {
  const { pathname } = useLocation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleOpenMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <>
      {!props.loggedIn ? (
        <header className={pathname === "/" ? "header header-main" : "header"}>
          <NavLink to="/" className="header__logo">
            <img src={HeaderLogo} alt="Лого" />
          </NavLink>
          <nav className="header__container">
            <NavLink className="header__button" to="/sign-up">
              Регистрация
            </NavLink>
            <NavLink
              className="header__button header__button-green"
              to="/sign-in"
            >
              Войти
            </NavLink>
          </nav>
        </header>
      ) : (
        <header className={pathname === "/" ? "header header-main" : "header"}>
          <NavLink to="/" className="header__logo">
            <img src={HeaderLogo} alt="Лого" />
          </NavLink>
          <div className="header__navigation">
            <nav className="header__container-auth">
              <NavLink
                // className="header__button-auth"
                to="/movies"
                className={({ isActive }) =>
                  isActive
                    ? "header__button-auth header__button-auth_active"
                    : "header__button-auth"
                }
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  isActive
                    ? "header__button-auth header__button-auth_active"
                    : "header__button-auth"
                }
              >
                Сохраненный фильмы
              </NavLink>
            </nav>
            <div
              className={
                pathname === "/"
                  ? "header__account header__account-main"
                  : "header__account"
              }
            >
              <NavLink to="/profile" className="header__account-button">
                Аккаунт
              </NavLink>
              {/* <div className="header__account_box">
              <img src={LogoAccount} alt="Логотип"></img>
            </div> */}
            </div>{" "}
            {}
            <div className="header__menu">
              <button
                className="header__menu-button"
                onClick={handleOpenMenu}
                type="button"
              />
            </div>
          </div>
          <Navigation isOpenMenu={isOpenMenu} handleOpenMenu={handleOpenMenu} />
        </header>
      )}
    </>
  );
}
