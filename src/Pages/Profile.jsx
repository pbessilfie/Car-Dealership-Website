import { useState } from "react";
import Account_Details_Nav from "../Components/Account/Account_Details_Nav";
import Membership_Info from "../Components/Account/Membership_Info";
import Personal_Info from "../Components/Account/Personal_Info";
import Security from "../Components/Account/Security";
import Edit_Password from "../Components/Popups/Edit_Password";
import Verification from "../Components/Popups/Verification";
import Billing from "../Components/Account/Billing";

const Profile = () => {
  const [activeSN, setActiveSN] = useState("Account Information");
  const [isPasswordResetPopupOpen, setIsPasswordResetPopupOpen] =
    useState(false);
  const [isVerificationPopupOpen, setIsVerificationPopupOpen] = useState(false);

  const activeSettings = () => {
    let key = activeSN;
    switch (key) {
      case "Membership Settings":
        return <Membership_Info />;
      case "Billing and Payments":
        return <Billing />;
      case "Security":
        return (
          <Security
            setIsPasswordResetPopupOpen={setIsPasswordResetPopupOpen}
            setIsVerificationPopupOpen={setIsVerificationPopupOpen}
          />
        );

      default:
        return <Personal_Info />;
    }
  };
  return (
    <div className=" bg-mainBGC flex items-start justify-center gap-14 py-28">
      <Account_Details_Nav setActiveSN={setActiveSN} activeSN={activeSN} />
      {activeSettings()}

      {isPasswordResetPopupOpen && (
        <div className=" fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] h-full w-full grid place-items-center">
          <Edit_Password
            isPasswordResetPopupOpen={isPasswordResetPopupOpen}
            setIsPasswordResetPopupOpen={setIsPasswordResetPopupOpen}
          />
        </div>
      )}
      {isVerificationPopupOpen && (
        <div className=" fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] h-full w-full grid place-items-center">
          <Verification
            // isVerificationPopupOpen={isVerificationPopupOpen}
            setIsVerificationPopupOpen={setIsVerificationPopupOpen}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
