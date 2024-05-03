import Navigation from '../pages/Navigation.jsx';
import Footer from './Footer';
import '../assets/styles/index.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import restaurantImage from "../assets/images/billssteak.png";

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <Container className="main-content">
                <Row >
                    <Col className="main-content">
                        <Image src={restaurantImage} alt="Restaurant" className="restaurant-image" fluid={true}/>
                    </Col>
                    <Col className="d-flex main-content">
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Layout;