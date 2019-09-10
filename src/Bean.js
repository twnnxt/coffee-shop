import React from 'react';
import './Bean.css'

const Bean = props => {
    return (
        <div className='Bean'>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <p>{props.price}</p>   
            <button onClick={props.click}>Add one to cart!</button> 
        </div>
    )
}

export default Bean;