import { useForm } from "../hook/FormValidation";
import "./Profile.css";
import { useState } from "react";

export function Profile(props) {
  const { values, errors, isValid, handleChange, resetForm } = useForm({});
  const [isEditProfile, setIsEditProfile] = useState(false);

  function handleEditProfile() {
    setIsEditProfile(!isEditProfile);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile();
    resetForm();
  };

  return (
    <section className="profile">
      <h2 className="profile__header">Привет, {props.name}!</h2>
      <form name="profile__form" className="profile__form form">
        <label className="profile__input-container">
          <span className="profile__input-relevance">Имя</span>
          <input
            className={
              errors.name
                ? "profile__input profile__input-error"
                : "profile__input"
            }
            value={values.name || ""}
            onChange={handleChange}
            disabled={!isEditProfile}
            name="name"
            id="name"
            type="text"
            placeholder={props.name}
            minLength={2}
            maxLength={30}
            required
          />
          <span
            className={
              errors.name
                ? "profile__error profile__error-visible"
                : "profile__error"
            }
          >
            {errors.name}
          </span>
        </label>
        <label className="profile__input-container">
          <span className="profile__input-relevance">Email</span>
          <input
            className={
              errors.email
                ? "profile__input profile__input-error"
                : "profile__input"
            }
            value={values.email || ""}
            onChange={handleChange}
            disabled={!isEditProfile}
            name="email"
            id="email"
            type="text"
            placeholder={props.email}
            minLength={2}
            maxLength={30}
            required
          />
          <span
            className={
              errors.email
                ? "profile__error profile__error-visible"
                : "profile__error"
            }
          >
            {errors.email}
          </span>
        </label>
        <div className="profile__edit">
          {isEditProfile ? (
            <button
              className={
                isValid
                  ? "profile__edit_update"
                  : "profile__edit_update  profile__edit_disable"
              }
              disabled={!isValid}
              form="profile__form"
              onClick={handleSubmit}
              type="submit"
            >
              Сохранить
            </button>
          ) : (
            <button
              className="profile__edit-button"
              onClick={handleEditProfile}
              type="button"
            >
              Редактировать
            </button>
          )}
          <button
            className="profile__exit-button"
            type="button"
            onClick={props.handleLogout}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}
