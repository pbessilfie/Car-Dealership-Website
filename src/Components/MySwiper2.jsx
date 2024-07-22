// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Autoplay, EffectFade} from "swiper/modules";
const MySwiper2 = () => {
  return (
    <div className=" absolute top-0 left-0 h-full w-full -z-10">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper h-full w-full
        "
      >
        <SwiperSlide>
          <div className=" w-full h-full ">
            <img
              src="/src/assets/unsplash_HrbMyWmS7yU.png"
              className=" h-full w-full object-cover"
            />
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full">
            <img
              src="/src/assets/unsplash_iw0D_9wHnf4.png"
              className=" h-full w-full object-cover"
            />
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full">
            <img
              src="/src/assets/unsplash_v9ARc6COwfg.png"
              className=" h-full w-full object-cover"
            />
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full">
            <img
              src="/src/assets/unsplash_9E1o3CsYmm0.png"
              className=" h-full w-full object-cover"
            />
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper2;
