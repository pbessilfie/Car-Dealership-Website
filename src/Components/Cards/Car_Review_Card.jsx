import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";
const Car_Review_Card = ({ reviewer, date, summary, product }) => {
  return (
    <div className=" bg-white rounded-md w-[417px] p-4 flex-shrink-0">
      <div className=" flex mb-6 justify-between">
        <div className="flex gap-5 items-center">
          {" "}
          <div className=" w-[70px] h-[70px] rounded-full overflow-hidden">
            <img
              src="/src/assets/profile-pic.jpg"
              alt="customer profile pic"
              className=" h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className=" text-base font-semibold text-primaryTextColor">
              {reviewer}
            </h3>
            <div className=" inline space-x-2">
              <FaStar className=" text-sm text-yellow-500 inline" />
              <FaStar className=" text-sm text-yellow-500 inline" />
              <FaStar className=" text-sm text-yellow-500 inline" />
              <FaStar className=" text-sm text-yellow-500 inline" />
              <FaStar className=" text-sm text-lineColor inline" />
            </div>{" "}
          </div>
        </div>

        <span className=" text-xs text-secondaryTextColor2 font-medium">
          {date}
        </span>
      </div>
      <p className=" text-sm text-secondaryTextColor font-medium">
        <span className="text-primaryTextColor font-bold">{product}</span>
        {summary}
      </p>
    </div>
  );
};

Car_Review_Card.propTypes = {
  reviewer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};
export default Car_Review_Card;
