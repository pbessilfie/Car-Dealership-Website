import { IoIosList } from "react-icons/io";
import Select_Input from "./Select_Input";
import { useState } from "react";
import { BsFillGridFill, BsGrid } from "react-icons/bs";
import Search_Result_Cards from "../Cards/Search_Result_Cards";
import Car_Card from "../Cards/Car_Card";
import { useCarSearch } from "../../context/car-search-context";
const Search_Result = () => {
  const [gridview, setGridview] = useState(false);
  const [listview, setListview] = useState(true);
  const { searchResults } = useCarSearch();
  return (
    <div className=" bg-white rounded-md w-[60%] flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-lineColor">
        <span className=" text-xl font-semibold text-primaryTextColor">
          {searchResults.length === 0 ? "No" : searchResults.length} matches
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
        className={`overflow-y-scroll h-full border flex-1 ${
          listview
            ? " flex flex-col"
            : "grid grid-cols-3 place-items-center py-6 gap-y-8 px-24 "
        }`}
      >
        {searchResults.length === 0 ? (
          <div className="text-sm font-medium h-full w-full flex items-center justify-center border">
            No matches found
          </div>
        ) : (
          searchResults.map((car, index) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Search_Result;
