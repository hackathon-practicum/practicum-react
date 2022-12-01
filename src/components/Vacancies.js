import { NavLink } from "react-router-dom";
import { cardDataReviewer, cardDataMentor } from "../utils/constants";
import arrowRight from "../images/arrowRight.png";
import { useState } from "react";

export default function Vacancies() {
  const [isMentor, setIsMentor] = useState(true);
  const [isActiveCourse, setIsActiveCourse] = useState("Программирование");
  const [isActive,setIsActive] = useState(false)

  function handleChangeToogleVacancy() {
    setIsMentor(!isMentor);
  }

  function handleChangeCourse(e) {
    if (e.currentTarget.className === "vacancies__navlink") {
      e.currentTarget.className = "vacancies__navlink vacancies__navlink_active"
      setIsActiveCourse(e.currentTarget.children[0].textContent);
    } else {
      e.currentTarget.className = "vacancies__navlink"
    }
  }

  function checkActiveCourse (e) {
    return e.currentTarget.children[0].textContent === isActiveCourse
  }

  function createCardsVacancies(data) {
    return data.map((item, i) => (
      <NavLink to="/vacancy" className="card-vacancies" key={i}>
        <h2 className="card-vacancies__title">{item.title}</h2>
        <p className="card-vacancies__job">{item.job}</p>
        <p className="card-vacancies__salary">{item.salary}</p>
      </NavLink>
    ));
  }

  useState(() => {

  }, [isMentor, isActiveCourse]);

  return (
    <section className="section vacancies">
      <h2 className="section__title vacancies__title">Открытые предложения</h2>
      <div className="vacancies__toggle">
        <NavLink
          to="#"
          className={
            isMentor
              ? "vacancies__link vacancies__link_active"
              : "vacancies__link"
          }
          onClick={handleChangeToogleVacancy}>
          Для наставников
        </NavLink>
        <label className="vacancies__switch">
          <input
            type="checkbox"
            className="vacancies__checkbox"
            onClick={handleChangeToogleVacancy}
          />
          <span className="vacancies__slider" />
        </label>
        <NavLink
          to="#"
          className={
            isMentor
              ? "vacancies__link"
              : "vacancies__link vacancies__link_active"
          }
          onClick={handleChangeToogleVacancy}>
          Для ревьюверов
        </NavLink>
      </div>
      <nav className="vacancies__nav">
        <ul className="vacancies__list">
          <li>
            <button
              className={"vacancies__navlink"}
              onClick={handleChangeCourse}>
              <h2 className="vacancies__navlink_title">Программирование</h2>
              <sup className="vacancies__counter vacancies__counter_active">
                {isMentor ? cardDataMentor.length : cardDataReviewer.length}
              </sup>
            </button>
          </li>
          <li>
            <button className="vacancies__navlink" onClick={handleChangeCourse}>
              <h2 className="vacancies__navlink_title">Аналитика</h2>
              <sup className="vacancies__counter">0</sup>
            </button>
          </li>
          <li>
            <button className="vacancies__navlink" onClick={handleChangeCourse}>
              <h2 className="vacancies__navlink_title">Дизайн</h2>
              <sup className="vacancies__counter">0</sup>
            </button>
          </li>
          <li>
            <button className="vacancies__navlink" onClick={handleChangeCourse}>
              <h2 className="vacancies__navlink_title">Маркетинг</h2>
              <sup className="vacancies__counter">0</sup>
            </button>
          </li>
          <li>
            <button className="vacancies__navlink" onClick={handleChangeCourse}>
              <h2 className="vacancies__navlink_title">Менеджмент</h2>
              <sup className="vacancies__counter">0</sup>
            </button>
          </li>
        </ul>
      </nav>
      <div className="vacancies__cards">
        {createCardsVacancies(isMentor ? cardDataMentor : cardDataReviewer)}
      </div>
      <div className="vacancies__form">
        <div className="contacts__info">
          <h2 className="vacancies__form_title">
            Не нашли для себя подходящего предложения?
          </h2>
        </div>
        <div className="contacts__animation">
          <img
            src={arrowRight}
            alt="Стрелка направление"
            className="vacancies__arrow"
          />
          <img
            src={arrowRight}
            alt="Стрелка направление"
            className="vacancies__arrow"
          />
          <img
            src={arrowRight}
            alt="Стрелка направление"
            className="vacancies__arrow"
          />
          <img
            src={arrowRight}
            alt="Стрелка направление"
            className="vacancies__arrow"
          />
          <img
            src={arrowRight}
            alt="Стрелка направление"
            className="vacancies__arrow"
          />
        </div>
        <NavLink to="#" className="button-cta vacancies__button-cta">
          Рассказать о себе
        </NavLink>
      </div>
    </section>
  );
}
