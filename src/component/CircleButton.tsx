import React, { useState } from 'react';
import iconChecked from '../images/icon_checked.svg';
import iconNotChecked from '../images/icon_not_checked.svg';

function CircleButton() {
    const [isActivated, setIsActivated] = useState(false);

    const handleClick = () => {
        setIsActivated(!isActivated);
    };

    return (
        <div className="toggle-button" onClick={handleClick}>
        <img src={isActivated ? iconChecked : iconNotChecked} alt="Toggle Icon" />
        </div>
    );
}

export default CircleButton;
