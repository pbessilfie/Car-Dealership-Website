import { Reviews } from "../../constants";
import Car_Review_Card from "../Cards/Car_Review_Card";
import { motion } from "framer-motion";

const CarReview = () => {
  const C_Reviews = Reviews;
  return (
    <div className=" overflow-hidden ">
      <h2 className=" text-xl text-primaryTextColor font-bold mb-10">
        Car Review{" "}
        <span className=" font-bold text-base text-secondaryTextColor">
          ({C_Reviews.length})
        </span>
      </h2>

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-195%" }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="flex gap-7"
      >
        {C_Reviews.map((review, index) => (
          <Car_Review_Card
            key={index}
            summary={review.summary}
            date={review.date}
            product={review.product}
            reviewer={review.reviewer}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CarReview;
