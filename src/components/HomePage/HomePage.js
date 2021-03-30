import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Category from '../Category/Category';

const Home = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(response.data.categories);
    }

    useEffect(() => {
        getCategories();
    }, []);    

    const categoriesList = categories.map((category) => {
        return <Category thumbnail={category.strCategoryThumb} name={category.strCategory} />
    });

    return (
        <div>
            <div className="header-div header">
                <div className="header-left">
                    <h1>Food recipes</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius voluptates illo corporis saepe. Error asperiores nostrum 
                        voluptatum mollitia nesciunt dolorum, assumenda impedit. 
                        Rem eveniet, accusantium tempore?
                    </p>
                    <button><Link to="/">Categories <i className="angle down icon"></i></Link></button>                    
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
        </div>
    );
}
export default Home;
