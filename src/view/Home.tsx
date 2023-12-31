// Home.tsx
import React, { useState, useCallback } from 'react';
import { QrScanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import '../App.scss'
// Components
import Tag from "../component/Tag";
import Button from "../component/Button";
import Nav from '../component/Nav';
import Caution_icon from "../images/icon_caution.svg";


interface QrResult {
    ok: boolean;
    id: number;
}

function Home(): JSX.Element {
    const location = useLocation();
    let request = new XMLHttpRequest();

    const buttonState = location.state?.buttonState; // Optional chaining to handle potential undefined
    const [BottomMoving, isBottomMoving] = useState(false);

    function is_checked_agree(): boolean {
        // 주의사항 2가지 check 되어있을 경우 True return, 아닐 경우 False return.
        return true;
    }
    function unlock_kickboard(): boolean {
        //서버에 QR코드 데이터와 날씨 데이터 전송
        //unlock 되었는지 전송받음
        return true;
    }
    function start_riding(): void {
        //주의사항에 체크하지 않았을 경우 오류 메시지 띄운 후 return.
        if (is_checked_agree() === false) {
            window.alert("안전한 주행을 위해 주의사항을 확인하세요.");
            return;
        }
        //서버에 데이터 전송 후 잠금 해제에 성공하였을 경우 주행 창으로 이동.
        if (unlock_kickboard() === true) {
            window.alert("잠금이 해제되었습니다. 안전한 주행 되세요!");
            window.location.href = '/Riding';
        }
    }

    const [agree_height, set_agree_height] = useState(8 * 16);

    const move_page = useNavigate();

    const handleStart = useCallback((event: any) => {
        // console.log(event instanceof MouseEvent);
        // console.log(event.touches);

        let initialY: number = 0;
        console.log(event.touches)
        if (event.touches === undefined) { initialY = event.clientY; }
        else initialY = event.touches[0].clientY;

        const handleMouseMove = (e: any) => {
            const currentY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
            if (initialY !== undefined && currentY !== undefined) {
                const deltaY = initialY - currentY;
                const new_height = agree_height + deltaY;

                if (500 < new_height) {
                    move_page("/Caution");
                }
                if (new_height < 120) {
                    set_agree_height(120);
                    isBottomMoving(false);
                }
                else {
                    set_agree_height(new_height);
                    isBottomMoving(true);
                }
            }
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleMouseMove);
            document.removeEventListener('touchend', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleMouseMove);
        document.addEventListener('touchend', handleMouseUp);
    }, [agree_height]);

    const handleCautionButtonClick = () => {
        if (buttonState !== true) {
            move_page("/Caution");
        }
    };

    const handle_QR_function = (target: string) => {
            if (buttonState === true) {
                on_QR_successed(target);
            } 
            // else {
            //     window.alert("주의사항을 확인해주세요.");
            // }
      };

      const on_QR_successed = (target: string) => {
        const parsedTarget: QrResult = JSON.parse(target);
            if (parsedTarget.ok === true) {
                try {
                    request.open('POST', 'http://10.5.11.221:9999', true);
                    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    
                    let dataToSend = JSON.stringify({"key": "value"}); // Replace this with your actual data
                    request.send(dataToSend);
                    console.log(dataToSend);
                }
                catch (error) {
                    console.log(error);
                }
                
                move_page('/Riding');
            }
      };

    return (
        <div className="page_home">
            {/* Navigation */}
            <div className='nav_container'>
                <Nav nav_props={{ title: "킥세이프", show_x: false, show_logo: true}} />
            </div>
            {/* Body */}
            <div className={`black_cover ${buttonState ? 'hide' : ''}`}></div>
            <div className="sect_QR">
                <svg className="QR_foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 812" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M375 0H0V812H375V0ZM260 194H116V338H260V194Z"
                        fill="#0C0C0C" fillOpacity="0.8" />
                    <path
                        d="M3   815H0V818H3V815ZM378 815V818H381V815H378ZM119 197V194H116V197H119ZM263 197H266V194H263V197ZM119 341H116V344H119V341ZM263 341V344H266V341H263ZM3   812H3V818H378V812ZM375 3V815H381V3H375ZM119 200H263V194H119V200ZM122 341V197H116V341H122ZM263 338H119V344H263V338ZM260 197V341H266V197H260Z"
                        fill="#FFE55E" mask="url(#path-1-outside-1_84_79)" />
                </svg>
                <div className="video_container">

                    <QrScanner containerStyle={{ width: "100%", height: "100%" }}
                        videoStyle={{ minWidth: "100%", minHeight: "100%" }} 
                        onError={(error) => {}}
                        onDecode={(target:string) => {handle_QR_function(target)}}
                    ></QrScanner>

                </div >
                <div className='texts_container'>
                    <div className='title'>대여하기</div>
                    <div className='dscript'>킥보드 상단의 QR코드를 스캔하여 <br/> 간편하게 대여하세요.</div>
                </div>
            </div>
            {/* Footer */}
            <div className="sect_agree">
                <div style={{ cursor: "n-resize" }} className="sect_controller" onTouchStart={handleStart} onMouseDown={handleStart}>
                    <div className="controller_line"></div>
                </div>
                <div style={{ height: `${agree_height}px` }} className="sect_content">
                    <div className="tag_container">
                        <Tag img_src={Caution_icon} background_color="#FDEDEA" font_color="#F01111" title="주의사항"></Tag>
                    </div>
                    <div className="disrpt">안전한 주행을 위한 주의사항을 확인하세요.</div>
                    <div className="sect_btn">
                        <Button
                            title="모든 주의사항을 확인했어요."
                            type={{ is_error: true, is_activated: false }}
                            isButtonActivated={buttonState}
                            onClick={handleCautionButtonClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;