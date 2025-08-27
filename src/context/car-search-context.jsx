import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const CarSearchProvider = ({ children }) => {
  const [searchResults, setsearchResults] = useState([]);
  const [filterValues, setfilterValues] = useState({
    categories: [],
    brands: "",
    year: { min: "", max: "" },
    price: { min: 0, max: 0 },
  });
  const [filteredResults, setfilteredResults] = useState([]);
  return (
    <SearchContext.Provider
      value={{
        filterValues,
        setfilterValues,
        filteredResults,
        setfilteredResults,
        searchResults,
        setsearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

CarSearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCarSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useCarSearch must be used within a CarSearchProvider");
  }
  return context;
};
export default CarSearchProvider;
