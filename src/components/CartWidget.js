import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="header-icons">
            <FontAwesomeIcon icon={faCartShopping} />
            { cart === 0 ? (
                <div className="qty-display"></div>
            ) : (
                <div className="qty-display">{cart.length}</div>
            )}
        </div>
    );
  };
  
  export default CartWidget;
