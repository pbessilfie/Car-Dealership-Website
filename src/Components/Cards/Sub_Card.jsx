import { FaCheck } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Button from "../Common/Button";
import PropTypes from "prop-types";

const Sub_Card = ({
  subType,
  price,
  NOA,
  emailSupport,
  specialOffers,
  freeFee,
}) => {
  return (
    <div className=" bg-white border border-lineColor rounded-lg p-5 flex flex-col items-center gap-4 py-10">
      <h3 className=" text-primaryTextColor font-semibold text-xl">
        {subType}
      </h3>
      <p className=" text-base font-normal text-secondaryTextColor text-center w-full">
        For all who have already tried the platform and wants a little more
      </p>

      <h1 className=" text-primaryTextColor text-4xl font-extrabold">
        {price}{" "}
        <span className=" font-semibold text-sm text-secondaryTextColor">
          /month
        </span>
      </h1>

      {/* sub benefits */}
      <div className=" w-full">
        <div className=" border-b border-lineColor py-4 flex items-center justify-between">
          <span className="text-base text-secondaryTextColor">
            {NOA} User Account
          </span>
          <FaCheck className=" text-2xl text-pGreen" />
        </div>
        <div className=" border-b border-lineColor py-4 flex items-center justify-between">
          <span className="text-base text-secondaryTextColor">
            Email Support
          </span>
          {emailSupport ? (
            <FaCheck className=" text-2xl text-pGreen" />
          ) : (
            <FaTimes className=" text-2xl text-pRed" />
          )}{" "}
        </div>
        <div className=" border-b border-lineColor py-4 flex items-center justify-between">
          <span className="text-base text-secondaryTextColor">
            Special Offers
          </span>
          {specialOffers ? (
            <FaCheck className=" text-2xl text-pGreen" />
          ) : (
            <FaTimes className=" text-2xl text-pRed" />
          )}{" "}
        </div>
        <div className=" border-b border-lineColor py-4 flex items-center justify-between">
          <span className="text-base text-secondaryTextColor">Free Fee</span>
          {freeFee ? (
            <FaCheck className=" text-2xl text-pGreen" />
          ) : (
            <FaTimes className=" text-2xl text-pRed" />
          )}
        </div>
      </div>
      <Button
        label={"Choose plan"}
        bstyles={
          "border border-lineColor text-secondaryTextColor py-3 text-center rounded-md w-full"
        }
      />
    </div>
  );
};
Sub_Card.propTypes = {
  subType: PropTypes.string,
  NOA: PropTypes.string,
  price: PropTypes.string,
  freeFee: PropTypes.bool,
  emailSupport: PropTypes.bool,
  specialOffers: PropTypes.bool,
};
export default Sub_Card;
