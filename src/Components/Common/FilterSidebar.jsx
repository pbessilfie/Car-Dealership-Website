import { categories } from "../../constants";
import Custom_Checkbox from "./Custom_Checkbox";
import { CiCalendar } from "react-icons/ci";
import Button from "../Common/Button";
import Select_Input from "../Common/Select_Input";
import PropTypes from "prop-types";
import { useState } from "react";

const FilterSidebar = ({ setSelectedCriteria, updatedCategories }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <div className=" h-fit bg-white w-80 rounded-md">
      <div className=" w-full p-6 border-b border-lineColor">
        <span className=" text-lg font-semibold text-primaryTextColor">
          Filters
        </span>
      </div>
      <div className="px-6">
        <div className=" border-b border-lineColor py-6 space-y-5">
          <div className="w-full flex justify-between items-center mb-5">
            {" "}
            <h3 className=" text-base text-primaryTextColor font-medium">
              Categories
            </h3>
            <div className=" bg-pBlue rounded-3xl h-[2px] w-4"></div>
          </div>
          <div>
            {" "}
            {categories.map((category, index) => (
              <div key={index} className="flex gap-2 items-center mb-2">
                <Custom_Checkbox
                  category={category}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  updatedCategories={updatedCategories}
                  setUpdatedCategories={updatedCategories}
                  setSelectedCriteria={setSelectedCriteria}
                />
                <span className=" text-sm text-primaryTextColor">
                  {category.category}
                </span>
              </div>
            ))}
          </div>

          {/* brand select input */}
          <Select_Input placeholder={"Enter a brand name"} />

          <div className=" flex items-center justify-between">
            <div className=" w-[100px] h-10 rounded-lg border border-lineColor flex">
              <input
                type="text"
                placeholder="Year"
                className=" w-2/3 h-full bg-transparent outline-none border-none placeholder:text-base placeholder:font-medium placeholder:text-secondaryTextColor2 p-2 text-primaryTextColor"
              />{" "}
              <div className=" w-10 h-full border-l border-lineColor flex items-center justify-center">
                <CiCalendar className="text-primaryTextColor text-2xl " />
              </div>
            </div>

            <div className=" bg-lineColor rounded-3xl h-[2px] w-4"></div>
            <div className=" w-[100px] h-10 rounded-lg border border-lineColor flex">
              <input
                type="text"
                placeholder="Year"
                className=" w-2/3 h-full bg-transparent outline-none border-none placeholder:text-base placeholder:font-medium placeholder:text-secondaryTextColor2 p-2 text-primaryTextColor"
              />{" "}
              <div className=" w-10 h-full border-l border-lineColor flex items-center justify-center">
                <CiCalendar className="text-primaryTextColor text-2xl " />
              </div>
            </div>
          </div>
        </div>

        <div className=" border-b border-lineColor py-6 space-y-5">
          <div className="w-full flex justify-between items-center mb-5">
            {" "}
            <h3 className=" text-base text-primaryTextColor font-medium">
              Price Range
            </h3>
            <div className=" bg-pBlue rounded-3xl h-[2px] w-4"></div>
          </div>

          {/* price range */}
          <div className=" flex items-center justify-between">
            <div>
              <label className=" text-xs text-secondaryTextColor">
                From:{" "}
                <div className="relative w-[100px] mt-3 h-10 rounded-lg border border-lineColor">
                  <div className=" absolute -top-2 left-3 bg-white px-1 py-px ">
                    <span className=" text-xs text-primaryTextColor">Min</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Price"
                    className=" w-full h-full bg-transparent outline-none border-none placeholder:text-base placeholder:font-medium placeholder:text-secondaryTextColor2 placeholder:text-center text-base text-center p-2 text-primaryTextColor"
                  />{" "}
                </div>
              </label>
            </div>

            <div className=" bg-lineColor rounded-3xl h-[2px] w-4"></div>
            <div>
              <label className=" text-xs text-secondaryTextColor">
                To:{" "}
                <div className="relative w-[100px] mt-3 h-10 rounded-lg border border-lineColor">
                  <div className=" absolute -top-2 left-3 bg-white px-1 py-px ">
                    <span className=" text-xs text-primaryTextColor">Min</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Price"
                    className=" w-full h-full bg-transparent outline-none border-none placeholder:text-base placeholder:font-medium placeholder:text-secondaryTextColor2 placeholder:text-center text-base text-center p-2 text-primaryTextColor"
                  />{" "}
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="py-6">
          <Button
            bstyles={
              "text-white bg-pBlue py-3 text-center text-base rounded-md cursor:pointer"
            }
            label={"Apply Filters"}
            // handleClick={() => {
            //   // setSelectedCriteria(updatedCategories);
            //   // console.log(updatedCategories);
            // }}
          />
        </div>
      </div>
    </div>
  );
};
FilterSidebar.propTypes = {
  setSelectedCriteria: PropTypes.func,
  updatedCategories: PropTypes.array,
};
export default FilterSidebar;
