import { NavLink } from "react-router-dom"
import { cardDataFAQ } from "../utils/constants"
import Accordion from "./Accordion"

export default function Faq() {

  return (
    <section className="section section-faq">
      <h2 className="section__title">Если остались вопросы</h2>
      <div className="section-faq__content">
        {cardDataFAQ.map((item,i) => (
          <Accordion key={i} title={item.question} content={item.answer} nameClass={'section-faq'}/>
        ))}
      </div>
      <NavLink to="#" className="button-cta button-cta_faq">Хочу расти профессионально</NavLink>
    </section>
  )
}
