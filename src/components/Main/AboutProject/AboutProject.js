import React from "react";
import "./AboutProject.css";

export function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__conteiner">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project_content">
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
          <p className="about-project__timing-graph about-project__graph_back-time">
            1 неделя
          </p>
          <p className="about-project__timing-graph about-project__graph_front-time">
            4 недели
          </p>
          <p className="about-project__timing-graph about-project__graph_back">
            Back-end
          </p>
          <p className="about-project__timing-graph about-project__graph_front">
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
}
