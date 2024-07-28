import { BiSearchAlt2 } from "react-icons/bi";
import Button from "../Components/Button";
import FAQCatNav from "../Components/FAQCatNav";
import FAQ_Response from "../Components/FAQ_Response";
import { useState } from "react";

const Help = () => {
  const [activeCatNav, setActiveCatNav] = useState("General Information");
  return (
    <div className=" bg-mainBGC p-16 ">
      <div className=" rounded-xl bg-white drop-shadow-md flex overflow-hidden h-[80vh]">
        <div className="relative w-[40%]">
          <img
            src="/src/assets/faq-mage.jpg"
            className=" h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.3)] px-16 grid place-items-center">
            <div className="text-center space-y-3 my-auto">
              <h2 className=" text-white text-3xl font-semibold">
                HOW CAN WE HELP YOU?
              </h2>
              <p className=" text-white text-sm">
                lorem ipsum dolor sit ament, consectetur adipicsing elit, set do
                eiusmod tepor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className=" h-10 rounded-lg bg-white flex px-5">
                <input
                  type="search"
                  placeholder="Type to search..."
                  className=" text-primaryTextColor text-sm placeholder:text-sm placeholder:text-secondaryTextColor h-full flex-1 bg-transparent outline-none"
                />

                <button>
                  <BiSearchAlt2 className=" text-secondaryTextColor text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-2/3 px-5 py-32">
          <h2 className=" text-xl text-primaryTextColor font-semibold mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className=" text-sm text-secondaryTextColor2 mb-4">
            Discover all FAQ categories
          </p>

          <div className=" flex justify-between gap-3 ">
            <div className="w-[300px] space-y-10">
              <FAQCatNav
                activeCatNav={activeCatNav}
                setActiveCatNav={setActiveCatNav}
              />

              <div className=" w-full flex flex-col items-start gap-4">
                <h2 className=" text-xl text-primaryTextColor font-semibold">
                  Still have questions?{" "}
                </h2>{" "}
                <p className=" text-sm text-secondaryTextColor2">
                  Can’t find what you’re looking for? Please contact our
                  customer service
                </p>
                <Button
                  label={"Contact us"}
                  bstyles={
                    "bg-pBlue text-white rounded-md py-3 px-4 text-sm hover:drop-shadow-sm"
                  }
                />
              </div>
            </div>

            <FAQ_Response activeCatNav={activeCatNav} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
