// Nav.tsx
import React from 'react';
import '../App.scss';

interface NavProps {
    nav_props: {
        title: string;
    };
}

function Nav({ nav_props }: NavProps): JSX.Element {
    return (
        <div className="comp_nav">
            <div className="title">{nav_props.title}</div>
        </div>
    );
}

export default Nav;