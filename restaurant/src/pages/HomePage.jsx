import React from 'react';
import Layout from "../components/Layout.jsx";
import restaurantImage from '../assets/images/billssteak.png';
import {Button, Col, Container, Row,Image, } from "react-bootstrap";
import '../assets/styles/index.css';
import OrderButton from "../components/OrderButton.jsx";

function HomePage() {
    return (
            <Row className="d-flex main-content">
                <Col>
                    <p className="custom-paragraph">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        Ut quis suscipit elit.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Praesent at tempor leo, vitae aliquam risus. Aenean aliquam venenatis sem vitae pretium.
                        Nulla luctus mi vitae ante sagittis, vel pulvinar lectus vulputate.
                        Vestibulum ornare lacus est, eu laoreet felis suscipit vel.
                        Aenean at aliquet nisl.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum ut tellus tristique velit feugiat consectetur.
                    </p>
                    <OrderButton />
                </Col>
            </Row>
    );
}


export default HomePage;