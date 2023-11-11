// CheckList.tsx
import React, { FC } from 'react';
import imgHelmet from '../images/img_helmet.png';
import CircleButton from './CircleButton';

interface CheckListProps {
    title: string;
    description: string;
}

const CheckList: FC<CheckListProps> = ({ title, description }) => {
    return (
    <div className="check_list_container">
        <div className="contents">
            <div className="top">
                <img className="helmet_img" src={imgHelmet} alt="Helmet" />
                <div className="title">{title}</div>
            </div>
            <div className="bottom">{description}</div>
        </div>
        
            <div className="btn_container">
                <div className="icon_checked">
                    <CircleButton />
                </div>
                <div>확인했어요.</div>
            </div>
    </div>
    );
};

export default CheckList;