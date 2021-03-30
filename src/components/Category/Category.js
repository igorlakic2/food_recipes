import React from 'react';

const Category = (props) => {
    const styles = {
        textAlign: 'center'
    }

    return (
        <div style={styles}>
            <img src={props.thumbnail} alt="" style={{ width: '60%', height: '60%' }} />
            <h3>{props.name}</h3>
        </div>
    );
}

export default Category;
