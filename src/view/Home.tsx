import React from 'react';
import {QrScanner} from "@yudiel/react-qr-scanner";
import '../App.scss'

// interface video_style {
// }
//
// const video_style: video_style = {
//     padding: 0,
//     "width": "100%",
//     "height": "auto",
//     top: "0",
// };
//

function Home(): JSX.Element {
    return (
        <div className="page_home">
            <div className="sect_QR">
                <svg className="QR_foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 812" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M375 0H0V812H375V0ZM260 262H116V406H260V262Z"
                          fill="#0C0C0C" fillOpacity="0.8"/>
                    <path
                        d="M3 815H0V818H3V815ZM378 815V818H381V815H378ZM119 265V262H116V265H119ZM263 265H266V262H263V265ZM119 409H116V412H119V409ZM263 409V412H266V409H263ZM3   812H3V818H378V812ZM375  268H263V262H119V268ZM122 409V265H116V409H122ZM263 406H119V412H263V406ZM260 265V409H266V265H260Z"
                        fill="#FFE55E" mask="url(#path-1-outside-1_84_79)"/>
                </svg>
                <div className="video_container">
                   <QrScanner containerStyle={{width: "100%", height: "100%"}}
                               videoStyle={{minWidth: "100%", minHeight: "100%"}} onError={() => {
                        console.log("nono")
                    }}></QrScanner>
                </div>
                <div className='texts_container'>
                    <div className='title'>대여하기</div>
                    <div className='dscript'>킥보드 상단의 QR코드를 스캔하여<br/>간편하게 대여하세요.</div>
                </div>
            </div>
            <div className="sect_agree">
                <div className="sect_controller"></div>
                <div className="sect_content"></div>
                <div className="sect_btn">
                </div>
            </div>
        </div>
    );
}

export default Home;