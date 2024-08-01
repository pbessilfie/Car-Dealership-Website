import { useState } from "react";
import { NavLink } from "react-router-dom";
import SingleCarExteriorPictures from "../Swiper/SingleCarExteriorPictures";
import SingleCarInteriorPictures from "../Swiper/SingleCarInteriorPictures";

const EI_Pictures = () => {
  const navlinks = ["Exterior", "Interior"];
  const [activeNav, setActiveNav] = useState("Exterior");
  return (
    <div className=" space-y-10">
      <h2 className=" text-3xl text-primaryTextColor font-bold text-center">
        A Beauty on the Road
      </h2>

      <nav className="relative mx-auto w-fit">
        {navlinks.map((navlink, index) => (
          <NavLink
            key={index}
            to={""}
            className={({ isActive }) =>
              isActive
                ? " text-lg font-semibold text-primaryTextColor px-2"
                : ""
            }
            onClick={() => setActiveNav(navlink)}
          >
            {navlink}
          </NavLink>
        ))}

        <div className="absolute h-1 w-full rounded-2xl bg-lineColor left-0 -bottom-2">
          <div
            className={`absolute  h-full w-1/2 rounded-2xl bg-primaryTextColor ${
              activeNav === "Exterior" ? "left-0" : "right-0"
            }`}
          ></div>
        </div>
      </nav>
      {activeNav === "Exterior" ? (
        <SingleCarExteriorPictures />
      ) : (
        <SingleCarInteriorPictures />
      )}
    </div>
  );
};

export default EI_Pictures;
