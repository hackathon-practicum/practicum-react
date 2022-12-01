import DescriptionCard from "./DescriptionCard";
// import {FreeMode, Navigation} from "swiper";
// import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";
import descriptionPic from "../images/description_pic.svg";
import descriptionPic2 from "../images/description_pic2.svg";
import descriptionPic3 from "../images/description_pic3.svg";

export default function Description() {
    return (
        <section className="description section content__section">
            <h2 className="section__title">В роли наставника и ревьюера вы будете</h2>
            <ul className="description__cards-container">
                <DescriptionCard
                    image={descriptionPic}
                    subtitle={'Развивать \n личный бренд'}
                    text={"Вы сможете стать старшим наставником \n или сеньор-ревьювером"}
                />
                <DescriptionCard
                    image={descriptionPic2}
                    subtitle={"Иметь доход в среднем от 35 \n до 50 тысяч ₽ в месяц"}
                    text={"Удаленно, 2–3 часа в день, график \n выбираете сами"}
                />
                <DescriptionCard
                    image={descriptionPic3}
                    subtitle={"Общаться с людьми \n из EdTech"}
                    text={"Станете частью сообщества экспертов \n и посмотрите на мир онлайн-\n образования изнутри"}
                />
            </ul>

            {/*<div className="description__cards-container description__cards-container_type_mobile">*/}
            {/*    <Swiper*/}
            {/*        slidesPerView={"auto"}*/}
            {/*        spaceBetween={20}*/}
            {/*        freeMode={true}*/}
            {/*        modules={[FreeMode, Navigation]}*/}
            {/*        navigation={true}*/}
            {/*        loop={false}*/}
            {/*        className="my-swiper"*/}
            {/*    >*/}
            {/*        <SwiperSlide>*/}
            {/*            <DescriptionCard*/}
            {/*                image={descriptionPic}*/}
            {/*                subtitle={'Развивать \n личный бренд'}*/}
            {/*                text={"Вы сможете стать старшим наставником \n или сеньор-ревьювером"}*/}
            {/*            />*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide>*/}
            {/*            <DescriptionCard*/}
            {/*                image={descriptionPic2}*/}
            {/*                subtitle={"Общаться с людьми \n из EdTech"}*/}
            {/*                text={"Станете частью сообщества экспертов \n и посмотрите на мир онлайн-\n образования изнутри"}*/}
            {/*            />*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide>*/}
            {/*            <DescriptionCard*/}
            {/*                image={descriptionPic3}*/}
            {/*                subtitle={"Иметь доход в среднем от 35 \n до 50 тысяч ₽ в месяц"}*/}
            {/*                text={"Удаленно, 2–3 часа в день, график \n выбираете сами"}*/}
            {/*            />*/}
            {/*        </SwiperSlide>*/}
            {/*    </Swiper>*/}
            {/*</div>*/}
        </section>
    )
}
