import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    return (
        <div>
            <Link to={`/single_meal/${props.id}`}>  
                <div style={{ textAlign: 'center' }}>
                    <img src={props.thumbnail} style={{ width: '50%', height: '50%' }} /> 
                    <p>{props.name}</p>
                </div>            
            </Link>
        </div>
    );
}

export default Meal;
