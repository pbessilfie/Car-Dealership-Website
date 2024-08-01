import Button from "../Common/Button";

const CreditCardDetails = () => {
  return (
    <div className=" px-6 py-7">
      <div className=" mb-7">
        <h3 className=" text-xl font-semibold text-primaryTextColor mb-4">
          Credit/Debit Card{" "}
        </h3>
        <p className=" font-medium text-base text-secondaryTextColor2 ">
          Set up your credit card or debit card{" "}
        </p>
      </div>{" "}
      <form className=" space-y-8">
        <div className="space-y-7">
          {" "}
          <div className="">
            <label className=" text-base font-medium text-primaryTextColor mb-2">
              Card Number{" "}
            </label>

            <div className=" border border-lineColor rounded-lg ">
              <input
                type="text"
                placeholder="1234 - 5678 - 9012"
                className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-7">
            <div className="">
              <label className=" text-base font-medium text-primaryTextColor mb-2">
                Card Holder{" "}
              </label>
              <div className=" border border-lineColor rounded-lg ">
                <input
                  type="text"
                  placeholder="Enter card holder name"
                  className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
                />
              </div>
            </div>

            <div className=" flex justify-evenly items-center">
              <div className="">
                <label className=" text-base font-medium text-primaryTextColor mb-2">
                  Exp.Date{" "}
                </label>
                <div className=" border border-lineColor rounded-lg ">
                  <input
                    type="text"
                    placeholder="02/2025"
                    className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
                  />
                </div>
              </div>
              <div className="">
                <label className=" text-base font-medium text-primaryTextColor mb-2">
                  CVC{" "}
                </label>
                <div className=" border border-lineColor rounded-lg ">
                  <input
                    type="text"
                    placeholder="Eg. 528"
                    className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* personal details form */}
        <h4 className=" text-base font-bold text-primaryTextColor mb-7">
          Personal Info
        </h4>
        <div className="space-y-7">
          <div className=" grid grid-cols-2 gap-7">
            {" "}
            <div className="">
              <label className=" text-base font-medium text-primaryTextColor mb-2">
                First Name
              </label>

              <div className=" border border-lineColor rounded-lg ">
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
                />
              </div>
            </div>
            <div className="">
              <label className=" text-base font-medium text-primaryTextColor mb-2">
                Last Name
              </label>
              <div className=" border border-lineColor rounded-lg ">
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
                />
              </div>
            </div>
          </div>

          <div className="">
            <label className=" text-base font-medium text-primaryTextColor mb-2">
              Email Address
            </label>
            <div className=" border border-lineColor rounded-lg ">
              <input
                type="email"
                placeholder="Enter email address"
                className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
              />
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <h4 className=" text-base font-bold text-primaryTextColor mb-7 ">
          Billing Address
        </h4>
        <div className="space-y-7">
          <div className=" grid grid-cols-2 gap-7">
            {" "}
            <div className="">
              <label className=" text-base font-medium text-primaryTextColor mb-2">
                Street{" "}
              </label>

              <div className=" border border-lineColor rounded-lg ">
                <input
                  type="text"
                  placeholder="Enter street name"
                  className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
                />
              </div>
            </div>
            <div className="">
              <label className=" text-base font-medium text-primaryTextColor mb-2">
                City
              </label>
              <div className=" border border-lineColor rounded-lg ">
                <input
                  type="text"
                  placeholder="Enter city"
                  className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-7">
            <div className="">
              <label className=" text-base font-medium text-primaryTextColor mb-2">
                Country{" "}
              </label>
              <div className=" border border-lineColor rounded-lg ">
                <input
                  type="text"
                  placeholder="Enter country"
                  className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
                />
              </div>
            </div>
            <div className="">
              <label className=" text-base font-medium text-primaryTextColor mb-2">
                State{" "}
              </label>
              <div className=" border border-lineColor rounded-lg ">
                <input
                  type="text"
                  placeholder="Enter state"
                  className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
                />
              </div>
            </div>
            <div className="">
              <label className=" text-base font-medium text-primaryTextColor mb-2">
                Zip Code{" "}
              </label>
              <div className=" border border-lineColor rounded-lg ">
                <input
                  type="text"
                  placeholder="Enter zipcode"
                  className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
                />
              </div>
            </div>
          </div>
        </div>


        <Button label={'Add'} bstyles={'text-white bg-pBlue rounded-md py-2 px-16 w-fit mx-auto'}/>
      </form>
    </div>
  );
};

export default CreditCardDetails;
