const VehiclePerformanceScore = () => {
  const ps = [
    { name: "Qualifty", score: 9.3 },
    { name: "Offroad", score: 5 },
    { name: "Price", score: 7 },
    { name: "Durability", score: 9.3 },
    { name: "Power", score: 8.3 },
    { name: "Interior", score: 8.6 },
    { name: "Exterior", score: 9.3 },
    { name: "Quality", score: 9.0 },
  ];

  const remarks = (score) => {
    if (score >= 8) {
      return "Excellent";
    } else if (score <= 7.9) {
      return "Very Good";
    } else if (score >= 5) {
      return "Good";
    } else {
      return "Bad";
    }
  };
  return (
    <div>
      <h2 className=" text-xl text-primaryTextColor font-bold mb-10">
        Company Score
      </h2>
      <div className="flex gap-7">
        {" "}
        {ps.map((perf) => (
          <div
            key={perf.name}
            className=" border-2 border-lineColor rounded-lg space-y-3 px-5 py-7"
          >
            <h3 className=" text-3xl font-bold text-pBlue">
              {perf.score}
              <span className=" text-xl font-bold text-secondaryTextColor">
                /10
              </span>
            </h3>

            <span className=" text-xl text-primaryTextColor">{perf.name}</span>
            <div className=" bg-lineColor w-28 h-[3px] rounded-xl">
              <div className="w-[95%] rounded-xl h-full bg-pBlue"></div>
            </div>

            {/* Remarks */}
            <span className=" text-base text-secondaryTextColor">
              {remarks(perf.score)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiclePerformanceScore;
