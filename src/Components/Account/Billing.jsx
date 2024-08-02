import PaymentMethodsCards from "../Cards/PaymentMethodsCards";
import Button from "../Common/Button";
import BankTransfer from "./BankTransfer";
import CashDescription from "./CashDescription";
import CreditCardDetails from "./CreditCardDetails";
import MomoDetails from "./MomoDetails";
import { useState } from "react";

const DefaultComp = () => {
  return (
    <div>
      <div className=" border-b border-lineColor p-6 space-y-10">
        <span className=" text-lg font-semibold text-primaryTextColor">
          Available payment methods{" "}
        </span>

        <div className=" mx-auto space-y-7 w-fit">
          {" "}
          <img
            src="/src/assets/billing/undraw_no_data_re_kwbl 1.png"
            width={200}
          />
          <span className=" text-lg text-primaryTextColor text-center  block">
            No data found
          </span>
        </div>
      </div>

      <Button
        label={"Add new payment method"}
        bstyles={
          "w-fit px-5 py-3 text-white text-sm bg-[#91ccf9] rounded-md mx-auto mt-8"
        }
      />

      <div className=" px-6 ">
        <h3 className=" text-xl font-semibold text-primaryTextColor mb-4">
          Transaction History{" "}
        </h3>
        <p className=" font-medium text-base text-secondaryTextColor2 mb-28">
          Transaction made is going to be displayed here.
        </p>
      </div>
    </div>
  );
};

const Billing = () => {
  const [index, setIndex] = useState(null);
  const selectedBillingDetails = (index) => {
    switch (index) {
      case 0:
        return <CreditCardDetails />;
      case 1:
        return <BankTransfer />;
      case 2:
        return <MomoDetails />;
      case 3:
        return <CashDescription />;

      default:
        return <DefaultComp />;
    }
  };
  return (
    <div className=" bg-white rounded-md w-[60%]">
      <header className="px-6 py-4 border-b border-lineColor">
        <span className=" text-xl font-semibold text-primaryTextColor">
          Billing and Payments
        </span>
      </header>

      <PaymentMethodsCards setIndex={setIndex} />
      {selectedBillingDetails(index)}
    </div>
  );
};

export default Billing;
