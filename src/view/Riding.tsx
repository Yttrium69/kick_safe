import React from 'react';
import '../App.scss'
import Nav from '../component/Nav';
import Body from '../component/Body';
import Button from '../component/Button';

const Riding: React.FC = () => {
    // Define your timer properties
    const timerProps = {
        _hours: 1,
        _minutes: 30,
        seconds: 12,
    };

    const finish_riding = () => {
        window.alert("이용해 주셔서 감사합니다.");
        window.location.href = "/";
    }

    return (
        <div className="page_riding">
            <div>
                <Nav nav_props={{ title: "킥세이프", show_x: false }} />
            </div>
            <div>
                <Body title="주행중..." timerProps={timerProps} />
            </div>
            <div className="sect_btn">
                <Button title="주행 완료" type={{ is_error: true, is_activated: false }} isButtonActivated={true}  onClick={finish_riding} />
            </div>
        </div>
    );
};

export default Riding;