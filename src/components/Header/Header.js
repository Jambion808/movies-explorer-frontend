import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import React from "react";
import HeaderLogo from "../../images/main-logo-2.svg";
import HeaderLogoAuth from "../../images/main-logo-3.svg";
import LogoAccount from "../../images/account-icon.svg";
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
          <div className="header__container">
            <NavLink className="header__button" to="/sign-up">
              Регистрация
            </NavLink>
            <NavLink
              className="header__button header__button-green"
              to="/sign-in"
            >
              Войти
            </NavLink>
          </div>
        </header>
      ) : (
        <header className={pathname === "/" ? "header header-main" : "header"}>
          <NavLink to="/" className="header__logo">
            <img src={HeaderLogoAuth} alt="Лого" /> 
          </NavLink>
          <div className="header__container-auth">
            <NavLink
              className={
                pathname === "/"
                  ? "header__button_auth_white"
                  : "header__button_auth_white header__button_auth"
              }
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className={
                pathname === "/"
                ? "header__button_auth_white "
                : "header__button_auth_white header__button_auth"
              }
              to="/saved-movies"
            >
              Сохраненный фильмы
            </NavLink>
            <div className="header__account">
              <NavLink
                to="/profile"
                className={
                  pathname === "/"
                    ? "header__account_button-white"
                    : "header__account_button-white header__account_button"
                }
              >
                Аккаунт
              </NavLink>
              <div className="header__account_box">
                <img src={LogoAccount} alt="Логотип"></img>
              </div>
            </div>
            <div className="header__menu">
              <button
                className={
                  pathname === "/"
                    ? "header__menu-button header__menu-button_invert"
                    : "header__menu-button "
                }
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
