import { popularBrands } from "../../constants/popular-brands";

const Car_Brands = () => {
  return (
    <div className=" py-7  flex justify-center items-center mt-20">
      <div>
        <h3 className=" text-primaryTextColor font-bold text-xl mb-6">
          Popular Brands
        </h3>
        <div className="flex gap-6">
          {popularBrands.map((brand) => (
            <div
              key={brand.brand}
              className="bg-white rounded-md drop-shadow-md w-28 h-24 flex flex-col justify-evenly items-center"
            >
              <img src={brand.imgSrc} width={50} className="" />
              <span className=" text-base text-primaryTextColor font-normal ">
                {brand.totalNumber}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Car_Brands;
