import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Scrollbar, Virtual } from 'swiper';

import Image from "next/image";

import LeftArrowImage from "../../assets/left_arrow.png"
import RightArrowImage from "../../assets/right_arrow.png"

const PictureSlider = ({ listOfPictures }) => {

    return (
        <Swiper className='w-full'
            navigation={true}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                listOfPictures.map((e, index) => (
                    <SwiperSlide className="flex w-auto justify-center" key={index}>
                        <Image
                            src={e}
                            height={40}
                            width={40}
                            alt="slika"
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default PictureSlider;