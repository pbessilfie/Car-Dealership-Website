import { Cars, categories } from "../../constants";
import Custom_Checkbox from "./Custom_Checkbox";
import Button from "../Common/Button";
import Select_Input from "../Common/Select_Input";
import PropTypes from "prop-types";
import { useCarSearch } from "../../context/car-search-context";
import PriceInput from "../ui/price-input";
import YearInput from "../ui/year-input";

const FilterSidebar = () => {
  const { filterValues, setfilterValues, setsearchResults } = useCarSearch();
  const ApplyFilters = () => {
    const { categories, brands, year, price } = filterValues;
    const filteredCars = Cars.filter(
      (car) =>
        (categories.length === 0 || categories.includes(car.category)) &&
        (brands === "" || car.brand === brands) &&
        (year.min === "" || car.year >= year.min) &&
        (year.max === "" || car.year <= year.max) &&
        (price.min === 0 || car.price >= price.min) &&
        (price.max === 0 || car.price <= price.max)
    );
    setsearchResults(filteredCars);
  };
  return (
    <div className=" h-fit bg-white w-80 rounded-md sticky top-24">
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
                <Custom_Checkbox category={category} id={category} />
                <lable
                  htmlFor={category}
                  className=" text-sm text-primaryTextColor"
                >
                  {category.category}
                </lable>
              </div>
            ))}
          </div>

          {/* brand select input */}
          <Select_Input
            type={"text"}
            placeholder={"Enter a brand name"}
            handleChange={(e) => {
              const { value } = e.target;
              setfilterValues((prev) => ({ ...prev, brands: value }));
            }}
          />

          <div className=" flex items-center justify-between">
            <YearInput mode={"min"} />
            <div className=" bg-lineColor rounded-3xl h-[2px] w-4"></div>
            <YearInput mode={"max"} />
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
          <div className=" flex items-center justify-between ">
            <PriceInput limit="Min" />
            <div className=" bg-lineColor rounded-3xl h-[2px] w-4"></div>
            <PriceInput limit="Max" />
          </div>
        </div>

        <div className="py-6">
          <Button
            bstyles={
              "text-white bg-pBlue py-3 text-center text-base rounded-md cursor:pointer"
            }
            label={"Apply Filters"}
            handleClick={ApplyFilters}
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
