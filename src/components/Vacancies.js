import { NavLink } from "react-router-dom";
import {
  cardDataReviewer,
  cardDataMentor,
  cardDataDesign,
  cardDataManager,
  cardDataMarketing,
} from "../utils/constants";
import arrowRight from "../images/arrowRight.png";
import { useState } from "react";
import Tabs from "./Tabs";

export default function Vacancies() {
  const [isMentor, setIsMentor] = useState(true);

  function handleChangeToogleVacancy(e) {
    setIsMentor(!isMentor);
  }

  const items = [
    {
      title: "Программирование",
      content: isMentor ? cardDataMentor : cardDataReviewer,
    },
    {
      title: "Аналитика",
      content: isMentor ? cardDataMentor : cardDataReviewer,
    },
    { title: "Дизайн", content: isMentor ? cardDataDesign : cardDataDesign },
    {
      title: "Маркетинг",
      content: isMentor ? cardDataMarketing : cardDataMarketing,
    },
    {
      title: "Менеджмент",
      content: isMentor ? cardDataManager : cardDataManager,
    },
  ];

  return (
    <section className="section vacancies">
      <div className="vacancies__wrapper">
        <h2 className="section__title vacancies__title">
          Открытые предложения
        </h2>
        <div className="vacancies__toggle">
          <NavLink
            to="#"
            className={
              isMentor
                ? "vacancies__link vacancies__link_active"
                : "vacancies__link"
            }>
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
            }>
            Для ревьюверов
          </NavLink>
        </div>
        <Tabs items={items} />
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
      </div>
    </section>
  );
}
