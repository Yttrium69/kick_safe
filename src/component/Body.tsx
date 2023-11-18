// Body.tsx
import React from 'react';
import Timer from './Timer';

interface BodyProps {
    title: string;
    timerProps: {
        _hours: number;
        _minutes: number;
        seconds: number;
    };
}

const Body: React.FC<BodyProps> = ({ title, timerProps }) => {
    return (
        <div className="mid_nav">
            <div className="title">{title}</div>
            <div className="timer_container">
                <div className="timer_title">현재 주행 시간</div>
                <div className="timer">
                    <Timer initialHours={0} initialMinutes={0} initialSeconds={0} className="timer" />
                </div>
            </div>
            <div className="mid_dscrpt">안전하고 즐거운 시간 <br/>보내세요!</div>
        </div>
    );
};

export default Body;
