import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <div className="logo">
                    <img src="https://media-exp1.licdn.com/dms/image/C560BAQH9dPJajdXi_Q/company-logo_200_200/0/1579555511549?e=2159024400&v=beta&t=t50NC6wCpKlFL8QjsFOXIzJkQVdWQsGZ0PVIhTAujKQ" width="130px" height="120px" alt=""/>
                </div>
                <div className="social">
                    <a href="www.facebook.com" target="_blank"><i className="facebook f icon"></i></a>
                    <a href="www.instagram.com" target="_blank"><i className="instagram icon"></i></a>
                </div>
            </div>
            <p>Copyright - Igor Lakić</p>
        </div>
    );
}

export default Footer;
