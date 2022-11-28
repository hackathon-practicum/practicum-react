import DescriptionCard from "./DescriptionCard";

export default function Description() {
    return (
        <section className="description section content__section">
            <h2 className="section__title">В роли наставника и ревьюера вы будете</h2>
            <ul className="description__cards-container">
                <DescriptionCard
                    subtitle={'Развивать \n личный бренд'}
                    text={"Вы сможете стать старшим наставником \n или сеньор-ревьювером"}
                />
                <DescriptionCard
                    subtitle={"Общаться с людьми \n из EdTech"}
                    text={"Станете частью сообщества экспертов \n и посмотрите на мир онлайн-\n образования изнутри"}
                />
                <DescriptionCard
                    subtitle={"Иметь доход в среднем от 35 \n до 50 тысяч ₽ в месяц"}
                    text={"Удаленно, 2–3 часа в день, график \n выбираете сами"}
                />
            </ul>
        </section>
    )
}
