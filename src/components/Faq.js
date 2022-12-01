import { NavLink } from "react-router-dom"
import { cardDataFAQ } from "../utils/constants"
import Accordion from "./Accordion"

export default function Faq() {

  return (
    <section className="section section-faq" id="faq">
      <h2 className="section__title">Если остались вопросы</h2>
      <div className="section-faq__content">
        {cardDataFAQ.map((item) => (
          <Accordion
            key={item.id}
            title={item.question}
            arrow={item.arrowColor}
            content={item.answer}
            nameClass={'section-faq'}/>
        ))}
      </div>
    </section>
  )
}
