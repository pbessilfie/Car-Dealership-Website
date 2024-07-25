import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import PropTypes from "prop-types";
const Select_Input = ({placeholder}) => {
  return (
    <div className=" w-full h-10 rounded-lg border border-lineColor flex">
      <input
        type="text"
        placeholder={placeholder}
        className=" h-full bg-transparent outline-none border-none placeholder:text-base placeholder:font-medium placeholder:text-secondaryTextColor2 p-2 flex-1 text-primaryTextColor"
      />
      <div className=" w-10 h-full border-l border-lineColor flex items-center justify-center">
        <div>
          <FaChevronUp className=" text-sm mx-auto" />
          <FaChevronDown className=" text-sm mx-auto" />
        </div>
      </div>
    </div>
  );
}


Select_Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Select_Input