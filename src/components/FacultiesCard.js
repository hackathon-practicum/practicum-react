export default function FacultiesCard(props) {
    return (
        <div className="faculties__card">
            <img className="faculties__card-image" alt="#" />
            <h3 className="section__subtitle faculties__subtitle__subtitle">{props.subtitle}</h3>
        </div>
    )
}