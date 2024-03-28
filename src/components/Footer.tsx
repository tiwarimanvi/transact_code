import React from "react";
import { FaXing, FaLinkedin, FaInstagram } from 'react-icons/fa';
import "../css/Footer.css"

const XingIcon = () => (
    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
      <FaXing size={32} />
    </a>
);

const LinkedinIcon = () => (
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={32} />
    </a>
);

const InstagramIcon = () => (
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={32} />
    </a>
);

function Footer() {
    return (
        <div className="footer">
            <div className="footer-heading">
                <span className='text'>transactcode</span>
            </div>
            <div className="footer-copyright">
                <span>© Transact Code 2023</span>
            </div>
            <div className="footer-handles">
                <span><XingIcon /></span>
                <span><LinkedinIcon /></span>
                <span><InstagramIcon /></span>
            </div>
        </div>
    )
}

export default Footer;
