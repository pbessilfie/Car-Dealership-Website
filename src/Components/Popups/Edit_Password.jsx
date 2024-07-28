import { LiaTimesCircleSolid } from "react-icons/lia";
import Button from "../Common/Button";
import PropTypes from "prop-types";
const Edit_Password = ({
  isPasswordResetPopupOpen,
  setIsPasswordResetPopupOpen,
}) => {
  return (
    <div className="relative rounded-xl bg-white p-36">
      <form className=" gap-5 flex flex-col items-center">
        <div className=" space-y-2">
          <label className=" text-base text-primaryTextColor font-semibold">
            Current Password
          </label>
          <div className=" h-10 w-[500px] rounded-lg border border-lineColor">
            <input
              type="password"
              placeholder="Enter old password"
              className=" w-full h-full bg-transparent outline-none placeholder:text-sm placeholder:text-secondaryTextColor2 px-3"
            />
          </div>
        </div>
        <div className=" space-y-2">
          <label className=" text-base text-primaryTextColor font-semibold">
            New Password
          </label>
          <div className=" h-10 w-[500px] rounded-lg border border-lineColor">
            <input
              type="password"
              placeholder="Enter new password"
              className=" w-full h-full bg-transparent outline-none placeholder:text-sm placeholder:text-secondaryTextColor2 px-3"
            />
          </div>
        </div>
        <div className=" space-y-2">
          <label className=" text-base text-primaryTextColor font-semibold">
            Confirm Password
          </label>
          <div className=" h-10 w-[500px] rounded-lg border border-lineColor">
            <input
              type="password"
              placeholder="Confirm password"
              className=" w-full h-full bg-transparent outline-none placeholder:text-sm placeholder:text-secondaryTextColor2 px-3"
            />
          </div>
        </div>
        <div className="mx-auto">
          <Button
            label={"Save changes"}
            bstyles={"bg-pBlue text-white rounded-md text-sm py-2 px-7"}
          />
        </div>
      </form>

      <LiaTimesCircleSolid
        className=" text-pRed text-3xl absolute top-7 right-7 cursor-pointer"
        onClick={() => setIsPasswordResetPopupOpen(!isPasswordResetPopupOpen)}
      />
    </div>
  );
};
Edit_Password.propTypes = {
  isPasswordResetPopupOpen: PropTypes.bool,
  setIsPasswordResetPopupOpen: PropTypes.func,
};
export default Edit_Password;
