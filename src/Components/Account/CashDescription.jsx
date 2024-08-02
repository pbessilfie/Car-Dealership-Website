const CashDescription = () => {
  return (
    <div className=" px-6 py-7">
      {" "}
      <div className=" mb-7">
        <h3 className=" text-xl font-semibold text-primaryTextColor mb-4">
          Momo Details{" "}
        </h3>
        <p className=" font-medium text-base text-secondaryTextColor2 ">
          Only pay on delivery{" "}
        </p>
      </div>
      <div>
        <h4 className=" text-base text-primaryTextColor font-semibold mb-4">
          Things To Note:
        </h4>

        <ul className=" list-disc ml-7 space-y-4 ">
          <li className=" text-base text-primaryTextColor">
            No one is responsible for receiving payment other than the financial
            secretary.
          </li>
          <li className=" text-base text-primaryTextColor">
            Under no circumstance will we increase or decrease the product
            price.
          </li>
          <li className=" text-base text-primaryTextColor">
            No one is responsible for receiving payment other than the financial
            secretary.
          </li>
          <li className=" text-base text-primaryTextColor">
            Under no circumstance will we increase or decrease the product
            price.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CashDescription;
