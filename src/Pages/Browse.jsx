import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import Button from "../Components/Button";
import MySwiper from "../Components/MySwiper";
import MySwiper2 from "../Components/MySwiper2";
import Recommended from "../Components/Recommended";
import RecentlyAdded from "../Components/RecentlyAdded";
import RecentlyRented from "../Components/RecentlyRented";
import Car_Brands from "../Components/Car_Brands";
import Top_Offers from "../Components/Top_Offers";

const Browse = () => {
  return (
    <div className=" bg-mainBGC p-20 ">
      <div className="flex mx-auto h-[70vh] rounded-xl drop-shadow-md bg-white overflow-hidden">
        <div className=" flex-1 py-28 px-24 self-end">
          <div className="flex gap-4 items-center pl-6 mb-10">
            <div className="px-2 py-1 bg-lineColor rounded-sm">
              <span className=" font-normal text-primaryTextColor text-sm">
                Top Offers
              </span>
            </div>
            <div className="px-2 py-1 bg-lineColor rounded-sm">
              <span className=" font-normal text-primaryTextColor text-sm">
                Rentals
              </span>
            </div>
            <div className="px-2 py-1 bg-lineColor rounded-sm">
              <span className=" font-normal text-primaryTextColor text-sm">
                Guarantees
              </span>
            </div>
          </div>
          <div className=" border-l-4 border-pBlue text-4xl text-primaryTextColor font-bold px-8 mb-6">
            <h1>The Smarter way to</h1>
            <h1>buy or rent a new or used car</h1>
          </div>
          <div className=" text-secondaryTextColor text-lg font-normal px-8 mb-10">
            <p>
              Choose from a wide range of cars across multiple brands and
              categories with the best quality you can ever imagine
            </p>
          </div>
          <div className="flex gap-1 mb-36 pl-6">
            <Button
              label={"Buy Now"}
              bstyles={
                "bg-pBlue text-white text-base font-normal text-center px-8 py-2 rounded-md"
              }
            />
            <Button
              label={"Rent Now"}
              bstyles={
                "bg-white border border-lineColor text-secondaryTextColor text-base font-normal text-center rounded-md px-8 py-2 "
              }
            />
          </div>

          <div className="flex gap-4 pl-6">
            <div className=" p-2 bg-secondaryTextColor text-white rounded-full cursor-pointer text-lg">
              <FaFacebookF />
            </div>
            <div className=" p-2 bg-secondaryTextColor text-white rounded-full cursor-pointer text-lg">
              <FaTwitter />
            </div>
            <div className=" p-2 bg-secondaryTextColor text-white rounded-full cursor-pointer text-lg">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className=" relative h-full w-[55%] p-16">
          <h1 className=" font-bold text-white text-3xl z-40">Top Offers</h1>
          <div className="absolute top-0 left-0 h-full z-10 w-full bg-[rgba(0,0,0,0.3)]"></div>
          <MySwiper2 />
          <MySwiper />
        </div>
      </div>

      {/* browse car categories */}
      <div className=" py-7  flex justify-center items-center mt-20">
        <div>
          <h3 className=" text-primaryTextColor font-bold text-xl mb-6">
            Browse categories
          </h3>
          <div className="flex gap-7 mx-auto">
            <div className="group relative w-36 h-24 rounded-md overflow-hidden">
              <h4 className="text-white text-sm font-semibold absolute top-3 left-3 z-20">
                Hatchback
              </h4>
              <img
                src="/src/assets/car-category-photo.png"
                className=" object-cover h-full w-full absolute top-0 left-0 z-10 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group relative w-36 h-24 rounded-md overflow-hidden">
              <h4 className="text-white text-sm font-semibold absolute top-3 left-3 z-20">
                Sedan
              </h4>
              <img
                src="/src/assets/photo_5_2024-07-08_14-35-22 1.png"
                className=" object-cover h-full w-full absolute top-0 left-0 z-10 group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="group relative w-36 h-24 rounded-md overflow-hidden">
              <h4 className="text-white text-sm font-semibold absolute top-3 left-3 z-20">
                Coupe
              </h4>
              <img
                src="/src/assets/photo_1_2024-07-08_14-35-22 1.png"
                className=" object-cover h-full w-full absolute top-0 left-0 z-10 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group relative w-36 h-24 rounded-md overflow-hidden">
              <h4 className="text-white text-sm font-semibold absolute top-3 left-3 z-20">
                Van
              </h4>
              <img
                src="/src/assets/photo_2_2024-07-08_14-35-22 1.png"
                className=" object-cover h-full w-full absolute top-0 left-0 z-10 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group relative w-36 h-24 rounded-md overflow-hidden">
              <h4 className="text-white text-sm font-semibold absolute top-3 left-3 z-20">
                SUV
              </h4>
              <img
                src="/src/assets/photo_3_2024-07-08_14-35-22 1.png"
                className=" object-cover h-full w-full absolute top-0 left-0 z-10 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group relative w-36 h-24 rounded-md overflow-hidden">
              <h4 className="text-white text-sm font-semibold absolute top-3 left-3 z-20">
                Wagon
              </h4>
              <img
                src="/src/assets/photo_4_2024-07-08_14-35-22 1.png"
                className=" object-cover h-full w-full absolute top-0 left-0 z-10 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* recommended cars */}
      <div className="py-7 flex justify-center items-center mt-20">
        {" "}
        <RecentlyAdded />
      </div>
      <Car_Brands />
      <div className="py-7 flex justify-center items-center mt-20">
        {" "}
        <Recommended />
      </div>
      <div className="py-7 flex justify-center items-center mt-20">
        <Top_Offers />
      </div>
      <div className="py-7 flex justify-center items-center mt-20">
        {" "}
        <RecentlyRented />
      </div>
    </div>
  );
};

export default Browse;
