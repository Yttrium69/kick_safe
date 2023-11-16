// Caution.tsx
import React, { useState } from 'react';
import '../App.scss';
import Icon_X from '../images/icon_x.svg';
import Nav from '../component/Nav';
import Caution_Button from '../component/Caution_Button';
import CheckList from '../component/CheckList';
import Tag from '../component/Tag'
import CircleButton from '../component/CircleButton';
import { useNavigate } from 'react-router-dom';

function Caution(): JSX.Element {
    const navigate = useNavigate();

    const [isButtonActivated, setIsButtonActivated] = useState(false);
    const [isCircleButton1Activated, setIsCircleButton1Activated] = useState(false);
    const [isCircleButton2Activated, setIsCircleButton2Activated] = useState(false);

    const handleCircleButton1Click = () => {
        setIsCircleButton1Activated(!isCircleButton1Activated);
    };

    const handleCircleButton2Click = () => {
        setIsCircleButton2Activated(!isCircleButton2Activated);
    };

    React.useEffect(() => {
        setIsButtonActivated(isCircleButton1Activated && isCircleButton2Activated);
    }, [isCircleButton1Activated, isCircleButton2Activated]);

    const handleCautionButtonClick = () => {
        if (isCircleButton1Activated && isCircleButton2Activated) {
            window.location.href = "/";
        }
    };

    const goToHome = () => {
        // window.location.href = "/";
        navigate('/', {
            state: {
                buttonState: isButtonActivated,
            },
        });
        console.log(isButtonActivated);
    }

    return (
        <div className="page_caution">
            {/* <div className="nav_container">
                <div className="nav"><Nav nav_props={{ title: "킥세이프", show_x:true  }} /></div>
                <div className="icon"><img src={Icon_X} alt="icon X" onClick={goToHome} /></div>
            </div> */}
            {/* <div className="nav"><Nav nav_props={{ title: "킥세이프", show_x: true, }} /></div> */}
            <div className="nav"><Nav nav_props={{ title: "킥세이프", show_x: true, }} /></div>

            <div className="body_container">
                <Tag img_src={"img/caution.svg"} background_color="#FDEDEA" font_color="#F01111" title="주의사항"></Tag>
                <div className="check_option">
                    <CheckList
                        title="헬멧은 필수!"
                        description="킥세이프는 사용자의 헬멧 착용 여부를 자동으로 감지해요. 헬멧을 알맞게 착용한 사용자만이 킥보드 주행이 가능해요."
                    />
                    <div className="btn_container">
                        <div className="btn_box">
                            <CircleButton handleClick={handleCircleButton1Click} isActivated={isCircleButton1Activated} />
                            <div className="label">확인했어요.</div>
                        </div>
                    </div>
                </div>

                <div className="check_option">
                    <CheckList
                        title="헬멧은 필수!"
                        description="킥세이프는 사용자의 헬멧 착용 여부를 자동으로 감지해요. 헬멧을 알맞게 착용한 사용자만이 킥보드 주행이 가능해요."
                    />
                    <div className="btn_container">
                        <div className="btn_box">
                            <CircleButton handleClick={handleCircleButton2Click} isActivated={isCircleButton2Activated} />
                            <div className="label">확인했어요.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Caution_Button
                    title="모든 주의사항을 확인했어요."
                    type={{ is_error: true, is_activated: false }}
                    isButtonActivated={isButtonActivated}
                    onClick={goToHome}
                />
            </div>
        </div>
    );
}

export default Caution;
