import { FaUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { MdCardMembership } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";

const Account_Details_Nav = () => {
  return (
    <div className=" bg-white rounded-lg drop-shadow-md w-[300px]">
      <div className=" p-5 border-b border-lineColor">
        {" "}
        <h2 className=" text-xl text-primaryTextColor font-semibold">
          Account Details
        </h2>
      </div>

      <div className=" flex items-center gap-3 bg-white hover:bg-[#eee] p-4 hover:border-l-4 hover:border-pBlue">
        <div className=" rounded-full text-white text-2xl p-2 bg-[#D273EA]">
          <FaUser />
        </div>
        <span className=" text-primaryTextColor text-base font-medium">
          Account Information
        </span>
      </div>
      <div className=" flex items-center gap-3 bg-white hover:bg-[#eee] p-4 hover:border-l-4 hover:border-pBlue">
        <div className=" rounded-full text-white text-2xl p-2 bg-pBlue">
          <IoMdLock />
        </div>
        <span className=" text-primaryTextColor text-base font-medium">
          Security
        </span>
      </div>
      <div className=" flex items-center gap-3 bg-white hover:bg-[#eee] p-4 hover:border-l-4 hover:border-pBlue">
        <div className=" rounded-full text-white text-2xl p-2 bg-[#21BB9B]">
          <MdCardMembership />
        </div>
        <span className=" text-primaryTextColor text-base font-medium">
          Membership
        </span>
      </div>
      <div className=" flex items-center gap-3 bg-white hover:bg-[#eee] p-4 hover:border-l-4 hover:border-pBlue">
        <div className=" rounded-full text-white text-2xl p-2 bg-pOrange">
          <PiSignOutBold />
        </div>
        <span className=" text-primaryTextColor text-base font-medium">
          Sign out
        </span>
      </div>
    </div>
  );
};

export default Account_Details_Nav;
