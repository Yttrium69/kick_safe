// Caution.tsx
import React, { useState } from 'react';
import '../App.scss';
import Nav from '../component/Nav';
import Button from '../component/Button';
import CheckList from '../component/CheckList';
import Tag from '../component/Tag'
import CircleButton from '../component/CircleButton';
import { useNavigate } from 'react-router-dom';

function Caution(): JSX.Element {
    const navigate = useNavigate();

    // CheckList useState
    const [isButtonActivated, setIsButtonActivated] = useState(false);
    const [CheckButton_1, setCheckButton_1] = useState(false);
    const [CheckButton_2, setCheckButton_2] = useState(false);
    const [CheckButton_3, setCheckButton_3] = useState(false);

    // Change button state
    const handleCheckButton_1 = () => {
        setCheckButton_1(!CheckButton_1);
    };
    const handleCheckButton_2 = () => {
        setCheckButton_2(!CheckButton_2);
    };
    const handleCheckButton_3 = () => {
        setCheckButton_3(!CheckButton_3);
    };

    React.useEffect(() => {
        setIsButtonActivated(CheckButton_1 && CheckButton_2 && CheckButton_3);
    }, [CheckButton_1, CheckButton_2, CheckButton_3]);

    // If click icon_x -> move to "/"
    const goBackHome = () => {
        navigate('/', {
            state: {
                buttonState: isButtonActivated,
            },
        });
    }

    return (
        <div className="page_caution">
            {/* Header */}
            <div className="nav"><Nav nav_props={{ title: "킥세이프", show_x: true, show_logo: false}} /></div>
            {/* Body */}
            <div className="body_container">
                <Tag img_src={"img/caution.svg"} background_color="#FDEDEA" font_color="#F01111" title="주의사항"></Tag>
                <div className="check_option">
                    {/* CheckList 1 */}
                    <CheckList
                        title="킥보드는 혼자서!"
                        description="킥세이프는 사용자의 헬멧 착용 여부를 자동으로 감지해요. 헬멧을 알맞게 착용한 사용자만이 킥보드 주행이 가능해요."
                    />
                    <div className="btn_container">
                        <div className="btn_box">
                            <CircleButton handleClick={handleCheckButton_1} isActivated={CheckButton_1} />
                            <div className="label">확인했어요.</div>
                        </div>
                    </div>
                </div>
                <div className="check_option">
                    {/* CheckList 2 */}
                    <CheckList
                        title="헬멧은 필수!"
                        description="킥세이프는 사용자의 헬멧 착용 여부를 자동으로 감지해요. 헬멧을 알맞게 착용한 사용자만이 킥보드 주행이 가능해요."
                    />
                    <div className="btn_container">
                        <div className="btn_box">
                            <CircleButton handleClick={handleCheckButton_2} isActivated={CheckButton_2} />
                            <div className="label">확인했어요.</div>
                        </div>
                    </div>
                </div>

                <div className="check_option">
                    {/* CheckList 2 */}
                    <CheckList
                        title="끝나고 주차는 확실하게!"
                        description="혼자만 사용하는 킥보드가 아닙니다. 다른 이용자를 위해 정해진 위치에 주차를 해주세요."
                    />
                    <div className="btn_container">
                        <div className="btn_box">
                            <CircleButton handleClick={handleCheckButton_3} isActivated={CheckButton_3} />
                            <div className="label">확인했어요.</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div>
                <Button
                    title="모든 주의사항을 확인했어요."
                    type={{ is_error: true, is_activated: false }}
                    isButtonActivated={isButtonActivated}
                    onClick={goBackHome}
                />
            </div>
        </div>
    );
}

export default Caution;
