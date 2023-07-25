import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__text-container">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__data-container">
        <p className="footer__author">&copy;&nbsp;Костя Зеленин</p>

        <div className="footer__links">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru/"
            title="Ссылка на Практикум"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/Jambion808"
            title="Github"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
