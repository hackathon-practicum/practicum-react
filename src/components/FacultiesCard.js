export default function FacultiesCard(props) {
    return (
        <div className="faculties__card">
            <h3 className="faculties__subtitle">{props.subtitle}</h3>
            <img className="faculties__card-image" src={props.image} alt="#" />
        </div>
    )
}