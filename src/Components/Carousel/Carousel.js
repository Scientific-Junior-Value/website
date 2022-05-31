import Card from '../Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Autoplay } from 'swiper';
import './Carousel.css';

const Carousel = () => {
    SwiperCore.use([Autoplay]);
    return (
        <div className='carousel'>
            <Swiper className='swiper-container'
                    autoplay={{ delay: 1000 }}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={0}
                  loop={true}
                  slidesPerView={7}
                  grabCursor={true}
                  fade={true}    
                    delay= {2000}
                  pagination={true}     
            >
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carousel;