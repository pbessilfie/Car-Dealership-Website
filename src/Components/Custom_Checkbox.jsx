import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import PropTypes from "prop-types";

const Custom_Checkbox = ({
  category,
  selectedCategories,
  setSelectedCategories,
  updatedCategories,
  setSelectedCriteria,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(selectedCategories.includes(category.category));
  }, [selectedCategories, category]);

  const handleCheckboxClick = () => {
    if (isChecked) {
      updatedCategories = selectedCategories.filter(
        (cat) => cat !== category.category
      );
    } else {
      updatedCategories = [...selectedCategories, category.category];
    }
    setSelectedCategories(updatedCategories);
    setIsChecked(!isChecked);
    setSelectedCriteria(updatedCategories);
    return updatedCategories;
  };

  return (
    <div
      className={`w-5 h-5 border border-lineColor rounded-sm flex items-center justify-center cursor-pointer ${
        isChecked ? "bg-pBlue" : "bg-white"
      }`}
      onClick={handleCheckboxClick}
    >
      {isChecked && <FaCheck className="text-sm font-medium text-white" />}
    </div>
  );
};

Custom_Checkbox.propTypes = {
  category: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedCategories: PropTypes.func.isRequired,
  setSelectedCriteria: PropTypes.func.isRequired,
  updatedCategories: PropTypes.array,
};

export default Custom_Checkbox;
