import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './SearchPage.css';

const SearchPage = () => {
    const { term } = useParams(); 
    const [meals, setMeals] = useState([]);
    const [randomMeal, setRandomMeal] = useState([]);

    const searchResults = async (term) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
        setMeals(response.data.meals);        
    }

    const getRandomMeal = async () => {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        setRandomMeal(response.data.meals[0]);
    }

    const mealsList = meals.map(meal => {
        return <Link to={`/single_meal/${meal.idMeal}`} style={{color: 'black', display: 'inline-block'}} key={meal.idMeal}>  
                    <div>
                        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '250px' }} /> 
                        <p style={{padding: '0'}}>{meal.strMeal}</p>
                    </div>            
                </Link>;
    });

    useEffect(() => {
        searchResults(term);
        getRandomMeal();
    }, [term])

    return (
        <div>
            <Header />
            <div className="our-recommendation">
                <div className="left">
                    <h1>Search results</h1>
                    <div className="recommendation">
                        <p style={{ textAlign: 'left' }}>Our recommendation</p>
                        <Link to={`/single_meal/${randomMeal.idMeal}`} style={{color: 'black', display: 'inline-block'}}> 
                            <div>
                                <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} style={{ width: '250px' }} /> 
                                <p style={{padding: '0'}}>{randomMeal.strMeal}</p>
                            </div>  
                        </Link>
                    </div>
                </div>
                <div className="right">
                    dropdown
                </div>
            </div>
            <hr />            
            <div className="search-results">
                {mealsList}
            </div>
            <Footer />
        </div>
    );
}

export default SearchPage;
