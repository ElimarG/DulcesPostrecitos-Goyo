import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './main.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const addProduct = (num) => {
        setQuantity(quantity + num);
    };

    return (
        <>
        <div className="count-container__contador">
            <button className="count-container__button" onClick={() => addProduct(-1)} disabled={quantity === initial ? true : null}>-</button>
            <span className="count-container__qty">{quantity}</span>
            <button className="count-container__button" onClick={() => addProduct(+1)} disabled={quantity === stock ? true : null}>+</button>
        </div>
        <a href="/" className="cart-btn" onClick={() => onAdd(quantity)} disabled={stock === 0 ? true : null}><FontAwesomeIcon icon={faCartShopping} /> Añadir</a>
        </>
    );
  };
  
  export default ItemCount;
