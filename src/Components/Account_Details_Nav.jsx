import { FaUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { MdCardMembership } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import PropTypes from "prop-types";

const Account_Details_Nav = ({ activeSN, setActiveSN }) => {
  const navItems = [
    {
      label: "Account Information",
      icon: (
        <div className=" rounded-full text-white text-2xl p-2 bg-[#D273EA]">
          <FaUser />
        </div>
      ),
    },
    {
      label: "Security",
      icon: (
        <div className=" rounded-full text-white text-2xl p-2 bg-pBlue">
          <IoMdLock />
        </div>
      ),
    },
    {
      label: "Membership Settings",
      icon: (
        <div className=" rounded-full text-white text-2xl p-2 bg-[#21BB9B]">
          <MdCardMembership />
        </div>
      ),
    },
    {
      label: "Sign out",
      icon: (
        <div className=" rounded-full text-white text-2xl p-2 bg-pOrange">
          <PiSignOutBold />
        </div>
      ),
    },
  ];

  return (
    <div className=" bg-white rounded-lg drop-shadow-md w-[300px]">
      <div className=" p-5 border-b border-lineColor">
        {" "}
        <h2 className=" text-xl text-primaryTextColor font-semibold">
          Account Details
        </h2>
      </div>

      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-3 bg-white hover:bg-[#eee] p-4 hover:border-l-4 hover:border-pBlue cursor-pointer ${
            activeSN === item.label && "border-l-4 border-pBlue bg-[#eee]"
          }`}
          onClick={() => setActiveSN(item.label)}
        >
          {item.icon}{" "}
          <span className=" text-primaryTextColor text-base font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
Account_Details_Nav.propTypes = {
  activeSN: PropTypes.string,
  setActiveSN: PropTypes.func,
};
export default Account_Details_Nav;
