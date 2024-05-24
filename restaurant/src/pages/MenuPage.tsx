import {FC, useState} from 'react';
import { Modal } from 'react-bootstrap';
import menuImage from '../assets/images/menu.webp';
import backgroundImage from '../assets/images/background.webp';

const MenuPage: FC = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <img src={menuImage} alt="MenuPage" style={{ width: '100%', height: 'auto', cursor: "pointer" }} onClick={handleShow} />
            <Modal show={show} onHide={handleClose} fullscreen={true} centered className="modal-menu">
                <Modal.Body style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                    <img src={menuImage} alt="MenuPage" style={{ width: '100%', height: 'auto', cursor: "pointer" }} onClick={handleClose} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default MenuPage;
