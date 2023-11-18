import React from "react";

interface SnowflakeProps {
  style: {
    animationDelay: string;
    fontSize: string;
  };
}

const Snowflake: React.FC<SnowflakeProps> = ({ style }) => {
  return (
    <p className="snow-flake" style={style}>
      {"\u2745"}
    </p>
  );
};

const makeSnowFlakes = () => {
  let animationDelay = "0s";
  let fontSize = "1rem";
  const arr = Array.from("Merry Christmas");

  return arr.map((el, i) => {
    animationDelay = `${(Math.random() * 16).toFixed(5)}s`;
    fontSize = `${Math.floor(Math.random() * 2) + 0.1}rem`;
    const style = {
      animationDelay,
      fontSize,
    };
    return <Snowflake key={i} style={style} />;
  });
};

const FallingSnow: React.FC = () => (
  <div className="snow-container">
    {makeSnowFlakes()}
  </div>
);

export default FallingSnow;