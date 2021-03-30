import React from 'react';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import CategoryPage from './CategoryPage/CategoryPage';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route path="/" exact component={HomePage} />
                <Route path="/category" exact component={CategoryPage} />
            </div>
        </BrowserRouter>
    );
}

export default App;
