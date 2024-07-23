import { Cars } from "../constants";
import Button from "./Button";

const Top_Offers = () => {
  return (
    <div className="">
      <h3 className=" text-primaryTextColor font-bold text-xl mb-2">
        Top Offers
      </h3>
      <p className="text-sm text-secondaryTextColor font-normal mb-9">
        The best top offers special for you{" "}
      </p>

      <div className="flex h-96 w-[57vw] rounded-xl overflow-hidden bg-white">
        <div className=" w-[444px] h-full space-y-1">
          <img
            src="/src/assets/unsplash_HrbMyWmS7yU.png"
            className="w-full h-1/2 object-cover"
          />
          <div className=" flex gap-1 h-1/2 w-full">
            {" "}
            <img
              src="/src/assets/unsplash_HrbMyWmS7yU.png"
              className=" w-1/2 h-full object-cover"
            />
            <img
              src="/src/assets/unsplash_HrbMyWmS7yU.png"
              className=" w-1/2 h-full  object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          {Cars.slice(8, 13).map((car_details, index) => (
            <div key={index} className="flex justify-between items-center h-[20%] w-full px-7 py-4  hover:bg-lineColor group">
              <div className="group-hover:text-pBlue">
                <h3 className=" text-base text-primaryTextColor font-semibold group-hover:text-pBlue">
                  {car_details.brand}
                  {" "}
                  {car_details.Carname}
                  {" "}
                  {car_details.production_year}
                </h3>
                <h4 className=" text-base text-secondaryTextColor font-normal group-hover:text-pBlue">
                  {car_details.mileage} km
                </h4>
              </div>
              <div><Button label={car_details.price} bstyles={' bg-pGreen text-white text-sm px-4 py-2 rounded-md'}/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top_Offers;
