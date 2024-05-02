import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import '../index.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import restaurantImage from "../assets/images/billssteak.png";

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <Container className="d-flex main-content">
                <Row >
                    <Col className="d-flex main-content">
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