import React from "react";
import "./AboutMe.css";
import myPhoto from "../../../images/photo1652617680.jpeg";

export function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__name">Костя</h3>
          <p className="about-me__info">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__discription">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="about-me__link" href="https://github.com/Jambion808">
            Github
          </a>
        </div>
        <img className="about-me__photo" src={myPhoto} alt="Мое фото" />
      </div>
    </section>
  );
}
