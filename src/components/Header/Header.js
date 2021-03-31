import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <div className="searchBar">
                <input type="text" className="inputSearch" placeholder="Search recipes"></input>
            </div>
            <div className="menu">
                <div className="avatar">
                    <i className="user circle outline icon"></i>
                </div>
                    <div className="nav">
                        <ul>
                            <li>
                                <Link className="link" to="/">About Us</Link>
                            </li>
                            <li>
                                <Link className="link" to="/">Contact</Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    );
}

export default Header;
