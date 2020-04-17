import React from "react";

const getSeason = (lat, month) => {
  console.log(lat);
  console.log(new Date().getUTCMonth());

  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === "Winter" ? "Burr its chill" : "Lets go to beach";
  const icon = season === "Winter" ? "snowflake" : "sun";

  return (
    <div>
      <i className={`icon ${icon}`}></i>
      <div>{text}</div>
      <i className={`icon ${icon}`}></i>
    </div>
  );
};

export default SeasonDisplay;
