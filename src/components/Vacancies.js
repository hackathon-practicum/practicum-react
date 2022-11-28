import { NavLink } from "react-router-dom";
import { cardDataReviewer } from "../utils/constants";

export default function Vacancies() {
  function createCardsVacancies(data) {
    return data.map((item) => (
      <NavLink to={item.url} className="card-vacancies">
        <h2 className="card-vacancies__title">{item.title}</h2>
        <p className="card-vacancies__job">{item.job}</p>
        <p className="card-vacancies__salary">{item.salary}</p>
      </NavLink>
    ));
  }

  return (
    <section className="section vacancies">
      <h2 className="section__title">Открытые предложения</h2>
      <div className="vacancies__toggle">
        <NavLink to="#" className="vacancies__link vacancies__link_active">
          Для наставников
        </NavLink>
        <label className="vacancies__switch">
          <input type="checkbox" className="vacancies__checkbox" />
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
            </NavLink>
            <sup className="vacancies__counter vacancies__counter_active">
              0
            </sup>
          </li>
          <li>
            <NavLink to="#" className="vacancies__navlink">
              Аналитика
            </NavLink>
            <sup className="vacancies__counter">0</sup>
          </li>
          <li>
            <NavLink to="#" className="vacancies__navlink">
              Дизайн
            </NavLink>
            <sup className="vacancies__counter">0</sup>
          </li>
          <li>
            <NavLink to="#" className="vacancies__navlink">
              Маркетинг
            </NavLink>
            <sup className="vacancies__counter">0</sup>
          </li>
          <li>
            <NavLink to="#" className="vacancies__navlink">
              Менеджмент
            </NavLink>
            <sup className="vacancies__counter">0</sup>
          </li>
        </ul>
      </nav>
      <div className="vacancies__cards">
        {createCardsVacancies(cardDataReviewer)}
      </div>
    </section>
  );
}
