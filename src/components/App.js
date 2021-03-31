import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import CategoryPage from './CategoryPage/CategoryPage';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route path="/" exact component={HomePage} />
                <Route path="/category/:name" exact component={CategoryPage} />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
