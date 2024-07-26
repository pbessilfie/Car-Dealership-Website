import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import PropTypes from "prop-types";
const Select_Input = ({placeholder,type, icon}) => {
  return (
    <div className=" w-full h-10 rounded-lg border border-lineColor flex">
      {icon && (
        <div className="p-2 h-full grid place-items-center">
          <img
            src="/src/assets/usa-flag.png"
            alt="country flag"
            width={25}
            className="bg-white my-auto"
          />{" "}
        </div>
      )}

      <input
        type={type}
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
  type: PropTypes.string,
  icon: PropTypes.bool,
};

export default Select_Input