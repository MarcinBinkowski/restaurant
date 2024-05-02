import React from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import "../NavBar.css"
function Navigation() {
    return (
        <Nav variant="pills" defaultActiveKey="/" className="flex-row navigation">
            <Nav.Item>
                <Link to="/" className="nav-link nav-button">Strona główna</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/menu" className="nav-link nav-button">Menu</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/reservation" className="nav-link nav-button">Rezerwacje</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/contact" className="nav-link nav-button">Kontakt</Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;