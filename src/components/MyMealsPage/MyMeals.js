import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import Meal from '../Meal';
import './MyMeals.css';

const MyMeals = () => {
    const [randomMeals, setRandomMeals] = useState([]);

    const getRandomMeals = async () => {
        const array = [];
        for(let i=0; i<3; i++){
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
            array.push(response.data.meals[0]);
        }
        setRandomMeals(array);
    }

    useEffect(() => {
        getRandomMeals();
    }, []);

    const randomMealsList = randomMeals.map((meal) => {
        return <Meal key={meal.idMeal} id={meal.idMeal} thumbnail={meal.strMealThumb} name={meal.strMeal} />
    })

    return (
        <div>
            <Header />
            <div className="random-meals">{randomMealsList}</div> 
            <Footer />
        </div>
    );
}

export default MyMeals;
