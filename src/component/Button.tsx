import React from 'react';
import '../App.scss'

interface btn_type{
    is_error: boolean;
    is_activated: boolean;
}

interface btn_props{
    title: string;
    type: btn_type;
}

function Button(props:btn_props): JSX.Element {
    return (
        <div className="comp_btn">
        
        </div>
    );
}

export default Button;