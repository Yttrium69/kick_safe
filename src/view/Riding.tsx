    import React, { useState } from 'react';
    import '../App.scss';
    import Nav from '../component/Nav';
    import Body from '../component/Body';
    import Button from '../component/Button';
    import { useNavigate } from 'react-router-dom';

    import ModalComponent from '../component/ModalComponent';

    const Riding: React.FC = () => {
    const move_page = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);

    // Finish Riding
    const finish_riding = () => {
        setModalOpen(true); // Open the modal
    };

    // Close the modal
    const closeModal = () => {
        setModalOpen(false);
        move_page('/');
    };

    return (
        <div className="page_riding">
        {/* Navigator */}
        <div>
            <Nav nav_props={{ title: '킥세이프', show_x: false, show_logo: true }} />
        </div>
        {/* Body */}
        <div>
            <Body title="주행중..." />
        </div>
        <div>
            <ModalComponent isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
        {/* Footer */}
            <Button
                title="주행 완료"
                type={{ is_error: true, is_activated: false }}
                isButtonActivated={true}
                onClick={finish_riding}
            />
        </div>
    );
    };

    export default Riding;
