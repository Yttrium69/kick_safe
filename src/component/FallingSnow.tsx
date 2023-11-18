// FallingSnow.tsx

import React, { HTMLAttributes } from 'react';
import Snowflake from './Snowflake';

interface FallingSnowProps extends HTMLAttributes<HTMLDivElement> {}

const FallingSnow: React.FC<FallingSnowProps> = ({ className, ...rest }) => {
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
    <div className={`snow-container ${className}`} {...rest}>
      {makeSnowFlakes()}
    </div>
  );
};

export default FallingSnow;
