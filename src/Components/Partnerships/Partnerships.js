import PartnershipItem from '../PartnershipItem/PartnershipItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Autoplay } from 'swiper';
import {data} from './data';
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
            
            {data.map((item)=>{
            return (
                <SwiperSlide key={item.id}><PartnershipItem name={item.name} image={item.image} /></SwiperSlide>
            )
            })}
            </Swiper>
        </div>
    );
}

export default Partnerships;