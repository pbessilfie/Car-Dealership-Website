import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Button from "../Common/Button";
import { GoDotFill } from "react-icons/go";
import Switch from "../Common/Switch";
import { CiMobile2 } from "react-icons/ci";
import { RiLoginBoxLine } from "react-icons/ri";

const Security = () => {
  return (
    <div className="bg-white rounded-md w-[60%] drop-shadow-md">
      {" "}
      <header className="px-6 py-4 border-b border-lineColor">
        <span className=" text-xl font-semibold text-primaryTextColor">
          Security
        </span>
      </header>
      <div className=" p-6 w-full">
        <div className=" w-full drop-shadow-md px-5 py-3 bg-white flex items-center justify-between mb-3">
          <div className="flex gap-4">
            {" "}
            <div className="relative w-12 h-12 bg-lineColor rounded-full overflow-hidden grid place-items-center">
              <div className=" bg-white rounded-full w-9 h-9 z-10"></div>
              <div className="absolute top-0 left-0 bg-pBlue h-16 w-[90%] -rotate-[45deg]"></div>
            </div>
            <div>
              <h3 className=" text-sm font-bold text-primaryTextColor">
                Your account security is 90%
              </h3>
              <p className=" text-xs text-secondaryTextColor ">
                Please review your account security settings regularly and
                update your password
              </p>
            </div>
          </div>

          <div className="flex gap-3 self-end">
            <Button
              label={"Dismiss"}
              bstyles={
                " border border-lineColor px-8 hover:drop-shadow-lg py-2 rounded-md text-secondaryTextColor text-sm bg-white"
              }
            />
            <Button
              label={"Review security"}
              bstyles={
                " bg-pBlue text-white px-8 hover:drop-shadow-lg py-2 rounded-md text-sm"
              }
            />
          </div>
        </div>

        <div className=" w-full py-3 border-b-2 border-lineColor ">
          <h3 className=" text-primaryTextColor font-bold text-base">Basics</h3>
        </div>

        <div className=" w-full py-3 border-b-2 border-lineColor flex justify-between">
          <div>
            <h3 className=" text-primaryTextColor font-bold text-base">
              Password
            </h3>
            <p className=" font-medium text-sm text-secondaryTextColor">
              Set password to protect your account
            </p>
          </div>

          <div className=" flex items-center gap-2">
            <div className=" text-[9px] text-primaryTextColor font-extrabold flex">
              <GoDotFill />
              <GoDotFill />
              <GoDotFill />
              <GoDotFill />
              <GoDotFill />
              <GoDotFill />
              <GoDotFill />
              <GoDotFill />
              <GoDotFill />
            </div>
            <IoCheckmarkCircleOutline className=" text-pGreen text-xl" />
            <span className=" text-pGreen text-sm font-normal">
              Very secure
            </span>
          </div>
          <div>
            <Button
              label={"Edit"}
              bstyles={
                " border border-lineColor px-5 hover:drop-shadow-lg py-2 rounded-md text-secondaryTextColor text-sm bg-white"
              }
            />
          </div>
        </div>
        <div className=" w-full py-3 border-b-2 border-lineColor flex justify-between items-center">
          <div>
            <h3 className=" text-primaryTextColor font-bold text-base">
              Password
            </h3>
            <p className=" font-medium text-sm text-secondaryTextColor">
              We recommend requiring a verification
              <br /> code in addition to your password
            </p>
          </div>

          <div className=" flex items-center gap-5">
            <Switch />
            <span className=" text-primaryTextColor text-sm font-semibold">
              Two-Step Verification
            </span>
          </div>
          <div>
            <Button
              label={"Edit"}
              bstyles={
                " border border-lineColor px-5 hover:drop-shadow-lg py-2 rounded-md text-secondaryTextColor text-sm bg-white"
              }
            />
          </div>
        </div>
        {/* Browsers and Devices logged in */}
        <div className=" w-full py-3 border-b-2 border-lineColor">
          <div>
            <h3 className=" text-primaryTextColor font-bold text-base">
              Browsers & Devices
            </h3>
            <p className=" font-medium text-sm text-secondaryTextColor">
              These browsers and devices are currently signed into your account.
              Remove unauthorized devices
            </p>
          </div>
        </div>

        <div>
          <div className=" w-full py-3 border-b-2 border-lineColor flex justify-between px-5">
            <div className="flex items-start gap-3">
              {" "}
              <CiMobile2 className=" text-pBlue text-3xl " />
              <div>
                <h3 className=" text-primaryTextColor font-bold text-base">
                  Samsung Galaxy S23 Ultra
                </h3>
                <p className=" font-medium text-sm text-secondaryTextColor">
                  Accra, Ghana - August 12, 2023 at 11:54 PM
                </p>
              </div>
            </div>

            <button className=" text-lineColor text-3xl">
              <RiLoginBoxLine />
            </button>
          </div>
          <div className=" w-full py-3 border-b-2 border-lineColor flex justify-between px-5">
            <div className="flex items-start gap-3">
              {" "}
              <img
                src="/src/assets/browser.png"
                className="browser icon"
                width={30}
              />{" "}
              <div>
                <h3 className=" text-primaryTextColor font-bold text-base">
                  Microsoft Edge on Dell Alienware 4
                </h3>
                <p className=" font-medium text-sm text-secondaryTextColor">
                  Accra, Ghana - August 12, 2023 at 11:54 PM
                </p>
              </div>
            </div>

            <button className=" text-lineColor text-3xl">
              <RiLoginBoxLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
