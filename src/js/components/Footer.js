import React from 'react';
import {useHistory} from "react-router-dom";

const Footer = () => {
    const history = useHistory();
    return (
        <footer>
            <div className="copy">
                <p className='copy-txt'>@2021 Morfozaur</p>
            </div>

            <div className="contact">
                <p className='copy-link'
                   onClick={()=>history.push('/about')}>O Shortech</p>
            </div>
        </footer>
    );
}

export default Footer;