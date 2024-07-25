import { IoIosList } from "react-icons/io";
import Select_Input from "./Select_Input";
import { useState } from "react";
import { BsFillGridFill, BsGrid } from "react-icons/bs";
import Search_Result_Cards from "./Search_Result_Cards";
import { Cars } from "../constants";
import Car_Card from "./Car_Card";
import PropTypes from "prop-types";
const Search_Result = ({
  selectedCriteria,
  // setSelectedCriteria,
  // updatedCategories,
  // setUpdatedCategories,
}) => {
  const [gridview, setGridview] = useState(false);
  const [listview, setListview] = useState(true);
  // console.log(selectedCriteria);
  const filterResults = Cars.filter((car) =>
    selectedCriteria.includes(car.category)
  );
  return (
    <div className=" bg-white rounded-md w-[60%]">
      <header className="flex items-center justify-between px-6 py-4 border-b border-lineColor">
        <span className=" text-xl font-semibold text-primaryTextColor">
          {filterResults.length} matches
        </span>

        <div className=" flex items-center gap-12">
          <div className=" text-2xl gap-3 flex items-center ">
            <button
              className={listview ? "text-pBlue" : " text-primaryTextColor"}
              onClick={() => {
                setListview(!listview);
                setGridview(false);
              }}
            >
              <IoIosList />
            </button>
            <span className="text-lineColor">|</span>

            <button
              className={"text-primaryTextColor"}
              onClick={() => {
                setGridview(!gridview);
                setListview(false);
              }}
            >
              {!gridview ? (
                <BsGrid className="text-primaryTextColor" />
              ) : (
                <BsFillGridFill className="text-pBlue" />
              )}
            </button>
          </div>
          <div className="w-72">
            {" "}
            <Select_Input placeholder={"Filter (Ascend)"} />
          </div>
        </div>
      </header>
      <div
        className={
          listview
            ? " flex flex-col"
            : "grid grid-cols-3 place-items-center py-6 gap-y-8 px-24"
        }
      >
        {" "}
        {filterResults.map((car, index) => (
          <div key={index}>
            {listview ? (
              <Search_Result_Cards
                carName={car.Carname}
                price={car.price}
                condition={car.condition}
                production_year={car.production_year}
                reviews={car.reviews}
                brand={car.brand}
                mileage={car.mileage}
                category={car.category}
              />
            ) : (
              <Car_Card
                carName={car.Carname}
                price={car.price}
                condition={car.condition}
                production_year={car.production_year}
                reviews={car.reviews}
                brand={car.brand}
                mileage={car.mileage}
                category={car.category}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
Search_Result.propTypes = {
  selectedCriteria: PropTypes.object,
  // setSelectedCriteria: PropTypes.func,
  // updatedCategories: PropTypes.array,
  // setUpdatedCategories: PropTypes.array,
};
export default Search_Result;
