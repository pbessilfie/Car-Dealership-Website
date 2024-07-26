import { FaCrown } from "react-icons/fa6";
import Button from "./Button";
import Select_Input from "./Select_Input";

const Personal_Info = () => {
  return (
    <div className=" bg-white rounded-md w-[60%]">
      <header className="px-6 py-4 border-b border-lineColor">
        {" "}
        <span className=" text-xl font-semibold text-primaryTextColor">
          Personal Information
        </span>
      </header>

      <div className=" px-20 py-7">
        <div className=" flex justify-between items-start mb-14">
          <div className="flex items-center gap-5">
            <div className=" w-24 h-24 rounded-full overflow-hidden cursor-pointer">
              <img
                src="/src/assets/profile-pic.jpg"
                alt="profile picture"
                className=" w-full h-full object-cover"
              />
            </div>
            <div className=" space-y-3">
              <h3 className=" font-bold text-primaryTextColor text-lg">
                Prince Essilfie Bondzie
              </h3>
              <div className=" w-44 ">
                {" "}
                <Button
                  label={"Change Profile Picture"}
                  bstyles={
                    " w-full text-center py-2 bg-pBlue text-white text-sm rounded-md"
                  }
                />
              </div>
            </div>
          </div>

          <div className=" border border-pBlue rounded-md bg-lineColor flex items-center gap-2 p-[10px] ">
            <span className=" text-pBlue text-sm">Premium Membership</span>{" "}
            <FaCrown className=" text-yellow-400 text-xl" />
          </div>
        </div>

        {/* personal information details */}
        <div className=" bg-white rounded-lg drop-shadow-md p-6 space-y-7">

          {/* personal details form */}
          <div>
            {" "}
            <h4 className=" text-base font-bold text-primaryTextColor mb-7">
              Personal Details
            </h4>
            <form className=" grid grid-cols-2 gap-y-5 gap-x-8">
              <div className="">
                <label className=" text-sm font-normal text-secondaryTextColor mb-2">
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
                <label className=" text-sm font-normal text-secondaryTextColor mb-2">
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
              <div className="">
                <label className=" text-sm font-normal text-secondaryTextColor mb-2">
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
              <div className="">
                <label className=" text-sm font-normal text-secondaryTextColor mb-2">
                  Phone Number
                </label>
                <div className=" border border-lineColor rounded-lg ">
                  <input
                    type="text"
                    placeholder="(233) 244 123 456"
                    className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
                  />
                </div>
              </div>
            </form>
          </div>

          {/* physical address form */}
          <div>
            <h4 className=" text-base font-bold text-primaryTextColor mb-7">
              Physical Address
            </h4>
            {/* personal details form */}
            <form className=" grid grid-cols-2 gap-y-5 gap-x-8">
              <div className="">
                <label className=" text-sm font-normal text-secondaryTextColor mb-2">
                  Country
                </label>
                <Select_Input type={"text"} placeholder={"Ghana"} icon={true} />
              </div>
              <div className="">
                <label className=" text-sm font-normal text-secondaryTextColor mb-2">
                  City
                </label>
                <Select_Input type={"text"} placeholder={"Accra"} />
              </div>
              <div className="">
                <label className=" text-sm font-normal text-secondaryTextColor mb-2">
                  Address
                </label>
                <div className=" border border-lineColor rounded-lg ">
                  <input
                    type="email"
                    placeholder="Address"
                    className="text-primaryTextColor text-sm w-full h-full outline-none bg-transparent border-none p-3 "
                  />
                </div>
              </div>
            </form>
          </div>

          {/* language and currency form */}
          <div>
            <h4 className=" text-base font-bold text-primaryTextColor mb-7">
              Language & Currency
            </h4>
            {/* personal details form */}
            <form className=" grid grid-cols-2 gap-y-5 gap-x-8">
              <div className="">
                <label className=" text-sm font-normal text-secondaryTextColor mb-2">
                  Language
                </label>
                <Select_Input
                  type={"text"}
                  placeholder={"English"}
                  icon={true}
                />
              </div>
              <div className="">
                <label className=" text-sm font-normal text-secondaryTextColor mb-2">
                  Currency
                </label>
                <Select_Input type={"text"} placeholder={"Ghana Cedi"} />
              </div>
            </form>
          </div>
        </div>

        <div className=" h-9 w-full mt-7 flex items-center justify-between">
          {" "}
          <Button
            label={"Edit Details"}
            bstyles={
              " text-center py-2 bg-pBlue text-white text-sm rounded-md px-5"
            }
          />
          <Button
            label={"Delete Account"}
            bstyles={
              " text-center py-2 bg-pRed text-white text-sm rounded-md px-5"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Personal_Info;
