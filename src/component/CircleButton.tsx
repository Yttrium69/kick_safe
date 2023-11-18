// CircleButton.tsx
import React, { useState } from 'react';
import iconChecked from '../images/icon_checked.svg';
import iconNotChecked from '../images/icon_not_checked.svg';
import { relative } from 'path';

interface CircleButtonProps {
    handleClick?: () => void;
    isActivated?: boolean; // Make isActivated optional
}

function CircleButton({ handleClick = () => {}, isActivated = false }: CircleButtonProps): JSX.Element {
    const handleClickInternal = () => {
        handleClick(); // Call the parent component's click handler
    };

    if (isActivated === true) {
        return (
            <div style={{cursor:'pointer', position: 'relative', display: 'flex', justifyContent: 'center', alignItems:'center',width: '1.75rem', height: '1.75rem', borderRadius:'10rem', border:'1px solid #949BA4'}} className='btn_outer' onClick={handleClickInternal}>
                <div style={{width: '1.25rem', height: '1.25rem', backgroundColor:'#FFE55E', borderRadius:'10rem'}} className='btn_inner'></div>
            </div>
        );
    }
    else {
        return (
            <div style={{cursor:'pointer', position: 'relative', display: 'flex', justifyContent: 'center', alignItems:'center',width: '1.75rem', height: '1.75rem', borderRadius:'10rem', border:'1px solid #949BA4'}} className='btn_outer' onClick={handleClickInternal}></div>
        );
    }
}

export default CircleButton;
