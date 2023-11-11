// CheckList.tsx
import React, { FC } from 'react';
import imgHelmet from '../images/img_helmet.png';

interface CheckListProps {
    title: string;
    description: string;
}

const CheckList: FC<CheckListProps> = ({ title, description }) => {
    return (
        <div className="check_list_container">
            <div className="top">
                <img className="helmet_img" src={imgHelmet} alt="Helmet" />
                <div className="title">{title}</div>
            </div>
            <div className="bottom">{description}</div>
        </div>
    );
};

export default CheckList;