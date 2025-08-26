import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper/modules";
import { swiperImages } from "../../constants/swiper-images";


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
        {swiperImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className=" w-full h-full ">
              <img src={image} className=" h-full w-full object-cover" />
            </div>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwiper2;
