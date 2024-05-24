import React from 'react';
import NavBar from '../components/NavBar';
import Footer from './Footer';
import '../assets/styles/index.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import restaurantImage from "../assets/images/billssteak.webp";
import MainLinkButton from "./MainLinkButton";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <NavBar />
            <Container className="main-content">
                <Row>
                    <div className="content-wrapper">
                        <Col className="main-content ">
                            <Image src={restaurantImage} alt="Restaurant" className="restaurant-image" fluid={true}/>
                        </Col>
                        <Col className="d-flex main-content">
                            {children}
                        </Col>
                    </div>
                    <MainLinkButton link="https://www.pyszne.pl/menu/steakhouse-safir" text="Złóż zamówienie" />
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

export default Layout;