import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import '../assets/styles/Footer.css';

const Footer: FC = () => {
    return (
        <Container fluid className="footer-container">
            <Row>
                <Col className="footer-text py-3">
                    &copy; 2024 Bill's Steak House
                </Col>
            </Row>
            <Row>
                <Col className="footer-text py-3">
                    Nasze media społecznościowe
                </Col>
            </Row>
            <Row>
                <Col className="text-center py-3">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x"/>
                    </a>
                    <a href="https://www.youtube.com/watch?v=y6120QOlsfU&ab_channel=Darude" className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;