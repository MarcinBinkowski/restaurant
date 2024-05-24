import {useState, useEffect, FC} from 'react';
import { Container } from 'react-bootstrap';



const MapPage: FC = () => {
    const latitude = 49.62177;
    const longitude = 20.69615;
    const [src, setSrc] = useState('');

    useEffect(() => {
        setSrc(`https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01}%2C${latitude-0.01}%2C${longitude+0.01}%2C${latitude+0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`);
    }, [latitude, longitude]);

    return (
        <>
            <Container fluid style={{ height: "100vh", width:"70vh", display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            <p className="custom-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </p>
                <iframe
                    width="100%"
                    height="60%"
                    src={src}
                    style={{border: 0}}
                >
                </iframe>
            </Container>
        </>

    );
}

export default MapPage;