import { useForm } from "../hook/FormValidation";
import "./Register.css";
import { NavLink } from "react-router-dom";
import logoReg from "../../images/main-logo-1.svg";

export function Register(props) {
  const { values, errors, isValid, handleChange, resetForm } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleRegistration();
    resetForm();
  };

  return (
    <section className="register">
      <NavLink className="register__logo-box" to='/'>
      <img className="register__logo" src={logoReg} alt="Логотип" />
      </NavLink>
      <h2 className="register__header">Добро пожаловать!</h2>
      <form name="register__form" className="register__form form">
        <label className="register__input-container">
          <span className="register__input-relevance">Имя</span>
          <input
            className={
              errors.name
                ? "register__input register__input-error"
                : "register__input"
            }
            value={values.name || ""}
            onChange={handleChange}
            name="name"
            id="name"
            type="text"
            placeholder="Имя"
            minLength={2}
            maxLength={30}
            required
          />
          <span
            className={
              errors.name
                ? "register__error register__error-visible"
                : "register__error"
            }
          >
            {errors.name}
          </span>
        </label>
        <label className="register__input-container">
          <span className="register__input-relevance">E-mail</span>
          <input
            className={
              errors.email
                ? "register__input register__input-error"
                : "register__input"
            }
            value={values.email || ""}
            onChange={handleChange}
            name="email"
            id="email"
            type="email"
            placeholder="E-mail"
            minLength={2}
            maxLength={30}
            required
          />
          <span
            className={
              errors.email
                ? "register__error register__error-visible"
                : "register__error"
            }
          >
            {errors.email}
          </span>
        </label>
        <label className="register__input-container">
          <span className="register__input-relevance">Пароль</span>
          <input
            className={
              errors.password
                ? "register__input register__input-error"
                : "register__input"
            }
            value={values.password || ""}
            onChange={handleChange}
            name="password"
            id="password"
            type="password"
            placeholder="Пароль"
            minLength={8}
            maxLength={30}
            required
          />
          <span
            className={
              errors.password
                ? "register__error register__error-visible"
                : "register__error"
            }
          >
            {/* {errors.password} */}
            Что то пошло не так...
          </span>
        </label>
      </form>
      <button
        disabled={!isValid}
        className={
          isValid
            ? "register__button"
            : "register__button  register__error-unvisible"
        }
        onClick={handleSubmit}
        type="submit"
      >
        Зарегистрироваться
      </button>
      <div className="register__signin">
        <p className="register__signin-quest">Уже зарегистрированы?</p>
        <NavLink className="register__signin-link" to="/sign-in">
          Войти
        </NavLink>
      </div>
    </section>
  );
}
