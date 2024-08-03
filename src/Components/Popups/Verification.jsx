import { LiaTimesCircleSolid } from "react-icons/lia";
import { TbAsteriskSimple } from "react-icons/tb";
import Button from "../Common/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types'

const Verification = ({ setIsVerificationPopupOpen}) => {
  const [verificationProgress, setVerificationProgress] = useState(false);

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "5%", }}
      transition={{ duration: 1 }}
      className="relative rounded-xl bg-white p-36"
    >
      <div className=" w-[500px] flex flex-col items-center gap-10">
        <img src="/src/assets/ver-image.png" width={60} />
        <p className=" text-sm text-primaryTextColor text-center">
          Two-step verification is on. You’ll need to enter your PIN if you
          register your phone number on LOGO
        </p>
        <hr className=" border border-lineColor w-full" />
        <div>
          <h4 className=" text-sm text-secondaryTextColor mb-7">
            {verificationProgress
              ? "Enter your 6-digit PIN"
              : "Create a 6-digit PIN that you can remember"}
          </h4>

          <div className=" border-b-2 -lineColor flex justify-center items-center gap-3">
            <div className="flex">
              <div className="relative w-7 h-10">
                <input
                  type="password"
                  className="bg-transparent w-full h-full text-center text-lg text-primaryTextColor font-medium outline-none"
                />
                <TbAsteriskSimple className=" text-lg text-primaryTextColor absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
              </div>
              <div className="relative w-7 h-10">
                <input
                  type="password"
                  className="bg-transparent w-full h-full text-center text-lg text-primaryTextColor font-medium outline-none"
                />
                <TbAsteriskSimple className=" text-lg text-primaryTextColor absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
              </div>
              <div className="relative w-7 h-10">
                <input
                  type="password"
                  className="bg-transparent w-full h-full text-center text-lg text-primaryTextColor font-medium outline-none"
                />
                <TbAsteriskSimple className=" text-lg text-primaryTextColor absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
              </div>
            </div>
            <div className="flex">
              <div className="relative w-7 h-10">
                <input
                  type="password"
                  className="bg-transparent w-full h-full text-center text-lg text-primaryTextColor font-medium outline-none"
                />
                <TbAsteriskSimple className=" text-lg text-primaryTextColor absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
              </div>
              <div className="relative w-7 h-10">
                <input
                  type="password"
                  className="bg-transparent w-full h-full text-center text-lg text-primaryTextColor font-medium outline-none"
                />
                <TbAsteriskSimple className=" text-lg text-primaryTextColor absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
              </div>
              <div className="relative w-7 h-10">
                <input
                  type="password"
                  className="bg-transparent w-full h-full text-center text-lg text-primaryTextColor font-medium outline-none"
                />
                <TbAsteriskSimple className=" text-lg text-primaryTextColor absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
              </div>
            </div>
          </div>
        </div>
        {/* pagination buttons */}
        <div className="flex items-center gap-2">
          <div
            className={` h-2 w-2 rounded-full ${
              !verificationProgress ? "bg-pGreen" : "bg-secondaryTextColor2"
            } `}
            onClick={() => setVerificationProgress(false)}
          ></div>
          <div
            className={` h-2 w-2 rounded-full cursor-pointer ${
              verificationProgress ? "bg-pGreen" : "bg-secondaryTextColor2"
            } `}
          ></div>{" "}
        </div>
        <Button
          label={!verificationProgress ? "Next" : "Save"}
          bstyles={"bg-pGreen text-white rounded-md text-sm py-2 px-5"}
          handleClick={() => setVerificationProgress(true)}
        />{" "}
      </div>

      <LiaTimesCircleSolid
        className=" text-pRed text-3xl absolute top-7 right-7 cursor-pointer"
        onClick={() => setIsVerificationPopupOpen(false)}
      />
    </motion.div>
  );
};

Verification.propTypes ={
  isVericationPopupOpen: PropTypes.bool,
  setIsVerificationPopupOpen: PropTypes.func
}
export default Verification;
