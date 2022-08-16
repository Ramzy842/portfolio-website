import React from "react";
import Screenshot from "./Screenshot";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Screenshots = ({ screenshots, setMainImage, setIndex }) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={10}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {screenshots.map((screenshot, index) => (
        <SwiperSlide key={index}>
          <Screenshot
            index={index}
            setIndex={setIndex}
            setMainImage={setMainImage}
            screenshot={screenshot}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Screenshots;
