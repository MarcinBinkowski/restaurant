import {FC} from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
import "../assets/styles/NavBar.css"
import '../assets/styles/Buttons.css';

const NavBar: FC = () => {
    return (
        <>
            <Nav variant="pills" defaultActiveKey="/" className="flex-row navigation">
                <Nav.Item>
                    <Link to="/" className="nav-link main-button">Strona główna</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/menu" className="nav-link main-button">Menu</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/reservation" className="nav-link main-button">Rezerwacje</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/map" className="nav-link main-button">Mapa</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/contact" className="nav-link main-button">Kontakt</Link>
                </Nav.Item>
            </Nav>

            <Navbar  expand="lg" className="dropdown-navigation">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="dropdown-toggle main-button" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <NavDropdown.Item as="div"><Link to="/" className="nav-link main-button">Strona główna</Link></NavDropdown.Item>
                        <NavDropdown.Item as="div"><Link to="/menu" className="nav-link main-button">Menu</Link></NavDropdown.Item>
                        <NavDropdown.Item as="div"><Link to="/reservation" className="nav-link main-button">Rezerwacje</Link></NavDropdown.Item>
                        <NavDropdown.Item as="div"><Link to="/map" className="nav-link main-button">Mapa</Link></NavDropdown.Item>
                        <NavDropdown.Item as="div"><Link to="/contact" className="nav-link main-button">Kontakt</Link></NavDropdown.Item>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;