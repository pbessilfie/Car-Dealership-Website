import Button from "../Common/Button";

const BankTransfer = () => {
  return (
    <div className=" px-6 py-7">
      <div className=" mb-7">
        <h3 className=" text-xl font-semibold text-primaryTextColor mb-2">
          Bank Account Details{" "}
        </h3>
        <p className=" font-medium text-base text-secondaryTextColor2 ">
          Set up your bank account details{" "}
        </p>
      </div>

      <form className="space-y-7">
        <div className=" grid grid-cols-2 gap-7">
          {" "}
          <div className="">
            <label className=" text-base font-medium text-primaryTextColor mb-2">
              Bank Name{" "}
            </label>

            <div className=" border border-lineColor rounded-lg ">
              <input
                type="text"
                placeholder="Enter bank name"
                className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
              />
            </div>
          </div>
          <div className="">
            <label className=" text-base font-medium text-primaryTextColor mb-2">
              Account Name{" "}
            </label>
            <div className=" border border-lineColor rounded-lg ">
              <input
                type="text"
                placeholder="Account name"
                className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
              />
            </div>
          </div>
          <div className="">
            <label className=" text-base font-medium text-primaryTextColor mb-2">
              Account Type{" "}
            </label>

            <div className=" border border-lineColor rounded-lg ">
              <input
                type="text"
                placeholder="Enter account type"
                className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
              />
            </div>
          </div>
          <div className="">
            <label className=" text-base font-medium text-primaryTextColor mb-2">
              Account Number
            </label>
            <div className=" border border-lineColor rounded-lg ">
              <input
                type="text"
                placeholder="Enter account number"
                className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
              />
            </div>
          </div>
        </div>

        <div className="">
          <label className=" text-base font-medium text-primaryTextColor mb-2">
            Account Address
          </label>
          <div className=" border border-lineColor rounded-lg ">
            <input
              type="email"
              placeholder="Enter account address"
              className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
            />
          </div>
        </div>

        <Button
          label={"Add"}
          bstyles={
            "text-white bg-pBlue rounded-md py-2 px-16 w-fit mx-auto mt-7"
          }
        />
      </form>
    </div>
  );
};

export default BankTransfer;
