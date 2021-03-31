import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const style = props.style ? {textAlign: 'left'} : {textAlign: 'center'};
    return (
        <div>
            <Link to={`/single_meal/${props.id}`} style={{display: 'inline-block'}}>  
                <div style={style}>
                    <img src={props.thumbnail} alt={props.name} style={{ width: '250px' }} /> 
                    <p style={{padding: '0'}}>{props.name}</p>
                </div>            
            </Link>
        </div>
    );
}

export default Meal;
