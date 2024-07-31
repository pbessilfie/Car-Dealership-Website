import { FaHeart, FaRegHeart } from "react-icons/fa6";
import CarDescription from "../../Components/Car/CarDescription";
import { useState } from "react";
import CarSpecs from "../../Components/Car/CarSpecs";
import VehiclePerformanceScore from "../../Components/Car/VehiclePerformanceScore";
import Recommended from "../../Components/Car/Recommended";
import CarReview from "../../Components/Car/CarReview";

const SingleCarDetails = () => {
  const [isFav, setIsFav] = useState(false);

  return (
    <div className=" bg-mainBGC py-10 px-32 space-y-14">
      <div className="  flex gap-6 h-[650px] mb-8">
        <div className="relative rounded-xl flex-1 bg-secondaryTextColor2 h-full overflow-hidden">
          <video
            src="/src/assets/18296880-uhd_4096_2160_50fps.mp4"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
            className=" h-full w-full object-cover"
          />
          <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] "></div>
          <div className="absolute top-5 left-5 bg-pBlue px-4 py-2 rounded-md ">
            <span className=" text-xs text-white ">New Car</span>
          </div>

          <button
            className="absolute top-5 right-5 backdrop-blur-sm bg-[rgba(0,0,0,0.3)] p-2 text-xl rounded-md"
            onClick={() => setIsFav(!isFav)}
          >
            {isFav ? (
              <FaHeart className=" text-pRed" />
            ) : (
              <FaRegHeart className=" text-lineColor" />
            )}
          </button>

          <div className="absolute bottom-5 left-5 text-white">
            <h2 className="  text-3xl font-bold">Car Name</h2>
            <p className=" text-sm">Starting at Ghc 34,000</p>
          </div>
        </div>
        <CarDescription />
      </div>

      <div className=" bg-white rounded-lg drop-shadow-md p-8">
        <CarSpecs />
        <VehiclePerformanceScore />
      </div>
      <CarReview />
      <Recommended end={6} />
    </div>
  );
};

export default SingleCarDetails;
