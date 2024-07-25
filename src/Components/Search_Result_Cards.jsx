import PropTypes from "prop-types";
import { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa6";
import Button from "./Button";

const Search_Result_Cards = ({
  reviews,
  mileage,
  price,
  category,
  condition,
  production_year,
  carName,
  brand
}) => {
  const [isFav, setIsFav] = useState(false);

  return (
    <div className=" w-full h-60 overflow-hidden bg-white flex px-6 py-7 border-b border-lineColor">
      <div className="w-[25%] rounded-md h-full group overflow-hidden ">
        <img
          src="/src/assets/unsplash_9E1o3CsYmm0.png"
          className=" object-cover h-full w-full group-hover:scale-110 transition-transform duration-500 relative"
        />
        <button
          className="absolute top-3 right-3 backdrop-blur-sm bg-[rgba(0,0,0,0.3)] p-2 text-xl rounded-md"
          onClick={() => setIsFav(!isFav)}
        >
          {isFav ? (
            <FaHeart className=" text-pRed" />
          ) : (
            <FaRegHeart className=" text-lineColor" />
          )}
        </button>
      </div>

      {/* car details */}
      <div className="w-2 flex-1 flex flex-col justify-between p-4">
        <div className="flex gap-2 items-center">
          <div className="px-2 py-px bg-lineColor rounded-sm">
            <span className=" font-normal text-primaryTextColor text-xs">
              {category}
            </span>
          </div>
          <div className="px-2 py-px bg-lineColor rounded-sm">
            <span className=" font-normal text-primaryTextColor text-xs">
              {condition} Car
            </span>
          </div>
          <div className="px-2 py-px bg-lineColor rounded-sm">
            <span className=" font-normal text-primaryTextColor text-xs">
              Top Offers{" "}
            </span>
          </div>
        </div>
        <h2 className=" text-primaryTextColor font-semibold text-base">
          {brand}
          {""} {carName}
          {""} {production_year}
        </h2>
        <div className="flex items-center gap-14">
          {" "}
          <div className="">
            <h6 className=" text-xs font-semibold text-secondaryTextColor">
              Price:
            </h6>
            <h5 className=" text-sm font-semibold text-primaryTextColor">
              {price}
            </h5>
          </div>
          <div className="">
            <h6 className=" text-xs font-semibold text-secondaryTextColor">
              Kilometers:
            </h6>
            <h5 className=" text-sm font-semibold text-primaryTextColor">
              {mileage} km
            </h5>
          </div>
        </div>

        <div className="">
          <h6 className=" text-xs font-semibold text-secondaryTextColor">
            Reviews:
          </h6>
          {/* review stars */}
          <div className=" inline space-x-1">
            <FaStar className=" text-xs text-yellow-500 inline" />
            <FaStar className=" text-xs text-yellow-500 inline" />
            <FaStar className=" text-xs text-yellow-500 inline" />
            <FaStar className=" text-xs text-yellow-500 inline" />
            <FaStar className=" text-xs text-lineColor inline" />
          </div>
          <span className=" text-sm font-semibold text-primaryTextColor ml-1">
            ({reviews} reviews)
          </span>
        </div>
      </div>

      <div className=" w-[40%] border-l border-lineColor flex flex-col justify-center gap-5 px-20">
        <Button
          label={"Buy Now"}
          bstyles={
            "text-sm text-white text-center py-2 bg-pGreen rounded-md"
          }
        />
        <Button
          label={"Add to Cart"}
          bstyles={
            "border border-lineColor text-sm text-secondaryTextColor py-2 text-center bg-white rounded-md"
          }
        />
      </div>
    </div>
  );
};

Search_Result_Cards.propTypes = {
  reviews: PropTypes.number,
  mileage: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  condition: PropTypes.string,
  production_year: PropTypes.string,
  carName: PropTypes.string,
  brand: PropTypes.string,
};

export default Search_Result_Cards;
