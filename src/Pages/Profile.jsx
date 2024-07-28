import { useState } from "react";
import Account_Details_Nav from "../Components/Account/Account_Details_Nav";
import Membership_Info from "../Components/Account/Membership_Info";
import Personal_Info from "../Components/Account/Personal_Info";
import Security from "../Components/Account/Security";

const Profile = () => {
  const [activeSN, setActiveSN] = useState("Account Information");

  const activeSettings = () => {
    let key = activeSN;
    switch (key) {
      case "Membership Settings":
        return <Membership_Info />;
      case "Security":
        return <Security />;

      default:
        return <Personal_Info />;
    }
  };
  return (
    <div className=" bg-mainBGC flex items-start justify-center gap-14 py-28">
      <Account_Details_Nav setActiveSN={setActiveSN} activeSN={activeSN}/>
      {activeSettings()}
    </div>
  );
};

export default Profile;
