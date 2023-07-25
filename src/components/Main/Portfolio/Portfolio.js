import React from "react";
import "./Portfolio.css";
import arrow from "../../../images/arrow.svg";

export function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a
        className="portfolio__link"
        href="https://github.com/Jambion808"
        title="Ссылка"
        target="blank"
      >
        <p className="portfolio__link-text">Статичный сайт</p>
        <img className="portfolio__link-arrow" src={arrow} alt="Стрелка" />
      </a>
      <a
        className="portfolio__link"
        href="https://github.com/Jambion808"
        title="Ссылка"
        target="blank"
      >
        <p className="portfolio__link-text">Адаптивный сайт</p>
        <img className="portfolio__link-arrow" src={arrow} alt="Стрелка" />
      </a>
      <a
        className="portfolio__link"
        href="https://github.com/Jambion808"
        title="Ссылка"
        target="blank"
      >
        <p className="portfolio__link-text">Одностраничное приложение</p>
        <img className="portfolio__link-arrow" src={arrow} alt="Стрелка" />
      </a>
    </section>
  );
}
