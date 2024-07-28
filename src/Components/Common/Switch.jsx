import { useState } from "react";

const Switch = () => {
  const [isON, setIsON] = useState(false);
  return (
    <div
      className={`relative h-[20px] w-10 rounded-full p-1 cursor-pointer transition-all duration-500  ${
        isON ? "bg-pBlue" : "bg-lineColor"
      }`}
      onClick={() => setIsON(!isON)}
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-white transition-all duration-500 ${
          isON ? "right-1" : "left-1"
        }`}
      ></div>
    </div>
  );
};

export default Switch;
