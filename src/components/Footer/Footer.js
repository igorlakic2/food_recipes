import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <div className="logo">
                    <img src="https://media-exp1.licdn.com/dms/image/C560BAQH9dPJajdXi_Q/company-logo_200_200/0/1579555511549?e=2159024400&v=beta&t=t50NC6wCpKlFL8QjsFOXIzJkQVdWQsGZ0PVIhTAujKQ" alt=""/>
                </div>
                <div className="social">
                    <Link to="/facebook" target="_blank"><i className="facebook f icon"></i></Link>
                    <Link to="/instagram" target="_blank"><i className="instagram icon"></i></Link>
                </div>
            </div>
            <p>Copyright - Igor Lakić</p>
        </div>
    );
}

export default Footer;
