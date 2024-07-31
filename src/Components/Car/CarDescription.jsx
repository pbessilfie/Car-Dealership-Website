import { FaStar } from "react-icons/fa6";
import Button from "../Common/Button";

const CarDescription = () => {
  return (
    <div className=" w-[400px] bg-white p-6 rounded-lg space-y-5 drop-shadow-md">
      <div className=" flex justify-between items-center">
        <h2 className=" text-2xl font-bold text-primaryTextColor">Car Name</h2>
        <img
          src="/src/assets/audi_logo.svg.png"
          alt="brand logo"
          width={80}
          className=""
        />
      </div>

      {/* Tags */}
      <div className=" flex gap-5">
        <div className=" bg-[#eee] px-4 py-2 rounded-md">
          <span className=" text-xs text-primaryTextColor ">Sedan</span>
        </div>
        <div className=" bg-[#eee] px-4 py-2 rounded-md">
          <span className=" text-xs text-primaryTextColor ">Hybrid</span>
        </div>
        <div className=" bg-[#eee] px-4 py-2 rounded-md">
          <span className=" text-xs text-primaryTextColor ">New Vehicle</span>
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className=" text-lg font-semibold text-primaryTextColor">
          Description
        </h3>
        <p className=" text-base text-secondaryTextColor">
          The Audi RS7 is a high-performance version of the 3 Series, known for
          its powerful turbocharged inline-six engine, precise handling, and
          sporty design. It offers a blend of everyday usability and track-ready
          performance, featuring advanced technology and a luxurious interior.
        </p>
      </div>

      {/* Dealer's Information */}
      <div>
        <h3 className=" text-lg font-semibold text-primaryTextColor">
          Dealer&apos;s Info
        </h3>

        <p className=" text-base text-secondaryTextColor">
          Name: Nana Asare Nkansah
        </p>
        <p className=" text-base text-secondaryTextColor">
          Address: 123, Accra, Ghana
        </p>
        <p className=" text-base text-secondaryTextColor">
          Contact: +233 24 123 4567
        </p>
        <p className=" text-base text-secondaryTextColor">
          Email: asare4u@gmail.com
        </p>
      </div>

      {/* Reviews */}
      <div className=" flex items-center gap-2">
        <h3 className=" text-base font-semibold text-primaryTextColor">
          Reviews:
        </h3>
        <div className=" inline">
          <FaStar className=" text-sm text-yellow-500 inline" />
          <FaStar className=" text-sm text-yellow-500 inline" />
          <FaStar className=" text-sm text-yellow-500 inline" />
          <FaStar className=" text-sm text-yellow-500 inline" />
          <FaStar className=" text-sm text-lineColor inline" />
        </div>{" "}
        <span className=" text-sm font-semibold text-primaryTextColor">
          (45 reviews)
        </span>
      </div>

      <Button
        label={"Buy now"}
        bstyles={"text-center text-white py-3 rounded-md text-sm bg-pGreen"}
      />

      {/* price */}
      <Button
        bstyles={
          "border border-lineColor rounded-md py-3 text-sm text-center text-secondaryTextColor"
        }
        label={"Add to cart"}
      />
    </div>
  );
};

export default CarDescription;
