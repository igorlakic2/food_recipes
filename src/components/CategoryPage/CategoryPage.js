import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CategoryPage.css';
import Meal from '../Meal';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const CategoryPage = () => {  
    const { name } = useParams();   
    const [meals, setMeals] = useState([]);
    const [randomMeal, setRandomMeal] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const food = async (category) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        setMeals(response.data.meals);
        setRandomMeal(response.data.meals[Math.floor(Math.random() * response.data.meals.length)]);
    }


    useEffect(() => {
        food(name);
    }, []);    

    useEffect(() => {        
        search(searchTerm);
    }, [searchTerm]);

    const search = (term) => {
        const niz = [...meals].filter((meal) => meal.strMeal.includes(term));
        setSearchResults(niz);
    }

    const renderMeals = meals.map((meal) => {
        return <Meal key={meal.idMeal} id={meal.idMeal} thumbnail={meal.strMealThumb} name={meal.strMeal} />
    });
    
    const searchResultsList = searchResults.map((meal) => {
        return <Meal key={meal.idMeal} id={meal.idMeal} thumbnail={meal.strMealThumb} name={meal.strMeal} />
    })

    return (
        <div className="category-page">
            <Header />
            <div className="our-recommendation">
                <div className="left">
                    <h1>{name}</h1>
                    <div className="recommendation">
                        <p style={{ textAlign: 'left' }}>Our recommendation</p>
                        { <Meal 
                            id={randomMeal.idMeal} 
                            thumbnail={randomMeal.strMealThumb}  
                            name={randomMeal.strMeal}
                            style
                        /> } 
                    </div>
                </div>
                <div className="right">
                    <input onChange={(event) => setSearchTerm(event.target.value)} type="text" className="inputSearch" placeholder="Search meals" />
                </div>
            </div>
            <hr />
            <div className="meals">{searchTerm.length > 0 ? searchResultsList : renderMeals}</div>
            <Footer />
        </div>
    );
}

export default CategoryPage;
