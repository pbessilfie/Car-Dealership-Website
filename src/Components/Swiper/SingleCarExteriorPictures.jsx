import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const SwiperPrevButton = () => {
  const swiper = useSwiper();
  return (
    <button
      className=" p-2 bg-[#d9d9d9] rounded-full"
      onClick={() => swiper.slidePrev()}
    >
      <FaChevronLeft className="text-primaryTextColor text-xl" />
    </button>
  );
};
const SwiperNextButton = () => {
  const swiper = useSwiper();
  return (
    <button
      className=" p-2 bg-[#d9d9d9] rounded-full"
      onClick={() => swiper.slideNext()}
    >
      <FaChevronRight className="text-primaryTextColor text-xl" />
    </button>
  );
};

const SingleCarExteriorPictures = () => {
  return (
    <>
      {" "}
      <div className=" h-[600px] w-[70%]  mx-auto">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[EffectFade, Navigation, Pagination]}
          className=" w-full h-full overflow-hidden rounded-xl"
        >
          <SwiperPrevButton />
          <SwiperNextButton />

          <SwiperSlide className=" bg-cover bg-center overflow-hidden ">
            <img
              src="/src/assets/single car images/Exterior/1105382.jpg"
              alt="car image"
              className=" w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className=" bg-cover bg-center overflow-hidden">
            <img
              src="/src/assets/single car images/Exterior/11678-audirs7sportbackperformanceascaribluematt042-1.jpg"
              alt="car image"
              className=" w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className=" bg-cover bg-center overflow-hidden">
            <img
              src="/src/assets/single car images/Exterior/3241492.jpg"
              alt="car image"
              className=" w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className=" bg-cover bg-center overflow-hidden">
            <img
              src="/src/assets/single car images/Exterior/1672696.jpg"
              alt="car image"
              className=" w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SingleCarExteriorPictures;
