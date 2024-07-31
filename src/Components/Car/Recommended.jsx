import { Cars } from "../../constants";
import Car_Card from "../Cards/Car_Card";
import PropTypes from "prop-types";
const Recommended = ({ end }) => {
  return (
    <div className="">
      <h3 className=" text-primaryTextColor font-bold text-xl mb-2">
        Recommended
      </h3>
      <p className="text-sm text-secondaryTextColor font-normal mb-9">
        Discover all recommended offers
      </p>
      <div className="flex gap-5">
        {Cars.slice(0,  end ).map((car, index) => (
          <Car_Card
            key={index}
            carName={car.Carname}
            price={car.price}
            condition={car.condition}
            production_year={car.production_year}
            reviews={car.reviews}
            brand={car.brand}
            mileage={car.mileage}
            category={car.category}
          />
        ))}
      </div>
    </div>
  );
};
Recommended.propTypes = {
  end: PropTypes.number,
};
export default Recommended;
