import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
const Notification = ({ setIsNotificationOpen }) => {
  const [isNotificationExpanded, setIsNotificationExpanded] = useState(false);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="absolute top-[115%] right-3 bg-white rounded-xl w-[450px] h-fit z-50 overflow-hidden"
    >
      <div className=" p-4 flex items-center justify-between">
        <h2 className=" font-bold text-primaryTextColor text-xl">
          Notification
        </h2>
        <FaTimes
          className=" text-2xl text-primaryTextColor cursor-pointer"
          onClick={() => setIsNotificationOpen(false)}
        />
      </div>

      <div
        className="p-4 bg-mainBGC space-y-1"
        onClick={() => setIsNotificationExpanded(!isNotificationExpanded)}
      >
        <p
          className={` text-sm font-semibold text-primaryTextColor ${
            !isNotificationExpanded && "truncate"
          }`}
        >
          Upgrade your driving experience with our exclusive vehicle packages.
          Enjoy complimentary upgrades, premium insurance, and roadside
          assistance when you book a luxury or premium car. This limited-time
          offer includes a variety of models, from sleek sedans to powerful
          SUVs. Book now to take advantage of this incredible deal.
        </p>
        <span className="text-xs text-secondaryTextColor2 font-semibold">
          1 min ago
        </span>
      </div>
    </motion.div>
  );
};
Notification.propTypes = {
  setIsNotificationOpen: PropTypes.func.isRequired,
};
export default Notification;
