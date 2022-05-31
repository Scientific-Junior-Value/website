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
                    autoplay={{ delay: 1800 }}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={0}
                  loop={true}
                  slidesPerView={5}
                  grabCursor={true}
                  fade={true}    
                    pagination={{clickable: true}}    
            >

            <SwiperSlide><Card name="Dominos" image="parcerias/dominos.png" /></SwiperSlide>
            <SwiperSlide><Card name="Iron Duke" image="parcerias/ironduke.jpg"/></SwiperSlide>
            <SwiperSlide><Card name="IPDJ" image="parcerias/ipdj.png"/></SwiperSlide>
            <SwiperSlide><Card name="Academia Génios Livres" image="parcerias/gl.jpg"/></SwiperSlide>
            <SwiperSlide><Card name="Aveiro Smart Business" image="parcerias/aveirosmart.png"/></SwiperSlide>
            <SwiperSlide><Card name="Universidade de Aveiro" image="parcerias/ua.png"/></SwiperSlide>
            <SwiperSlide><Card name="Carla Pereira" image="parcerias/Carla.png"/></SwiperSlide>
            <SwiperSlide><Card name="Eduardo Espinheira" image="parcerias/eduardo.jpg"/></SwiperSlide>
            <SwiperSlide><Card name="Ginásio da Educação Da Vinci" image="parcerias/ginasiodaeducaçãodavinci.png"/></SwiperSlide>
            <SwiperSlide><Card name="Henrique Girão" image="parcerias/henrique.jpeg"/></SwiperSlide>
            <SwiperSlide><Card name="Milagre Coffee Shop" image="parcerias/milagre.jpg"/></SwiperSlide>
            <SwiperSlide><Card name="Gráfica Aveirense" image="parcerias/grafica.jpg"/></SwiperSlide>
            <SwiperSlide><Card name="Impresspoint" image="parcerias/impresspoint.png"/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carousel;