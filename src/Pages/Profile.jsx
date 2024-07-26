import { useState } from "react";
import Account_Details_Nav from "../Components/Account_Details_Nav";
import Membership_Info from "../Components/Membership_Info";
import Personal_Info from "../Components/Personal_Info";
import Security from "../Components/Security";

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
