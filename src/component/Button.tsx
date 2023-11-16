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
        setIsActivated(!isActivated);
    };
    let btn_style: object = {};

    if (type.is_error == true) {
        btn_style = { "backgroundColor": "#F01111", "color": "white" }
    }

    return (
        <div className="comp_btn">
            <button style={btn_style} className={`btn_txt ${isActivated ? 'pressed' : ''}`} onClick={handleClick}>
                {title}
            </button>
        </div>
    );
}

export default Button;