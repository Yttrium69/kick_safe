// CircleButton.tsx
import React, { useState } from 'react';
import iconChecked from '../images/icon_checked.svg';
import iconNotChecked from '../images/icon_not_checked.svg';

interface CircleButtonProps {
    handleClick?: () => void;
    isActivated?: boolean; // Make isActivated optional
}

function CircleButton({ handleClick = () => {}, isActivated = false }: CircleButtonProps): JSX.Element {
    const handleClickInternal = () => {
        handleClick(); // Call the parent component's click handler
    };

    return (
        <div className={`toggle-button ${isActivated ? 'activated' : ''}`} onClick={handleClickInternal}>
            <img src={isActivated ? iconChecked : iconNotChecked} alt="Toggle Icon" />
        </div>
    );
}

export default CircleButton;
