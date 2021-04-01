import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

const Header = (props) => {    
    const history = useHistory();

    const showMenuItems = (path) => {
        return window.location.pathname === '/' ? 
        <li className="avatar">
            <i className="user circle outline icon"></i>
        </li> : 
        <li>
            <Link className="link" to="/">Home</Link>
        </li>;
    }

    const onInputSubmit = (event) =>{
        if(event.key == 'Enter'){
            history.push(`/search/${event.target.value}`);
        }
    }
    

    return (
        <div className="header">
            <div className="searchBar">
                <input 
                    type="text" 
                    className="inputSearch" 
                    onKeyPress={onInputSubmit} 
                    placeholder="Search recipes"
                ></input>
            </div>
            <div className="menu">
                    <div className="nav">
                        <ul>
                            {showMenuItems(props.path)}
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
