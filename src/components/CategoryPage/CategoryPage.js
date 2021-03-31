import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CategoryPage.css';
import Meal from '../Meal';

const CategoryPage = () => {  
    const { name } = useParams();   
    const [meals, setMeals] = useState([]);
    const [randomMeal, setRandomMeal] = useState([]);

    const food = async (category) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        setMeals(response.data.meals);
        setRandomMeal(response.data.meals[Math.floor(Math.random() * response.data.meals.length)]);
    }

    useEffect(() => {
        food(name);
    }, []);    

    const renderMeals = meals.map((meal) => {
        return <Meal key={meal.idMeal} id={meal.idMeal} thumbnail={meal.strMealThumb} name={meal.strMeal} />
    });


    return (
        <div className="category-page">
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
                    <input type="text" className="inputSearch" placeholder="Search meals" />
                </div>
            </div>
            <hr />
            <div className="meals">{renderMeals}</div>
        </div>
    );
}

export default CategoryPage;
