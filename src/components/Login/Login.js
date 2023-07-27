import { useForm } from "../hook/FormValidation";
import "./Login.css";
import { NavLink } from "react-router-dom";
import logoReg from "../../images/main-logo-1.svg";

export function Login(props) {
  const { values, errors, isValid, handleChange, resetForm } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogin();
    resetForm();
  }

  return (
    <main className="login">
      <NavLink className="login__logo-box" to='/'>
      <img className="login__logo" src={logoReg} alt="Логотип" />
      </NavLink>
      <h1 className="login__header">Рады видеть!</h1>
      <form name="login__form" className="login__form form">
        <label className="login__input-container">
          <span className="login__input-relevance">E-mail</span>
          <input
            className={
              errors.email
                ? "login__input login__input-error"
                : "login__input"
            }
            value={values.email || ""}
            onChange={handleChange}
            name="email"
            id="email"
            type="email"
            placeholder="E-mail"
            minLength={2}
            maxLength={30}
            autoComplete="off"
            required
          />
          <span
            className={
              errors.email
                ? "login__error login__error-visible"
                : "login__error"
            }
          >
            {errors.email}
          </span>
        </label>
        <label className="login__input-container">
          <span className="login__input-relevance">Пароль</span>
          <input
            className={
              errors.password
                ? "login__input login__input-error"
                : "login__input"
            }
            value={values.password || ""}
            onChange={handleChange}
            name="password"
            id="password"
            type="password"
            placeholder="Пароль"
            minLength={8}
            maxLength={30}
            autoComplete="off"
            required
          />
          <span
            className={
              errors.password
                ? "login__error login__error-visible"
                : "login__error"
            }
          >
            {errors.password}
          </span>
        </label>
      </form>
      <button
        disabled={!isValid}
        className={
          isValid
            ? "login__button"
            : "login__button  login__error-unvisible"
        }
        onClick={handleSubmit}
        type="submit"
      >
        Войти
      </button>
        <div className="login__signup">
            <p className="login__signup-quest">Ещё не зарегистрированы?</p>
            <NavLink className='login__signup-link' to='/sign-up'>Регистрация</NavLink>
        </div>
    </main>
  );
}