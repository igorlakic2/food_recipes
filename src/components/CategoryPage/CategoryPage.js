import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CategoryPage = () => {  
    const { name } = useParams();   

    const food = async (name) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
        console.log(response.data.meals);
    }

    useEffect(() => {
        food(name);
    }, []);    

    return (
        <div>
            {name}
        </div>
    );
}

export default CategoryPage;
