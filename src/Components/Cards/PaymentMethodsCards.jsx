// import { useState } from "react";
import Custom_Radio_Button from "../Common/Custom_Radio_Button";

const PaymentMethodsCards = () => {
  const paymentMethods = [
    {
      type: "Credit Card",
      description: "Master Card or Visa",
      imageSrc: "/src/assets/billing/bank card.png",
    },
    {
      type: "Bank Transfer",
      description: "Simple Bank Transfer",
      imageSrc: "/src/assets/billing/bank.png",
    },
    {
      type: "Momo",
      description: "Mobile Money Transfer",
      imageSrc: "/src/assets/billing/momo 1.png",
    },
    {
      type: "Cash",
      description: "Pay After Delivery",
      imageSrc: "/src/assets/billing/black wallet with money.png",
    },
  ];

  return (
    <div className=" border-b border-lineColor p-6 grid grid-cols-2 gap-5">
      {paymentMethods.map((paymentMethod, index) => (
        <div
          key={index}
          className=" border border-lineColor rounded-md p-5 flex justify-between cursor-pointer"
        >
          <div>
            <Custom_Radio_Button />
            <h3 className=" text-lg font-semibold text-primaryTextColor mt-5">
              {paymentMethod.type}
            </h3>
            <span className=" text-base text-primaryTextColor font-medium mt-2">
              {paymentMethod.description}
            </span>
          </div>
          <img
            src={paymentMethod.imageSrc}
            alt="payment method image"
            width={100}
            // className=" h-full object-cover"
          />
       
        </div>
      ))}
    </div>
  );
};

export default PaymentMethodsCards;
