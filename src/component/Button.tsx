// Button.tsx
import React, { useState } from 'react';
import '../App.scss';

interface btn_type {
    is_error: boolean;
    is_activated: boolean;
}

interface btn_props {
    title: string;
    type: btn_type;
}

function Button({ title, type }: btn_props): JSX.Element {
    const [isActivated, setIsActivated] = useState(type.is_activated);

    const handleClick = () => {
        // Toggle the state when the button is clicked
        setIsActivated(!isActivated);

        // Add additional logic here if needed
    };

    return (
        <div className="comp_btn">
            <button className={`btn_txt ${isActivated ? 'pressed' : ''}`} onClick={handleClick}>
                {title}
            </button>
        </div>
    );
}

export default Button;