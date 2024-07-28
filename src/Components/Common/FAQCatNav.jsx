import PropTypes from "prop-types";
const FAQCatNav = ({ activeCatNav, setActiveCatNav }) => {
  const FAQCatNavItems = [
    { label: "General Information", count: 9 },
    { label: "Security & Protection", count: 9 },
    { label: "Billing & Delivery", count: 9 },
    { label: "My Account", count: 9 },
    { label: "Purchases & Rentals", count: 9 },
  ];

  return (
    <div className=" bg-white rounded-lg drop-shadow-md w-full overflow-hidden ">
      {FAQCatNavItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between bg-white hover:bg-[#eee] p-4 hover:border-l-4 hover:border-l-pBlue cursor-pointer border-b border-b-lineColor ${
            activeCatNav === item.label && "border-l-4 border-l-pBlue bg-mainBGC"
          }
                     `}
          onClick={() => setActiveCatNav(item.label)}
        >
          <span className=" text-primaryTextColor text-base font-medium">
            {item.label}
          </span>

          <div className=" bg-lineColor rounded-full text-xs font-medium text-primaryTextColor py-1 px-2 ">
            <span>{item.count}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
FAQCatNav.propTypes = {
  activeCatNav: PropTypes.string.isRequired,
  setActiveCatNav: PropTypes.func.isRequired,
};

export default FAQCatNav;
