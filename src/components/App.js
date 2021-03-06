import React from 'react';
import HomePage from './HomePage/HomePage';
import CategoryPage from './CategoryPage/CategoryPage';
import { Route, BrowserRouter } from 'react-router-dom';
import SingleMeal from './SingleMealPage/SingleMeal';
import SearchPage from './SearchPage/SearchPage';
import MyMeals from './MyMealsPage/MyMeals';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={HomePage} />
                <Route path="/category/:name" exact component={CategoryPage} />
                <Route path="/single_meal/:id" exact component={SingleMeal} />
                <Route path="/search/:term" exact component={SearchPage} />
                <Route path="/mymeals" exact component={MyMeals} />
                <Route path="/facebook" component={() => { 
                    window.location.href = 'https://www.facebook.com'; return null;
                }} />
                <Route path="/instagram" component={() => { 
                    window.location.href = 'https://www.instagram.com'; return null;
                }} />
            </div>
        </BrowserRouter>
    );
}

export default App;
