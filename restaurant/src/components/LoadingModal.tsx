import {FC, ReactNode} from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';

interface LoadingModalProps {
    showModal: boolean;
    isLoading: boolean;
    handleCloseModal: () => void;
    titleBeforeLoad: string;
    titleAfterLoad: string;
    body: ReactNode;
}

const LoadingModal: FC<LoadingModalProps> = ({ showModal, isLoading, handleCloseModal, titleBeforeLoad, titleAfterLoad, body }) => {
    return (
        <Modal show={isLoading || showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>{isLoading ? `${titleBeforeLoad}` : titleAfterLoad}</Modal.Title>
            </Modal.Header>
            {isLoading ? (
                <Modal.Body>
                    <Spinner animation="border" />
                </Modal.Body>
            ) : (
                <Modal.Body>
                    {body}
                </Modal.Body>
            )}
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LoadingModal;