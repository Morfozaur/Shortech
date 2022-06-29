import React from 'react';
import {useHistory} from "react-router-dom";

const Footer = () => {
    const history = useHistory();

    const toAbout = () => {
        history.push('/about');
        window.scrollTo(0, 0);
    }
    return (
        <footer>
            <div className="copy">
                <p className='copy-txt'>@2021 Morfozaur</p>
            </div>

            <div className="contact">
                <p className='copy-link'
                   onClick={toAbout}>O Shortech</p>
            </div>
        </footer>
    );
}

export default Footer;