export default function CommentsCard(props) {
    return (
        <div className="comments__card">
            <img className="comments__card-image" alt="#" />
            <h3 className="section__subtitle comments__title">{props.title}</h3>
            <p className="section__subtitle comments__subtitle">{props.subtitle}</p>
            <p className="section__text comments__text">{props.text}</p>
        </div>
    )
}