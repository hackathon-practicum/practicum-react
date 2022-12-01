import { NavLink } from "react-router-dom";
import {cardDataReviewer, cardDataMentor, MENTOR, REVIEWER} from "../utils/constants";
import arrowRight from "../images/arrowRight.png";
import React from "react";

export default function Vacancies() {
  const [category, setCategory] = React.useState(MENTOR);
  function handleToggleCategory() {
    setCategory(category === MENTOR ? REVIEWER : MENTOR);
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

  return (
    <section className="section vacancies">
      <h2 className="section__title vacancies__title">Открытые предложения</h2>
      <div className="vacancies__toggle">
        <NavLink to="#" className="vacancies__link">
          Для наставников
        </NavLink>
        <label className="vacancies__switch">
          <input onChange={handleToggleCategory} type="checkbox" className="vacancies__checkbox" />
          <span className="vacancies__slider" />
        </label>
        <NavLink to="#" className="vacancies__link">
          Для ревьюверов
        </NavLink>
      </div>
      <nav className="vacancies__nav">
        <ul className="vacancies__list">
          <li>
            <NavLink
              to="#"
              className="vacancies__navlink vacancies__navlink_active">
              Программирование
              <sup className="vacancies__counter vacancies__counter_active">
              0
            </sup>
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="vacancies__navlink">
              Аналитика
              <sup className="vacancies__counter">0</sup>
            </NavLink>

          </li>
          <li>
            <NavLink to="#" className="vacancies__navlink">
              Дизайн
              <sup className="vacancies__counter">0</sup>
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="vacancies__navlink">
              Маркетинг
              <sup className="vacancies__counter">0</sup>
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="vacancies__navlink">
              Менеджмент
              <sup className="vacancies__counter">0</sup>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="vacancies__cards">
        {
          category === REVIEWER
            ? createCardsVacancies(cardDataReviewer)
            : createCardsVacancies(cardDataMentor)
        }
      </div>
      <div className="contacts__wrapper vacancies__form">
        <div className="contacts__info">
          <h2 className="contacts__title">Не нашли для себя подходящего предложения?</h2>
        </div>
        <div className="contacts__animation">
          <img
            src={arrowRight}
            alt="Стрелка направление"
            className="contacts__arrow"
          />
          <img
            src={arrowRight}
            alt="Стрелка направление"
            className="contacts__arrow"
          />
          <img
            src={arrowRight}
            alt="Стрелка направление"
            className="contacts__arrow"
          />
          <img
            src={arrowRight}
            alt="Стрелка направление"
            className="contacts__arrow"
          />
          <img
            src={arrowRight}
            alt="Стрелка направление"
            className="contacts__arrow"
          />
        </div>
        <NavLink to="#" className="button-cta vacancies__button-cta">Рассказать о себе</NavLink>
      </div>
    </section>
  );
}
