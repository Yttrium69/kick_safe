// Caution.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.scss';
// Components
import Nav from '../component/Nav';
import Button from '../component/Button';
import CheckList from '../component/CheckList';
import CircleButton from '../component/CircleButton';
import Tag from '../component/Tag'
// Images
import Caution_icon from '../images/icon_caution.svg';
// import NoParking_icon from '../images/no_parking.png';
import Helmet_icon from '../images/img_helmet.png';
import one_person_icon from '../images/one_person_icon.png';
import rain_icon from '../images/rain_icon.png';

function Caution(): JSX.Element {
    const navigate = useNavigate();

    // CheckList useState
    const [isButtonActivated, setIsButtonActivated] = useState(false);
    const [CheckButton_1, setCheckButton_1] = useState(false);
    const [CheckButton_2, setCheckButton_2] = useState(false);
    const [CheckButton_3, setCheckButton_3] = useState(false);
    // const [CheckButton_4, setCheckButton_4] = useState(false);

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
    // const handleCheckButton_4 = () => {
    //     setCheckButton_4(!CheckButton_4);
    // };

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
            <div className="nav"><Nav nav_props={{ title: "주의사항", show_x: true, show_logo: false}} /></div>
            {/* Body */}
            <div className="body_container">
                <Tag img_src={Caution_icon} background_color="#FDEDEA" font_color="#F01111" title="주의사항"></Tag>
                <div className="check_option">
                    {/* CheckList 1 */}
                    <CheckList
                        title="킥보드는 혼자서!"
                        description="킥세이프의 승차정원은 1명 입니다. 2명 이상의 탑승시 사고위험이 있고 고장의 원인이 됩니다."
                        img_path={one_person_icon}
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
                        description="킥세이프는 헬멧 착용을 인식합니다. 안전한 주행을 위해 알맞게 헬멧을 착용해주세요. "
                        img_path={Helmet_icon}
                    />
                    <div className="btn_container">
                        <div className="btn_box">
                            <CircleButton handleClick={handleCheckButton_2} isActivated={CheckButton_2} />
                            <div className="label">확인했어요.</div>
                        </div>
                    </div>
                </div>

                {/* <div className="check_option">
                    //checklist 3
                    <CheckList
                        title="끝나고 주차는 확실하게!"
                        description="이후 이용하는 사용자를 위해 지정된 위치에 주차를 해주세요."
                        img_path={NoParking_icon}
                    />
                    <div className="btn_container">
                        <div className="btn_box">
                            <CircleButton handleClick={handleCheckButton_3} isActivated={CheckButton_3} />
                            <div className="label">확인했어요.</div>
                        </div>
                    </div>
                </div> */}

                <div className="check_option">
                    {/* CheckList 3 */}
                    <CheckList
                        title="비오는 날에는 천천히~"
                        description="비가 오는 날에는 안전을 위해 최대 속도가 평소보다 감소되어 운행됩니다."
                        img_path={rain_icon}
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
