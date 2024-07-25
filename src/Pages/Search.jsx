import { useState } from "react";
import FilterSidebar from "../Components/FilterSidebar";
import Search_Result from "../Components/Search_Result";

const Search = () => {
  const [selectedCriteria, setSelectedCriteria] = useState([]
    // categories: [],
    // brands: [],
    // price: { min: 0, max: 0 },
  );
  let updatedCategories;

  
  return (
    <div className=" bg-mainBGC">
      <div className=" bg-white py-9 text-center space-y-3">
        <h1 className=" text-3xl font-bold text-primaryTextColor">LOGO CARS</h1>
        <p className=" text-base text-secondaryTextColor font-normal">
          Find your perfect vehicle, narrow it down by price or whatever you
          want
        </p>
      </div>

      {/* searched results */}
      <div className=" py-12 flex gap-12 justify-center">
        <FilterSidebar
          selectedCriteria={selectedCriteria}
          setSelectedCriteria={setSelectedCriteria}
          updatedCategories={updatedCategories}
        />
        <Search_Result
          selectedCriteria={selectedCriteria}
          setSelectedCriteria={setSelectedCriteria}
          updatedCategories={updatedCategories}
        />
      </div>
    </div>
  );
};

export default Search;
