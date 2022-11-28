import { Link } from "react-router-dom";

export default function Vacancies() {
  return (
    <section className="section vacancies">
      <h2 className="section__title">Открытые предложения</h2>
      <div className="vacancies__toggle">
        <Link to="#" className="vacancies__link vacancies__link_active">Для наставников</Link>
        <label className="vacancies__switch">
          <input type="checkbox" className="vacancies__checkbox"/>
          <span className="vacancies__slider" />
        </label>
        <Link to="#" className="vacancies__link">Для ревьюверов</Link>
      </div>
    </section>
  )
}
