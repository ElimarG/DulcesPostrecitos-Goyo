import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const ItemDetail = ({ item }) => {
	const [add, setAdd] = useState(false);
	const { addItem } = useContext(CartContext)

    const onAdd = (quantity) => {
		setAdd(true);
		addItem(item, quantity)
		toast.success(`Agregaste ${quantity} ${item.title} (${item.detail})`, {
			theme: "light",
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
    };

    return (
		<>
        <div className="single-product mt-150 mb-150">
			<div className="container">
				<div className="row">
					<div className="col-md-5 img-fluid">
						<div className="single-product-img">
							<img className="mx-auto d-block" src={item.image} alt="" />
						</div>
					</div>
					<div className="col-md-7">
						<div className="single-product-content">
							<h3>{item.title}</h3>
							<p className="single-product-pricing"><span>{item.detail}</span>$ {item.price}</p>
							<p>{item.description}</p>
							<div className="single-product-form">
								{ add ? (
									<Link to="/cart" className="cart-btn Link">Terminar compra</Link>
								) : (
									<ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
    );
  };
  
  export default ItemDetail;