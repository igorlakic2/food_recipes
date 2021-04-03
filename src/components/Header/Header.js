import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import { HashLink } from 'react-router-hash-link';

const Header = (props) => {    
    const history = useHistory();
    const [showForm, setShowForm] = useState(false);
    const [logged, setLogged] = useState(false);
    const [loginData, setLoginData] = useState({
        email: null,
        password: null
    })

    const showMenuItems = () => {
        return window.location.pathname === '/' ? 
        <li className="avatar" onClick={() => setShowForm(!showForm)} style={{userSelect: 'cursor'}}>
            <i className="user circle outline icon"></i>
        </li>        
        : 
        <li>
            <Link className="link" to="/">Home</Link>
        </li>
        ;
    }

    const showMyMeals = () => {
        if(logged){
            return <li style={{userSelect: 'cursor'}}>
                        <Link className="link" to="/mymeals">My meals</Link>
                    </li>;
        }else{
            return null;
        }
    }

    const onInputSubmit = (event) =>{
        if(event.key === 'Enter'){
            history.push(`/search/${event.target.value}`);
        }
    }

    const onLogin = (event) => {
        event.preventDefault();
        setShowForm(!showForm);
        if(loginData.email === 'user@mail.com' && loginData.password === 'pwd'){
            setLogged(true);
        }
    }

    const logInOrOut = () => {
        return !logged ? <div className="login-form" style={{position: 'absolute', right: '15%', top: '20%'}}>
            <form onSubmit={onLogin}>
                <input type="email" onChange={(event) => setLoginData({...loginData, email: event.target.value})} placeholder="Email //user@mail.com"/>
                <input type="password" onChange={(event) => setLoginData({...loginData, password: event.target.value})} placeholder="Password //pwd" />
                <button>Login</button>
            </form>                
        </div> 
        : 
        <ul style={{position: 'absolute', right: '15%', top: '20%'}}>
            <li style={{userSelect: 'cursor'}} onClick={() => {setLogged(!logged); setShowForm(!showForm); }}>Logout</li>
        </ul>;
    }

    return (
        <div className="header">
            {showForm ? logInOrOut() : null}
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
                            {showMenuItems()}
                            <li>
                                <HashLink smooth className="link" to="/#about-us">About Us</HashLink>
                            </li>
                            <li>
                                <HashLink smooth className="link" to="/#contact">Contact</HashLink>
                            </li>
                            {showMyMeals()}
                        </ul>
                    </div>
            </div>
        </div>
    );
}

export default Header;
