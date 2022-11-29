import DescriptionCard from "./DescriptionCard";
import {FreeMode, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";

export default function Description() {
    return (
        <section className="description section content__section">
            <h2 className="section__title">В роли наставника и ревьюера вы будете</h2>
            <ul className="description__cards-container description__cards-container_type_desktop">
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

            <div className="description__cards-container description__cards-container_type_mobile">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode, Navigation]}
                    navigation={true}
                    loop={true}
                    className="my-swiper"
                >
                    <SwiperSlide>
                        <DescriptionCard
                            image={'http://placekitten.com/g/400/200'}
                            subtitle={'Развивать \n личный бренд'}
                            text={"Вы сможете стать старшим наставником \n или сеньор-ревьювером"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DescriptionCard
                            image={'http://placekitten.com/g/400/200'}
                            subtitle={"Общаться с людьми \n из EdTech"}
                            text={"Станете частью сообщества экспертов \n и посмотрите на мир онлайн-\n образования изнутри"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DescriptionCard
                            image={'http://placekitten.com/g/400/200'}
                            subtitle={"Иметь доход в среднем от 35 \n до 50 тысяч ₽ в месяц"}
                            text={"Удаленно, 2–3 часа в день, график \n выбираете сами"}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
