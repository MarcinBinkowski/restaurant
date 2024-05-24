import { Col,  Row, } from "react-bootstrap";
import '../assets/styles/index.css';
import {FC} from "react";

const HomePage: FC = () => {
    return (
            <Row className="d-flex main-content">
                <Col>
                    <div className="custom-paragraph">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    </div>
                    <p className="custom-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus tortor in magna semper
                        hendrerit. Sed euismod lacus sem, id interdum magna dapibus ornare. Etiam feugiat lacus ante, eu
                        maximus orci tempus non. Sed accumsan sagittis eros sit amet eleifend. Morbi libero neque,
                        ornare eu arcu vitae, rutrum bibendum turpis. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Mauris non nibh et tortor consectetur consequat.
                        Vestibulum id est eleifend, volutpat nibh ac, condimentum velit.

                        Duis nec nisi vitae tortor pharetra faucibus. Integer vel rutrum lacus. Vestibulum ut elit
                        euismod sem cursus aliquam. Sed eu pulvinar mi. Nunc pharetra turpis tempor tortor maximus
                        rutrum. Sed semper commodo ex, ac imperdiet nisl. Fusce nisi erat, viverra eget finibus sed,
                        condimentum sit amet orci. Maecenas a tincidunt lorem, et porttitor tellus. Cras scelerisque in
                        dolor eget dictum. Morbi nec ante sollicitudin, egestas turpis eget, venenatis massa. Vestibulum
                        efficitur fringilla feugiat. Nunc ut finibus tortor. Aliquam convallis ex eget dui egestas, sed
                        pellentesque arcu semper. Integer nibh ante, aliquet et augue non, maximus dignissim quam. Duis
                        vitae rhoncus nunc, id sagittis justo.
                    </p>
                </Col>
            </Row>
    );
}


export default HomePage;