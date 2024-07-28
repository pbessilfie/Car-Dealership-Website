import { FaChevronUp } from "react-icons/fa6";
import { FAQ } from "../constants";
import { useState } from "react";
import PropTypes from "prop-types";

const FAQ_Response = ({ activeCatNav }) => {
  const [activeAnswerIndex, setActiveAnswerIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveAnswerIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="drop-shadow-md p-3 rounded-lg flex-1 bg-white">
      {FAQ.filter((item) => item.category === activeCatNav).map((item) =>
        item.questions.map((question, index) => (
          <div
            key={index}
            className="border-b-2 border-lineColor p-3 min-h-12 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex justify-between items-center w-full">
              <h3 className="text-primaryTextColor font-medium text-base">
                {question.title}
              </h3>
              <FaChevronUp
                className={`text-base text-lineColor cursor-pointer ${
                  activeAnswerIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            <p
              className={`${
                activeAnswerIndex !== index ? "hidden" : ""
              } text-sm text-secondaryTextColor px-3 mt-3`}
            >
              {question.answer}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

FAQ_Response.propTypes = {
  activeCatNav: PropTypes.string.isRequired,
};

export default FAQ_Response;
