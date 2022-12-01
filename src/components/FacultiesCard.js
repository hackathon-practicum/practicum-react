import ReactCardFlip from 'react-card-flip';
import {useState} from "react";
import arrowBack from "../images/arrow_back_faculties.svg";
import closeIcon from "../images/close_faculties.svg";

export default function FacultiesCard(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div onClick={() => setIsFlipped(true)} className="faculties__card">
                <h3 className="faculties__subtitle">{props.subtitle}</h3>
                <img className="faculties__card-image" src={props.image} alt="#" />
                <img className="faculties__arrow" src={arrowBack} alt="стрелка назад" />
            </div>
            <div onClick={() => setIsFlipped(false)} className="faculties__card faculties__card_type_back">
                <img className="faculties__close" src={closeIcon} alt="иконка закрыть" />
                <p className="section__text">{props.text}</p>
                <p className="section__text">{props.subtext}</p>
                <button className="button-cta faculties__button">Стать экспертом</button>
            </div>
        </ReactCardFlip>
    )
}