import PropTypes from "prop-types";
import { useCarSearch } from "../../context/car-search-context";
const PriceInput = ({ limit }) => {
  const { setfilterValues } = useCarSearch();
  const handleChange = (e) => {
    const { value } = e.target;
    setfilterValues((prev) => ({
      ...prev,
      price: { ...prev.price, [limit.toLowerCase()]: value },
    }));
  };
  return (
    <div>
      <label className=" text-xs text-secondaryTextColor">
        From:{" "}
        <div className="relative w-[100px] mt-3 h-10 rounded-lg border border-lineColor">
          <div className=" absolute -top-2 left-3 bg-white px-1 py-px ">
            <span className=" text-xs text-primaryTextColor">{limit}</span>
          </div>
          <input
            type="number"
            placeholder={`${limit} Price`}
            className=" w-full h-full bg-transparent outline-none border-none placeholder:text-sm placeholder:font-medium placeholder:text-secondaryTextColor2 placeholder:text-center text-sm text-center p-2 text-primaryTextColor"
            onChange={handleChange}
          />{" "}
        </div>
      </label>
    </div>
  );
};

PriceInput.propTypes = {
  limit: PropTypes.string.isRequired,
};
export default PriceInput;
