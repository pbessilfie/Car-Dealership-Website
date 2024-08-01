import Button from "../Common/Button";

const MomoDetails = () => {
  return (
    <div className=" px-6 py-7">
      <div className=" mb-7">
        <h3 className=" text-xl font-semibold text-primaryTextColor mb-4">
Momo Details        </h3>
        <p className=" font-medium text-base text-secondaryTextColor2 ">
          Set up your credit card or debit card{" "}
        </p>
      </div>

      <form>
        <h4 className=" text-base font-bold text-primaryTextColor mb-7">
          Personal Info
        </h4>
        <div className="space-y-7">
          <div className=" grid grid-cols-2 gap-7">
            {" "}
            <div className="">
              <label className=" text-base font-medium text-primaryTextColor mb-2">
                Network
              </label>

              <div className=" border border-lineColor rounded-lg ">
                <input
                  type="text"
                  placeholder="Select network"
                  className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
                />
              </div>
            </div>
            <div className="">
              <label className=" text-base font-medium text-primaryTextColor mb-2">
                Mobile Number{" "}
              </label>
              <div className=" border border-lineColor rounded-lg ">
                <input
                  type="text"
                  placeholder="(233) 248 503 913"
                  className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
                />
              </div>
            </div>
          </div>

          <div className="">
            <label className=" text-base font-medium text-primaryTextColor mb-2">
              Account Name{" "}
            </label>
            <div className=" border border-lineColor rounded-lg ">
              <input
                type="email"
                placeholder="Enter account name"
                className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
              />
            </div>
          </div>
        </div>
        <Button
          label={"Add"}
          bstyles={"text-white bg-pBlue rounded-md py-2 px-16 w-fit mx-auto"}
        />
      </form>
    </div>
  );
};

export default MomoDetails;
