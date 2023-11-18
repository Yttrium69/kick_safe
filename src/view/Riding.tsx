import React from 'react';
import '../App.scss'
// Components
import Nav from '../component/Nav';
import Body from '../component/Body';
import Button from '../component/Button';

const Riding: React.FC = () => {
    // Finish Riding
    const finish_riding = () => {
        window.alert("이용해 주셔서 감사합니다.");
        window.location.href = "/";
    }

    return (
        <div className="page_riding">
            {/* Navigator */}
            <div>
                <Nav nav_props={{ title: "킥세이프", show_x: false, show_logo: true}} />
            </div>
            {/* Body */}
            <div>
                <Body title="주행중..." />
            </div>
            {/* Footer */}
            <div className="sect_btn">
                <Button title="주행 완료" type={{ is_error: true, is_activated: false }} isButtonActivated={true}  onClick={finish_riding} />
            </div>
        </div>
    );
};

export default Riding;