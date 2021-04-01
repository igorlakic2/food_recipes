import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';

const SearchPage = () => {
    const { term } = useParams(); 

    return (
        <div>
            <Header />
            {term}
            <Footer />
        </div>
    );
}

export default SearchPage;
