import Category_Card from "../Components/Category_Card";
import { Cars } from "../constants";

const Trucks = () => {
  return (
    <div className=" mt-[3%]">
      <div className="grid grid-cols-3 gap-x-5 gap-y-8 place-items-center px-44">
        {Cars.filter((car) => car.category == "Truck").map((car, index) => (
          <Category_Card
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

export default Trucks