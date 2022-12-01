export default function CommentsCard(props) {
    return (
        <div className={`comments__card ${props.class}`}>
            <iframe width="310" height="520" src="https://www.youtube.com/embed/lPmzEc8KTnE"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            {/*<iframe className="comments__iframe" src="https://disk.yandex.ru/d/RjWHz9q4V9TSQw/Кропнутое.mov"></iframe>*/}
            {/*<img className="comments__card-image" src={props.image} alt="#" />*/}
            <h3 className="section__subtitle comments__title">{props.title}</h3>
            <p className="section__subtitle comments__subtitle">{props.subtitle}</p>
            <p className="section__text comments__text">{props.text}</p>
        </div>
    )
}