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
                        <div style={{paddingTop: '7px'}}>
                            <p style={{padding: '0', margin: '0'}}>Category: <b>{meal.strCategory}</b></p>
                            <p style={{padding: '0', margin: '0'}}>Country: <b>{meal.strArea}</b></p>
                        </div>
                    </div>            
                </Link>;
    });    

    useEffect(() => {
        searchResults(term);
        getRandomMeal();
    }, [term]);

    const newAr = [...meals];
    newAr.sort((a,b) => a.strCategory > b.strCategory);
    const xy = newAr.sort((a,b) => a.strCategory > b.strCategory).map((x) => {
        <Link to={`/single_meal/${x.idMeal}`} style={{color: 'black', display: 'inline-block'}} key={x.idMeal}>  
                    <div>
                        <img src={x.strMealThumb} alt={x.strMeal} style={{ width: '250px' }} /> 
                        <p style={{padding: '0'}}>{x.strMeal}</p>
                        <div style={{paddingTop: '7px'}}>
                            <p style={{padding: '0', margin: '0'}}>Category: <b>{x.strCategory}</b></p>
                            <p style={{padding: '0', margin: '0'}}>Country: <b>{x.strArea}</b></p>
                        </div>
                    </div>            
                </Link>
    });

    // const sortedMealsList = meals.sort((a, b) => a.strCategory > b.strCategory ? 1 : -1)
    //     .meals.map(meal => {
    //     return <Link to={`/single_meal/${meal.idMeal}`} style={{color: 'black', display: 'inline-block'}} key={meal.idMeal}>  
    //                 <div>
    //                     <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '250px' }} /> 
    //                     <p style={{padding: '0'}}>{meal.strMeal}</p>
    //                     <div style={{paddingTop: '7px'}}>
    //                         <p style={{padding: '0', margin: '0'}}>Category: <b>{meal.strCategory}</b></p>
    //                         <p style={{padding: '0', margin: '0'}}>Country: <b>{meal.strArea}</b></p>
    //                     </div>
    //                 </div>            
    //             </Link>;
    // });

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
                                <div>
                                    <p style={{padding: '0', margin: '0'}}>Category: <b>{randomMeal.strCategory}</b></p>
                                    <p style={{padding: '0', margin: '0'}}>Country: <b>{randomMeal.strArea}</b></p>
                                </div>
                            </div>  
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <select>
                        <option value="category">Category</option>
                    </select>
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
