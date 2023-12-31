// Nav.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon_X from '../images/icon_x.svg';
import logo from "../images/logo_type2.svg";
// import logo_title from "../images/Union.svg";
import '../App.scss';

interface NavProps {
    nav_props: {
        title: string;
        show_x: boolean;
        show_logo: boolean;
    };
}

function Nav({ nav_props }: NavProps): JSX.Element {
    const navigate = useNavigate();
    // Chage styles
    let x_styles: object;
    let title_styles: object;
    let logo_styles: object;
    
    nav_props.show_x === true ? x_styles = {} : x_styles = { display: "none"};
    if (nav_props.show_logo === true) {
        title_styles = { display: "none"};
        logo_styles = {};
    }
    else {
        title_styles = {};
        logo_styles = { display: "none" };
    }

    return (
        <div className="comp_nav">
            <div style={title_styles} className="title">{nav_props.title}</div>
            <div style={logo_styles} className="logo">
                <img src={logo} alt="" />
            </div>
            <div style={x_styles} className="icon_container"><img src={Icon_X} alt="Click here to close this window." onClick={() => { navigate("/") }} /></div>
        </div>
    );
}

export default Nav;