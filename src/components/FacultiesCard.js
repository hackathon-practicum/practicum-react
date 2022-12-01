import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export default function FacultiesCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={() => setIsFlipped(true)} className="faculties__card">
        <h3 className="faculties__subtitle">{props.subtitle}</h3>
        <img className="faculties__card-image" src={props.image} alt="#" />
      </div>
      <div
        onClick={() => setIsFlipped(false)}
        className="faculties__card faculties__card_type_back">
        <p className="section__text">{props.text}</p>
        <p className="section__text">{props.subtext}</p>
        <a href="/#vacancy" className="button-cta faculties__button">
          Стать экспертом
        </a>
      </div>
    </ReactCardFlip>
  );
}
