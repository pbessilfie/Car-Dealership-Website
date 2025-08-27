import { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import categoryImg from "/src/assets/unsplash_9E1o3CsYmm0.png";
const Category_Card = ({
  carName,
  price,
  condition,
  production_year,
  reviews,
  brand,
  mileage,
  category,
}) => {
  const [isFav, setIsFav] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className=" w-[484px] h-56 rounded-xl overflow-hidden bg-white drop-shadow-md flex"
      onClick={() => navigate("/browse/vehicle-details")}
    >
      <button
        className="absolute top-4 right-4 backdrop-blur-sm bg-[rgba(0,0,0,0.3)] p-1 text-lg rounded-md"
        onClick={() => setIsFav(!isFav)}
      >
        {isFav ? (
          <FaHeart className=" text-pRed" />
        ) : (
          <FaRegHeart className=" text-lineColor" />
        )}
      </button>
      <div className="relative w-2/5 h-full group ">
        <img
          src={categoryImg}
          className=" object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* car details */}
      <div className="w-2 flex-1 flex flex-col justify-between border p-4">
        <div className="flex gap-2 items-center">
          <div className="px-2 py-px bg-lineColor rounded-sm">
            <span className=" font-normal text-primaryTextColor text-xs">
              {category}
            </span>
          </div>
          <div className="px-2 py-px bg-lineColor rounded-sm">
            <span className=" font-normal text-primaryTextColor text-xs">
              {condition}
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
        <div className="">
          <h6 className=" text-xs font-semibold text-secondaryTextColor">
            Reviews:
          </h6>
          {/* review stars */}
          <div className=" inline">
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
    </div>
  );
};

Category_Card.propTypes = {
  carName: PropTypes.string,
  price: PropTypes.string,
  condition: PropTypes.string,
  production_year: PropTypes.string,
  reviews: PropTypes.number,
  brand: PropTypes.string,
  mileage: PropTypes.string,
  category: PropTypes.string,
};
export default Category_Card;
