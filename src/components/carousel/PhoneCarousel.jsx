import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "./Item";

import 'swiper/css';
import 'swiper/css/autoplay';

const PhoneCarousel = ({ kategori }) => {

    const [phonePlaying, setPhonePlaying] = useState([]);

    useEffect(() => {
        (async () => {

            const result = await axios.get('https://api-mobilespecs.azharimm.site/v2/'+ kategori);

            setPhonePlaying(result.data.data.phones);

        })();
    });

    return (
        <Fragment>
            <Swiper
                modules={[Autoplay]}
                autoplay
                spaceBetween={10}
                slidesPerView={6}
                onSlideChange={() => { }}
                onSwiper={(swiper) => { }}
                style={{ width: '100%' }}
                breakpoints={{
                    // when window width is >= 640px
                    0: {
                        // width: 640,
                        slidesPerView: 1,
                    },
                    520: {
                        // width: 768,
                        slidesPerView: 2,
                    },
                    720: {
                        // width: 768,
                        slidesPerView: 3,
                    },
                    1080: {
                        // width: 768,
                        slidesPerView: 4,
                    },
                }}
            >
                {phonePlaying.map((value, index) => (
                    <SwiperSlide key={index}>
                        <Item data={value} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Fragment>
    );
}

export default PhoneCarousel;