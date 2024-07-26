import Account_Details_Nav from "../Components/Account_Details_Nav";
import Personal_Info from "../Components/Personal_Info";

const Profile = () => {
  return (
    <div className=" bg-mainBGC flex items-start justify-center gap-14 py-28">
      
      <Account_Details_Nav />
      <Personal_Info />
    </div>
  );
};

export default Profile;
