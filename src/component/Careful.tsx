// Careful.tsx
import React from 'react';
import iconCautions from '../images/icon_caution.svg';

function Careful() {
    return (
        <div className="caution">
            <div>
                <img src={iconCautions} alt="Icon Caution" />
            </div>
            <div>주의사항</div>
        </div>
    );
}

export default Careful;