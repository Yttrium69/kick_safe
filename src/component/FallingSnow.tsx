import React from "react";
import Snowflake from "./Snowflake";

const FallingSnow: React.FC = () => {
  const makeSnowFlakes = () => {
    let animationDelay = "0s";
    let fontSize = "1rem";
    const arr = Array.from("Merry Christmas");

    return arr.map((el, i) => {
      animationDelay = `${(Math.random() * 16).toFixed(5)}s`;
      fontSize = `${Math.floor(Math.random() * 2) + 1}rem`;
      const style = {
        animationDelay,
        fontSize,
      };
      return <Snowflake key={i} style={style} />;
    });
  };

  return (
    <div className="snow-container">
      {makeSnowFlakes()}
    </div>
  );
};

export default FallingSnow;
