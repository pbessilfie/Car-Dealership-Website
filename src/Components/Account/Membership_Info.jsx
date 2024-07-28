import Switch from "../Common/Switch";
import Sub_Card from "../Cards/Sub_Card";

const Membership_Info = () => {
  return (
    <div className=" bg-white rounded-md w-[60%]">
      {" "}
      <header className="flex items-center justify-between px-6 py-4 border-b border-lineColor">
        <span className=" text-xl font-semibold text-primaryTextColor">
          Membership Settings{" "}
        </span>

        <div className=" flex items-center gap-3">
          <span className=" text-primaryTextColor font-medium text-base">
            Yearly
          </span>
          <div className="h-2 w-2 rounded-full bg-lineColor"></div>
          <span className="text-lineColor font-semibold text-base">
            10% off
          </span>{" "}
          <Switch />
        </div>
      </header>
      <div className=" w-full p-5">
        <div className=" py-[10px] w-52 text-center rounded-md bg-pOrange mx-auto my-[30px]">
          <span className=" text-sm text-white">Recommeded Plan</span>
        </div>

        {/* subscription cards */}
        <div className=" grid grid-cols-3 gap-5">
          <Sub_Card price={"$0"} subType={"Free"} NOA={"2"} />
          <Sub_Card
            price={"$9.99"}
            subType={"Pro"}
            NOA={"5"}
            emailSupport={true}
          />
          <Sub_Card
            price={"$39.99"}
            subType={"Premium"}
            NOA={"Unlimited"}
            emailSupport={true}
            specialOffers={true}
            freeFee={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Membership_Info;
