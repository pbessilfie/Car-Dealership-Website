import { useNavigate } from "react-router";
import Button from "../Components/Common/Button";
import Select_Input from "../Components/Common/Select_Input";
import Custom_Checkbox from "../Components/Common/Custom_Checkbox";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-[90vh] flex">
      <div className="relative h-full w-1/2 p-20 flex flex-col justify-between">
        <div className=" absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.3)] -z-10"></div>
        <div className="absolute top-0 left-0 h-full w-full -z-10">
          <img
            src="/src/assets/billing/si-image.png"
            className=" h-full w-full object-cover"
          />
        </div>

        <h2 className=" text-white font-bold text-3xl">LOGO</h2>
        <div className=" ">
          <h3 className=" text-xl text-white font-semibold mb-3">
            {" "}
            The smarter way you can buy or rent a vehicle
          </h3>
          <p className=" text-white text-base">
            lorem ipsum dolor sit ament, consectetur adipicsing elit, set do
            eiusmod tepor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </div>

      <div className="w-1/2 flex flex-col items-center justify-evenly ">
        <form className=" space-y-8 w-fit">
          <h3 className=" text-primaryTextColor text-xl font-semibold mb-2 text-center">
            Welcome to Logo{" "}
          </h3>
          <p className=" text-secondaryTextColor text-sm mb-9 text-center">
            Let’s get you all set up so you can make your first purchase{" "}
          </p>

          <div className=" space-y-2">
            <label className=" text-sm text-secondaryTextColor">
              First Name
            </label>
            <div className=" h-10 w-[500px] rounded-lg border border-lineColor">
              <input
                type="text"
                placeholder="Enter your firstname"
                className=" w-full h-full bg-transparent outline-none placeholder:text-sm placeholder:text-secondaryTextColor2 px-3"
              />
            </div>
          </div>
          <div className=" space-y-2">
            <label className=" text-sm text-secondaryTextColor">
              Last Name
            </label>
            <div className=" h-10 w-[500px] rounded-lg border border-lineColor">
              <input
                type="text"
                placeholder="Enter your lastname"
                className=" w-full h-full bg-transparent outline-none placeholder:text-sm placeholder:text-secondaryTextColor2 px-3"
              />
            </div>
          </div>
          <div className=" space-y-2">
            <label className=" text-sm text-secondaryTextColor">Email</label>
            <div className=" h-10 w-[500px] rounded-lg border border-lineColor">
              <input
                type="email"
                placeholder="Enter your email"
                className=" w-full h-full bg-transparent outline-none placeholder:text-sm placeholder:text-secondaryTextColor2 px-3"
              />
            </div>
          </div>

          <Select_Input icon placeholder={"USA"} />
          <div className=" space-y-2">
            {" "}
            <label className=" text-sm text-secondaryTextColor">Password</label>
            <div className=" h-10 w-[500px] rounded-lg border border-lineColor">
              <input
                type="password"
                placeholder="Enter your password"
                className=" w-full h-full bg-transparent outline-none placeholder:text-sm placeholder:text-secondaryTextColor2 px-3"
              />
            </div>
          </div>
          <div className=" space-y-2">
            {" "}
            <label className=" text-sm text-secondaryTextColor">
              Confirm Password
            </label>
            <div className=" h-10 w-[500px] rounded-lg border border-lineColor">
              <input
                type="password"
                placeholder="Confirm your password"
                className=" w-full h-full bg-transparent outline-none placeholder:text-sm placeholder:text-secondaryTextColor2 px-3"
              />
            </div>
          </div>
          {/* <div >
            <Custom_Checkbox/> <span>I want to receive email from LOGO</span>
          </div> */}

          <Button
            label={"Sign up"}
            bstyles={
              " bg-pBlue text-white text-base px-14 py-2 w-fit rounded-lg mx-auto"
            }
          />
        </form>

        <p className="text-sm text-secondaryTextColor">
          Already have an account?{" "}
          <span
            className="text-pBlue cursor-pointer"
            onClick={() => navigate("/sign-in")}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
