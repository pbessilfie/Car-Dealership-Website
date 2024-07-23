import { Cars } from "../constants";
import Car_Card from "./Car_Card";

const RecentlyRented = () => {
  return (
    <div className="">
      <h3 className=" text-primaryTextColor font-bold text-xl mb-2">
        Recent Rentals
      </h3>
      <p className="text-sm text-secondaryTextColor font-normal mb-9">
        Discover all newly added rentals
      </p>
      <div className="flex gap-5">
        {Cars.slice(9, 13).map((car, index) => (
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
}

export default RecentlyRented