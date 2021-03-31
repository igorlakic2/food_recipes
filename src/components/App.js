import React from 'react';
import HomePage from './HomePage/HomePage';
import CategoryPage from './CategoryPage/CategoryPage';
import { Route, BrowserRouter } from 'react-router-dom';
import SingleMeal from './SingleMealPage/SingleMeal';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={HomePage} />
                <Route path="/category/:name" exact component={CategoryPage} />
                <Route path="/single_meal/:id" exact component={SingleMeal} />
            </div>
        </BrowserRouter>
    );
}

export default App;
