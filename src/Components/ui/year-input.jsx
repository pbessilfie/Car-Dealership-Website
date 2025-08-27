import { CiCalendar } from "react-icons/ci";
import { useCarSearch } from "../../context/car-search-context";
import PropTypes from "prop-types";
const YearInput = ({ mode }) => {
  const { setfilterValues } = useCarSearch();
  return (
    <div className=" w-[100px] h-10 rounded-lg border border-lineColor flex">
      <input
        type="text"
        placeholder="Year"
        className=" w-full h-full bg-transparent outline-none border-none placeholder:text-base placeholder:font-medium placeholder:text-secondaryTextColor2 p-2 text-primaryTextColor"
        onChange={(e) => {
          const { value } = e.target;
          setfilterValues((prev) => ({
            ...prev,
            year: { ...prev.year, [mode.toLowerCase()]: value },
          }));
        }}
      />{" "}
      <div className=" w-10 h-full border-l border-lineColor flex items-center justify-center">
        <CiCalendar className="text-primaryTextColor text-2xl " />
      </div>
    </div>
  );
};
YearInput.propTypes = {
  mode: PropTypes.string,
};
export default YearInput;
