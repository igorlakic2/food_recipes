import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CategoryPage.css';
import Meal from '../Meal';

const CategoryPage = () => {  
    const { name } = useParams();   
    const [meals, setMeals] = useState([]);
    const [randomMeal, setRandomMeal] = useState(null);

    const food = async (name) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
        setMeals(response.data.meals);
    }

    useEffect(() => {
        food(name);
        getRandomMeal();

        const rndrnd = meals.filter((meal) => meal.strCategory === name);
        console.log(rndrnd);
    }, []);    

    const getRandomMeal = async () => {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');        
        setRandomMeal(response.data.meals[0]);
    }

    // const rnd = randomMeal.strCategory === name ? randomMeal : getRandomMeal();

    const renderMeals = meals.map((meal) => {
        return <Meal key={meal.idMeal} id={meal.idMeal} thumbnail={meal.strMealThumb} name={meal.strMeal} />
    });


    return (
        <div className="category-page">
            <div className="recommendation">
                <div className="left">
                    <h1>{name}</h1>
                    <p>Our recommendation</p>
                </div>
                <div className="right">
                    <input type="text" className="inputSearch" placeholder="Search meals" />
                </div>
            </div>
            <div className="meals">{renderMeals}</div>
        </div>
    );
}

export default CategoryPage;
