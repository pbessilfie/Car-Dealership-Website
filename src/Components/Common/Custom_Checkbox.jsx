import { FaCheck } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useCarSearch } from "../../context/car-search-context";
import { useState } from "react";

const Custom_Checkbox = ({ id, category }) => {
  const { setfilterValues } = useCarSearch();
  const [isChecked, setisChecked] = useState(false);

  const handleCheckboxChange = () => {
    setisChecked((prev) => !prev);
    setfilterValues((prev) => {
      const isCategorySelected = prev.categories.includes(category.category);
      return {
        ...prev,
        categories: isCategorySelected
          ? prev.categories.filter((cat) => cat !== category.category)
          : [...prev.categories, category.category],
      };
    });
  };

  return (
    <div
      id={id}
      className={`w-5 h-5 border border-lineColor rounded-sm flex items-center justify-center cursor-pointer ${
        isChecked ? "bg-pBlue" : "bg-white"
      }`}
      onClick={handleCheckboxChange}
    >
      {isChecked && <FaCheck className="text-sm font-medium text-white" />}
    </div>
  );
};

Custom_Checkbox.propTypes = {
  category: PropTypes.object,
  id: PropTypes.string.isRequired,
};

export default Custom_Checkbox;
