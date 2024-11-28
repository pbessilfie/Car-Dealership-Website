import { FaBell, FaCartShopping, FaChevronDown } from "react-icons/fa6";
import en_US from "../../assets/usa-flag.png"; // Adjust the path as necessary
import en_UK from "../../assets/UK_flag.png"; // Adjust the path as necessary
import fr_FR from "../../assets/fr-flag.png";
import { useState } from "react";
import { Navlinks } from "../../constants";
import { NavLink } from "react-router-dom";
import "../../App.css";
import Notification from "../Popups/Notification";

const Navbar = () => {
  const [isLangOptionOpen, setIsLangOptionOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const options = [
    { value: "en_US", label: "EN", icon: en_US },
    { value: "en_UK", label: "EN", icon: en_UK },
    { value: "fr_FR", label: "FR", icon: fr_FR },
  ];
  const [langSelect, setLangSelect] = useState(options[0]);
  const selectedLang = (index) => {
    setLangSelect(options[index]);
  };

  return (
    <div className=" sticky top-0 left-0 bg-white flex items-center justify-between font-lato drop-shadow-md px-20 h-20 z-50">
      <div className="relative flex items-center">
        {/* <span className=" text-3xl font-bold text-primaryTextColor px-4">
          LOGO
        </span> */}
        <img
          src="src/assets/AB Autohub Motors logo.png"
          alt="company logo"
          width={100}
          className=" px-4"
        />

        <div
          className=" flex items-center gap-3 border-l-2 px-4 border-lineColor"
          onClick={() => setIsLangOptionOpen(!isLangOptionOpen)}
        >
          <div className=" flex items-center gap-4 text-primaryTextColor text-xl cursor-pointer">
            <img
              src={langSelect.icon}
              alt={langSelect.value}
              width={25}
              className="bg-white"
            />
            <span>{langSelect.label}</span>
          </div>
          <button className=" text-secondaryTextColor text-xl">
            <FaChevronDown />
          </button>
        </div>

        {/* languages dropdown */}
        {isLangOptionOpen && (
          <div className="absolute right-0 top-12 border border-lineColor  w-32 rounded-lg bg-white overflow-hidden">
            {options.map((option, index) => (
              <div
                key={option.value}
                onClick={() => {
                  selectedLang(index);
                  setIsLangOptionOpen(!isLangOptionOpen);
                }}
                className={
                  option.value == langSelect.value
                    ? "bg-pBlue text-white text-xl flex gap-4 items-center cursor-pointer px-4 py-1"
                    : " hover:bg-pBlue text-primaryTextColor hover:text-white text-xl flex gap-4 items-center cursor-pointer px-4 py-1"
                }
              >
                <img
                  src={option.icon}
                  alt={option.value}
                  width={25}
                  className="bg-white"
                />
                <h4>{option.label}</h4>
              </div>
            ))}
          </div>
        )}
      </div>

      <nav className=" h-full relative  flex items-center my-auto">
        {Navlinks.map((link) => (
          <NavLink
            key={link.value}
            to={link.path}
            className={({ isActive }) =>
              !isActive
                ? "text-xl font-medium text-secondaryTextColor hover:text-primaryTextColor hover:font-semibold navlinks py-6"
                : "text-primaryTextColor font-semibold text-xl navlinks py-6 active"
            }
          >
            {link.label}
          </NavLink>
        ))}
        <div className="animation start-home "></div>
      </nav>

      {/* <div className="flex gap-4">
        <Button
          navigate={"/sign-in"}
          label={"Log In"}
          bstyles={
            " border border-lineColor px-8 hover:drop-shadow-lg py-2 rounded-md text-secondaryTextColor text-lg bg-white"
          }
        />
        <Button
          label={"Sign Up"}
          navigate={"/sign-up"}
          bstyles={
            " bg-pBlue text-white px-8 hover:drop-shadow-lg py-2 rounded-md text-lg"
          }
        />
      </div> */}

      <div className="flex items-center text-lineColor ">
        <div
          className={`border-r-2 border-l-2 px-6 py-2 border-lineColor ${
            isNotificationOpen && " border-r-primaryTextColor"
          }`}
        >
          {" "}
          <FaCartShopping className=" text-secondaryTextColor text-xl cursor-pointer" />
        </div>

        <div
          className={`border-r-2 px-6 py-2 border-lineColor ${
            isNotificationOpen && " bg-lineColor text-primaryTextColor"
          }`}
        >
          {" "}
          <button className=" relative">
            <FaBell
              className={`${
                isNotificationOpen
                  ? "text-primaryTextColor"
                  : "text-secondaryTextColor"
              }  text-xl cursor-pointer`}
              onClick={() => setIsNotificationOpen(true)}
            />
            <div className="border border-white bg-pRed text-white text-xs rounded-full w-3 h-3 grid place-items-center  absolute -right-1 -top-1"></div>
          </button>
        </div>
        <div className=" px-6">
          <div className=" w-12 h-12 rounded-full overflow-hidden cursor-pointer">
            <img
              src="src/assets/profile-pic.jpg"
              alt="profile-pic"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      {isNotificationOpen && (
        <Notification setIsNotificationOpen={setIsNotificationOpen} />
      )}
    </div>
  );
};

export default Navbar;
