import { useForm } from "../hook/FormValidation";
import "./Profile.css";
import React, { useState, useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { InfoNotify } from "../InfoNotify/infoNotify";

export function Profile(props) {
  const { values, errors, isValid, handleChange } = useForm({});
  const [isEditProfile, setIsEditProfile] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  // console.log('Profile', currentUser)

  function handleEditProfile() {
    setIsEditProfile(!isEditProfile);
    values.name = currentUser.name;
    values.email = currentUser.email;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditProfile(!isEditProfile);
    props.handleSubmitProfile(values.name, values.email);
    // handleEditProfile();
    // resetForm();
  };

  return (
    <main className="profile">
      <h1 className="profile__header">Привет, {currentUser.name}!</h1>
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
            placeholder={currentUser.name}
            minLength={2}
            maxLength={30}
            autoComplete="off"
            required
          />
          <span
            className={
              errors.name
                ? "profile__error profile__error-visible"
                : "profile__error"
            }
          >
            {/* {errors.name} */}
            Неккоректное имя
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
            type="email"
            placeholder={currentUser.email}
            minLength={2}
            maxLength={30}
            autoComplete="off"
            required
          />
          <span
            className={
              errors.email
                ? "profile__error profile__error-visible"
                : "profile__error"
            }
          >
            {/* {errors.email} */}
            Неккоректный email
          </span>
        </label>
      </form>
      <div className="profile__edit">
        <InfoNotify
          isInfoNotifyOpen={props.isInfoNotifyOpen}
          isMassage={props.isMassage}
          closeMessage={props.closeMessage}
        />
        {isEditProfile ? (
          <>
            {/* <span
              className={
                // !isValid ||
                // (values.name === currentUser.name &&
                //   values.email === currentUser.email)
                !isValid 
                // ||
                // (values.name !== currentUser.name &&
                //   values.email !== currentUser.email)
                  ? "profile__buttom-message "
                  : "profile__buttom-message profile__buttom-message_unvisible"
              }
            >
              Введите новые данные.
            </span> */}

            <button
              className={
                !isValid ||
                (values.name === currentUser.name &&
                  values.email === currentUser.email)
                  ? "profile__edit_update profile__edit_disable"
                  : "profile__edit_update  "
              }
              disabled={
                !isValid ||
                (values.name === currentUser.name &&
                  values.email === currentUser.email) ||
                props.isPreloader
              }
              form="profile__form"
              onClick={handleSubmit}
              type="submit"
            >
              Сохранить
            </button>
          </>
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
    </main>
  );
}
