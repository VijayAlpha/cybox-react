import React from 'react';
import PropTypes from 'prop-types';
import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from '../slider-item';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './styles.scss'

Slider.propTypes = {
    data : PropTypes.array,
};

function Slider(props) {
    const {data} = props;
    return (
        <section className="slider slider__fill">
            <Swiper
                modules={[Navigation,  Scrollbar, A11y ]}
                    spaceBetween={0}
                    slidesPerView={1}
                    // navigation
                    scrollbar={{ draggable: false }}
                    className="slider__fill"
                >
                {
                    data.slice(2,3).map(item => (
                        <SwiperSlide key={item.id}>
                            <SliderItem item={item} />
                        </SwiperSlide>
                        
                    ))
                }
            </Swiper>

        </section>
    );
}

export default Slider;