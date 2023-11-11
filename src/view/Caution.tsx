// Caution.tsx
import React from 'react';
import '../App.scss';
import Nav from '../component/Nav';
import Button from '../component/Button';

function Caution(): JSX.Element {
    return (
        <div className="page_caution">
            <Nav nav_props={{ title: "킥세이프" }} />
            <div>
                <Button title="모든 주의사항을 확인했어요." type={{ is_error: true, is_activated: false }} />
            </div>
        </div>
    );
}

export default Caution;