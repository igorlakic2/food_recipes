import React from 'react';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const styles = {
        textAlign: 'center'
    }

    return (      
        <Link to={`/category/${props.name}`}>  
            <div style={styles} >
                <img src={props.thumbnail} alt="" style={{ width: '60%', height: '60%' }} />
                <h3 style={{ marginTop: '10px' }}>{props.name}</h3>
            </div>            
        </Link>
    );
}

export default Category;

// onClick={() => onCategoryClick(props.name)}