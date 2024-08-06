import { FaChevronDown } from "react-icons/fa6";
import en_US from "/src/assets/usa-flag.png"; // Adjust the path as necessary
import en_UK from "/src/assets/UK_flag.png"; // Adjust the path as necessary
import fr_FR from "/src/assets/fr-flag.png";
import { useState } from "react";
import { Navlinks } from "../../constants";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import "../../App.css";

const Navbar = () => {
  const [isLangOptionOpen, setIsLangOptionOpen] = useState(false);

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
    <div className="bg-white flex items-center justify-between font-lato drop-shadow-md px-20 h-20">
      <div className="relative flex items-center">
        <span className=" text-3xl font-bold text-primaryTextColor px-4">
          LOGO
        </span>

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

      <div className="flex gap-4">
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
      </div>
    </div>
  );
};

export default Navbar;
