import { Footerlinks } from "../constants";
import { FaRegCopyright, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#31373e] flex flex-col items-center justify-center py-24">
      <div className="">
        <div className=" flex gap-40 border-b border-secondaryTextColor pb-28">
          {Footerlinks.map((item) => (
            <div key={item.title} className="">
              <h4 className="text-white text-xl font-medium py-4">
                {item.title}
              </h4>
              <ul>
                {item.links.map((link, index) => (
                  <li
                    key={index}
                    className=" text-base font-normal text-secondaryTextColor2 hover:text-secondaryTextColor cursor-pointer mb-1"
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
              {item.title === "Connect" && (
                <div className="flex w-full justify-between">
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
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between py-4 px-6">
          <span className=" text-3xl font-bold text-white">LOGO</span>
          <span className="flex gap-2 items-center text-white text-sm font-light">
            <FaRegCopyright />
            2024 Logo LTD. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
