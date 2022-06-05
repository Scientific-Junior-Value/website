import PartnershipItem from '../PartnershipItem/PartnershipItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Autoplay } from 'swiper';
import './Partnerships.css';

const Partnerships = () => {
    SwiperCore.use([Autoplay]);

    return (
        <div className='carousel'>
            <Swiper className='swiper-container'
                    autoplay={{ delay: 1600 }}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={0}
                  loop={true}
                  slidesPerView={5}
                  grabCursor={true}
                  fade={true}    
                    pagination={{clickable: true}} 
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1
                            },
                            520: {
                                slidesPerView: 3
                            },
                            950: {
                                slidesPerView: 5
                            }
                        }
                    }
            >

            <SwiperSlide><PartnershipItem name="Dominos" image="parcerias/dominos.png" /></SwiperSlide>
            <SwiperSlide><PartnershipItem name="Iron Duke" image="parcerias/ironduke.jpg"/></SwiperSlide>
            <SwiperSlide><PartnershipItem name="IPDJ" image="parcerias/ipdj.png"/></SwiperSlide>
            <SwiperSlide><PartnershipItem name="Academia Génios Livres" image="parcerias/gl.jpg"/></SwiperSlide>
            <SwiperSlide><PartnershipItem name="Aveiro Smart Business" image="parcerias/aveirosmart.png"/></SwiperSlide>
            <SwiperSlide><PartnershipItem name="Universidade de Aveiro" image="parcerias/ua.png"/></SwiperSlide>
            <SwiperSlide><PartnershipItem name="Carla Pereira" image="parcerias/Carla.png"/></SwiperSlide>
            <SwiperSlide><PartnershipItem name="Eduardo Espinheira" image="parcerias/eduardo.jpg"/></SwiperSlide>
            <SwiperSlide><PartnershipItem name="Ginásio da Educação Da Vinci" image="parcerias/ginasiodaeducaçãodavinci.png"/></SwiperSlide>
            <SwiperSlide><PartnershipItem name="Dr. Henrique Girão" image="parcerias/henrique.jpeg"/></SwiperSlide>
            <SwiperSlide><PartnershipItem name="Milagre Coffee Shop" image="parcerias/milagre.jpg"/></SwiperSlide>
            <SwiperSlide><PartnershipItem name="Gráfica Aroense" image="parcerias/grafica.jpg"/></SwiperSlide>
            <SwiperSlide><PartnershipItem name="Impresspoint" image="parcerias/impresspoint.png"/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Partnerships;