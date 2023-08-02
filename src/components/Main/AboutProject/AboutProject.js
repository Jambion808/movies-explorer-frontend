import React from "react";
import "./AboutProject.css";

export function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__conteiner">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__content">
          <div className="about-project__info">
            <h3 className="about-project__info-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__info-about">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__info">
            <h3 className="about-project__info-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__info-about">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__timing">
          <p className="about-project__graph about-project__graph_green">
            1 неделя
          </p>
          <p className="about-project__graph about-project__graph_gray">
            4 недели
          </p>
          <p className="about-project__graph about-project__graph_title-first">
            Back-end
          </p>
          <p className="about-project__graph about-project__graph_title-other">
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
}
