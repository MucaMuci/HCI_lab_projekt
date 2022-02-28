import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import Image from "next/image";

const PictureSlider = ({ listOfPictures }) => {
  return (
    <Swiper
      cssMode={true}
      className="w-full"
      pagination={true}
      navigation={true}
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
    >
      {listOfPictures.map((e, index) => (
        <SwiperSlide className="flex w-auto justify-center" key={index}>
          <Image src={e} alt="slika" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PictureSlider;
