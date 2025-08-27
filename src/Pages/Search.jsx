import FilterSidebar from "../Components/Common/FilterSidebar";
import Search_Result from "../Components/Common/Search_Result";

const Search = () => {
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
        <FilterSidebar />
        <Search_Result />
      </div>
    </div>
  );
};

export default Search;
