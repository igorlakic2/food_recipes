import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './SingleMeal.css';

const SingleMeal = () => {    
    const { id } = useParams();   
    const [singleMeal, setSingleMeal] = useState([]);
    const [similarMeals, setSimilarMeals] = useState([]);

    const getSingleMeal = async (id) => {
        const params = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setSingleMeal(params.data.meals[0]);

        renderSimilarMeals(params.data.meals[0].strCategory);
    }

    const renderSimilarMeals = async category => {        
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);   
        const array = [];
        
        for(let i=0; i<3; i++){
            array.push(response.data.meals[Math.floor(Math.random() * response.data.meals.length)]);     
        }   
        setSimilarMeals(array);
    }

    useEffect(() => {
        getSingleMeal(id);
    }, []);


    const similarList = similarMeals.map(meal => {
        return <div className="similar-meal" key={meal.idMeal}>                        
                    <img 
                        src={meal.strMealThumb} 
                        alt={meal.strMeal} 
                    />
                    <p>{meal.strMeal}</p>
                </div>
    });

    console.log(similarMeals);

    return (
        <div>
            <Header />
            <div className="single-meal">
                <div className="single-meal-top">
                    <div className="single-meal-image">
                        <h1>{singleMeal.strMeal}</h1>
                        <img src={singleMeal.strMealThumb} alt={singleMeal.strMeal} />
                    </div>
                    <div className="single-meal-info">
                        {/* { 
                            singleMeal.strTags.split(",").map((tag) => {
                                return <h4 key={tag} style={{display: 'inline-block'}}>#{tag} </h4>
                            })
                        }  */}
                        <p><b>Category:</b> {singleMeal.strCategory}</p>
                        <p><b>Country:</b> {singleMeal.strArea}</p>
                        <p><b>Video:</b> {singleMeal.strYoutube}</p>
                        <p>{singleMeal.strInstructions}</p>
                    </div>
                </div>
                <div className="single-meal-bottom">
                    <table>
                        <tbody>
                            <tr>
                                <th>Ingredients</th>
                                <th>Measure</th> 
                            </tr>
                            <tr>
                                <td>{singleMeal.strIngredient1}</td>
                                <td>{singleMeal.strMeasure1}</td>
                            </tr>
                            <tr>
                                <td>{singleMeal.strIngredient2}</td>
                                <td>{singleMeal.strMeasure2}</td>
                            </tr>
                            <tr>
                                <td>{singleMeal.strIngredient3}</td>
                                <td>{singleMeal.strMeasure3}</td>
                            </tr>
                            <tr>
                                <td>{singleMeal.strIngredient4}</td>
                                <td>{singleMeal.strMeasure4}</td>
                            </tr>
                            <tr>
                                <td>{singleMeal.strIngredient5}</td>
                                <td>{singleMeal.strMeasure5}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="similar-meals">
                <h2>Similar meals</h2>  
                <div style={{display: 'flex', alignSelf: 'start'}}>      
                    {similarList}
                </div>      
            </div>
            <Footer />
        </div>
    );
}

export default SingleMeal;
