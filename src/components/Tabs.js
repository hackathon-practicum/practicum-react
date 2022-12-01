import { useState } from "react";
import { NavLink } from "react-router-dom";

function createCardsVacancies(data) {
  return data.map((item, i) => (
      <NavLink to="/vacancy" className="card-vacancies" key={i}>
        <h2 className="card-vacancies__title">{item.title}</h2>
        <p className="card-vacancies__job">{item.job}</p>
        <p className="card-vacancies__salary">{item.salary}</p>
      </NavLink>
  ));
}

export default function Tabs({ items }) {
  const [ active, setActive ] = useState(0);

  const openTab = e => {
    setActive(+e.currentTarget.dataset.index)
  };
  return (
    <>
    <div className="vacancies__nav">
      <div className="vacancies__list">
        {items.map((tab, i) => (
          <button
            className={`vacancies__navlink ${i === active ? 'vacancies__navlink_active' : ''}`}
            onClick={openTab}
            data-index={i}
            key={i}
          >
            <h2
            className = {i === active ? "vacancies__navlink_title vacancies__navlink_title_active" :"vacancies__navlink_title" }>
              {tab.title}
            </h2>
            <sup className= {i === active ? "vacancies__counter vacancies__counter_active" : "vacancies__counter"}>
              {tab?.content?.length}
            </sup>
          </button>
        ))}
      </div>
      <div className="vacancies__cards">
      {items[active] && createCardsVacancies(items[active].content)}
      </div>
    </div>

    </>
  );
}
