// Caution_Button.tsx
import React from 'react';

interface CautionButtonProps {
    title: string;
    type: { is_error: boolean; is_activated: boolean };
    isButtonActivated: boolean;
    onClick: () => void;
}

const Caution_Button: React.FC<CautionButtonProps> = ({ title, type, isButtonActivated, onClick }) => {
    return (
        <div className="comp_btn">
            <button className={`btn ${isButtonActivated ? 'pressed' : ''}`} onClick={onClick}>
                {title}
            </button>
        </div>
    );
};

export default Caution_Button;