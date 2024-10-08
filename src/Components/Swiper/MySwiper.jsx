import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
// import "swiper/css/pagination";

import "../../App.css";

import { Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const SlideButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex gap-5">
      <button
        className="p-3 rounded-full bg-lineColor text-xl text-primaryTextColor"
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronLeft className=" cursor-pointer" />
      </button>
      <button
        className="p-3 rounded-full bg-lineColor text-xl text-primaryTextColor"
        onClick={() => swiper.slideNext()}
      >
        <FaChevronRight className=" cursor-pointer" />
      </button>
    </div>
  );
};
export default function MySwiper() {
  return (
    <div className="flex gap-4 w-96 absolute bottom-28 -right-16 z-30">
      {" "}
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" w-full h-44 rounded-md border border-lineColor overflow-hidden ">
            <img
              src="/src/assets/unsplash_iw0D_9wHnf4.png"
              className=" h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" w-full h-44 rounded-md border border-lineColor overflow-hidden ">
            <img
              src="/src/assets/unsplash_v9ARc6COwfg.png"
              className=" h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" w-full h-44 rounded-md border border-lineColor overflow-hidden ">
            <img
              src="/src/assets/unsplash_9E1o3CsYmm0.png"
              className=" h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" w-full h-44 rounded-md border border-lineColor overflow-hidden ">
            <img
              src="/src/assets/unsplash_HrbMyWmS7yU.png"
              className=" h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        {/* <SlideButton /> */}
      </Swiper>
    </div>
  );
}
