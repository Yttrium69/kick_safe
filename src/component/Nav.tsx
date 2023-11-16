// Nav.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.scss';

interface NavProps {
    nav_props: {
        title: string;
        show_x: boolean;
    };
}

function Nav({ nav_props }: NavProps): JSX.Element {
    const navigate = useNavigate();
    let x_styles: object;
    nav_props.show_x == true ? x_styles = {} : x_styles = { display: "none" };

    return (
        <div className="comp_nav">
            <div className="title">{nav_props.title}</div>
            <div style={x_styles} className="icon_container"><img src={"img/icon_x.svg"} alt="Click here to close this window." onClick={() => { navigate("/") }} /></div>
        </div>
    );
}

export default Nav;