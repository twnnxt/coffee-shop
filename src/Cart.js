import React from 'react';

const Cart = props => {
    return (
        <div className='Bean'>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <p>Price: {props.price}</p>   
            <p>Quantity: {props.quantity}</p>
        </div>
    )
}

export default Cart;