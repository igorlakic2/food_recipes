import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Category from '../Category/Category';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = (props) => {
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState([]);
    const [singleFormData, setSingleFormData] = useState({
        fname: null,
        lname: null, 
        email: null,
        message: null
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [logged, setLogged] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const getCategories = async () => {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(response.data.categories);
    }

    useEffect(() => {
        getCategories();
    }, []);    

    const categoriesList = categories.map((category) => {
        return <Category 
                key={category.idCategory} 
                thumbnail={category.strCategoryThumb} 
                name={category.strCategory} 
        />
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        setFormData([...formData, singleFormData]);
        setFormSubmitted(true);
    }    

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const onFormSubmitMessage = () => {
        if(formSubmitted){
            const formMessage = "Your message has been sent"; 
            setTimeout(() => setFormSubmitted(false), 3000);
            return formMessage;   
        }else{
            const formMessage = "";
            return formMessage;
        }
    }

    

    useEffect(() => {
    }, [formSubmitted])

    return (
        <div>
            {/* {displayForm()} */}
            <Header />
            <div className="header-div header">
                <div className="header-left">
                    <h1>Food recipes</h1>
                    <p style={{ textAlign: 'left' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius voluptates illo corporis saepe. Error asperiores nostrum 
                        voluptatum mollitia nesciunt dolorum, assumenda impedit. 
                        Rem eveniet, accusantium tempore?
                    </p>
                    <button><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Categories <i className="angle down icon"></i></Link></button>                    
                </div>
                <div className="header-right">
                    <Link to="/category">
                        <img src="https://www.thinksmart.rs/static/images/slike/2.jpg" alt="asda" width="500" height="400" />                        
                    </Link>
                </div>
            </div>
            <div className="categories">
                {categoriesList}
            </div>
            <div className="about-us" id="about-us">
                <h2><span style={{borderBottom: '2px solid black', paddingBottom: '15px' }}>About Us</span></h2>
                <div className="about-row">
                    <div className="about-info">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe vel 
                            fugit est aspernatur, reprehenderit earum aliquid ipsa consectetur velit asperiores repellat quaerat 
                            dolorem neque at ad iusto alias veritatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Architecto incidunt laborum illo cupiditate, nam alias doloribus libero animi. Alias, ex dicta asperiores 
                            iure architecto molestias at distinctio cum. Non, animi. Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Est corrupti minima praesentium. Facere id ratione, doloribus ducimus, voluptatem, 
                            porro quos eos magni dolores consequatur deleniti eaque tempora quo sit harum.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="team"/>
                    </div>
                </div>
            </div>
            <div className="contact" id="contact">
                <h2 style={{ textAlign: 'center' }}><span style={{borderBottom: '2px solid black', paddingBottom: '15px' }}>Contact</span></h2>
                <div className="contact-form">
                    <form onSubmit={onFormSubmit}>
                        <div style={{textAlign: 'center', margin: 'auto', fontSize: '16px'}}>{onFormSubmitMessage()}</div>
                        <input type="text" onChange={(event) => setSingleFormData({...singleFormData, fname: event.target.value})} placeholder="First name" />
                        <input type="text" onChange={(event) => setSingleFormData({...singleFormData, lname: event.target.value})} placeholder="Last name" />
                        <input type="text" onChange={(event) => setSingleFormData({...singleFormData, email: event.target.value})} placeholder="Email" />
                        <textarea name="" onChange={(event) => setSingleFormData({...singleFormData, message: event.target.value})} cols="30" rows="10" placeholder="Message"></textarea>
                        <button style={{cursor: 'pointer'}}>Send</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Home;




            // <a data-tip='<div>
            //     <form action="">
            //         <input type="text" placeholder="Email" />
            //         <input type="password" placeholder="Password" />
            //     <button>Login</button>
            // </form>
            // </div>' data-event='click focus'>display</a>
            // <ReactTooltip globalEventOff='click' html={true} />