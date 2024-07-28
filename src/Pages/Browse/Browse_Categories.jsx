import { Outlet, useLocation, useNavigate } from "react-router";
import { categories } from "../../constants";
import { NavLink } from "react-router-dom";
// import "../App.css";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
const Browse_Categories = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => setActiveNav(location.pathname), [location]);

  const navigate = useNavigate();
  return (
    <div className=" bg-mainBGC p-8">
      <div className=" space-x-2 pl-44 mb-5">
        <span
          className=" font-normal text-base text-secondaryTextColor cursor-pointer"
          onClick={() => navigate("/browse")}
        >
          Browse
        </span>
        <FaChevronRight className=" text-base text-lineColor inline" />
        <span className=" font-normal text-base text-secondaryTextColor">
          Categories
        </span>
        <FaChevronRight className=" text-base text-lineColor inline" />
        <span className=" font-normal text-base text-pBlue">
          {activeNav.split("/")[3]}
        </span>
      </div>
      <div className=" w-1/2 mx-auto">
        <nav className="relative flex items-center justify-between w-full category-nav">
          {categories.map((category, index) => (
            <NavLink
              key={index}
              to={category.path}
              className={({ isActive }) =>
                isActive
                  ? " text-pBlue font-medium text-xl active-category"
                  : " text-secondaryTextColor font-medium text-xl hover:text-primaryTextColor active-category "
              }
            >
              {category.category}
            </NavLink>
          ))}
        </nav>
        <div className="relative h-1 rounded-3xl bg-lineColor w-full">
          <div
            className={`absolute top-0 h-full w-[10%] rounded-3xl bg-pGreen transition-all duration-500${
              activeNav === "/browse/categories/hatchbacks" && "left-0"
            } ${activeNav === "/browse/categories/sedans" && "left-[17.6%]"} ${
              activeNav === "/browse/categories/coupes" && "left-[33.2%]"
            } ${activeNav === "/browse/categories/vans" && "left-[48%]"} ${
              activeNav === "/browse/categories/wagons" && "left-[62.5%]"
            } ${activeNav === "/browse/categories/suvs" && "left-[77%]"} ${
              activeNav === "/browse/categories/trucks" && "right-0"
            }`}
          ></div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Browse_Categories;
