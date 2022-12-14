export default function DescriptionCard(props) {
    return (
        <div className="description__card">
            <img className="description__card-image" src={props.image} alt="#" />
            <h3 className="section__subtitle description__subtitle">{props.subtitle}</h3>
            <p className="section__text description__text">{props.text}</p>
        </div>
    )
}