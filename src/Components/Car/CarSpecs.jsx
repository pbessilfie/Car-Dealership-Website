import { PiEngineBold } from "react-icons/pi";
import { Cars } from "../../constants";

const CarSpecs = () => {
  const carSpecs = Cars[0].specs;
  // console.log(carSpecs.specs)
  return (
    <div className=" ">
      <h2 className=" text-xl text-primaryTextColor font-bold mb-10">
        Technical Specs
      </h2>
      <div className=" grid grid-cols-3 gap-7">
        {Object.entries(carSpecs)
          .slice(0, 12)
          .map(([key, value]) => (
            <div
              key={key}
              className=" border-t-2 border-lineColor py-3 flex items-start gap-5"
            >
              <PiEngineBold className="text-2xl text-secondaryTextColor" />
              <div>
                <h3 className=" text-base text-secondaryTextColor font-medium mb-3">
                  {key.toUpperCase()}
                </h3>
                <span className=" text-base text-primaryTextColor font-bold">
                  {value}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarSpecs;
