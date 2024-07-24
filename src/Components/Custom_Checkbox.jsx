import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const Custom_Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={` w-5 h-5 border border-lineColor rounded-sm flex items-center justify-center cursor-pointer ${
        isChecked ? "bg-pBlue" : "bg-white"
      }`}
      onClick={() => setIsChecked(!isChecked)}
    >
      {isChecked && <FaCheck className="text-sm font-medium text-white" />}
    </div>
  );
};

export default Custom_Checkbox;
