// Caution.tsx
import React from 'react';
import '../App.scss';
import Nav from '../component/Nav';
import Button from '../component/Button';
import CheckList from '../component/CheckList';
import Tag from '../component/Tag'
import Careful from '../component/Careful';

function Caution(): JSX.Element {
    return (
        <div className="page_caution">
            <div>
                <Nav nav_props={{ title: "킥세이프" }} />
            </div>

            <div className="body_container">
                <Tag img_src={"img/caution.svg"} background_color="#FDEDEA" font_color="#F01111" title="주의사항"></Tag>
                <CheckList title="헬멧은 필수!" description="킥세이프는 사용자의 헬멧 착용 여부를 자동으로 감지해요. 헬멧을 알맞게 착용한 사용자만이 킥보드 주행이 가능해요." />
                <CheckList title="헬멧은 필수!" description="킥세이프는 사용자의 헬멧 착용 여부를 자동으로 감지해요. 헬멧을 알맞게 착용한 사용자만이 킥보드 주행이 가능해요." />
            </div>
            
            <div>
                <Button title="모든 주의사항을 확인했어요." type={{ is_error: true, is_activated: false }} />
            </div>
        </div>
    );
}

export default Caution;