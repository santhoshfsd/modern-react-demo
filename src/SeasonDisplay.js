import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  winter: {
    text: "Its Chill",
    iconName: "snowflake",
  },
  summer: {
    text: "Its Too Hot",
    iconName: "sun",
  },
};

const getSeason = (lat, month) => {
  console.log(lat);
  console.log(new Date().getUTCMonth());

  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={` icon-left icon massive ${iconName}`}></i>
      <div>{text}</div>
      <i className={` icon-right icon massive ${iconName}`}></i>
    </div>
  );
};

export default SeasonDisplay;
