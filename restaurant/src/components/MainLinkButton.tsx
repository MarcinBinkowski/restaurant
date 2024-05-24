import { FC } from 'react';
import '../assets/styles/Buttons.css';
import {Link} from "react-router-dom";

interface MainLinkButtonProps {
    link: string;
    text: string;
}

const MainLinkButton: FC<MainLinkButtonProps> = ({ link, text }) => {
    return(
        <Link to={link} className="main-button">
            {text}
        </Link>
    )
}

export default MainLinkButton;