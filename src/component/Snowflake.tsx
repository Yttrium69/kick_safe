import React from 'react';

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

export default Snowflake;
