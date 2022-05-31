import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
import Breadcrumb from './Breadcrumb';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const Order = () => {
    const { cart, getTotal } = useContext(CartContext);

    const onClick = () => {
        toast.success(`Pedido generado! 
        Pronto recibira un mail de seguimiento`, {
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
        <Breadcrumb title="Orden de Compra" description="Horneamos todos los días" />
        <div className="checkout-section mt-100 mb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="checkout-accordion-wrap">
                            <div className="accordion" id="accordionExample">
                                <div className="card single-accordion accordion-item">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0 accordion-header">
                                            <button className="btn btn-link accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Datos de facturación
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="card-body accordion-body">
                                            <div className=" billing-address-form">
                                                <form>
                                                    <p><input type="text" placeholder="Nombre" name="name" required/></p>
                                                    <p><input type="email" placeholder="Email" name="email" required/></p>
                                                    <p><input type="text" placeholder="Dirección" name="address" required/></p>
                                                    <p><input type="tel" placeholder="Telefono" name="phone" required/></p>
                                                    <p><textarea name="note" id="bill" cols="30" rows="10" placeholder="Notas"></textarea></p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card single-accordion accordion-item">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0 accordion-header">
                                            <button className="btn btn-link accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Dirección de envío
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className=" card-bodyaccordion-body">
                                            <div className="billing-address-form">
                                                <form>
                                                    <p><input type="text" placeholder="Dirección"  name="addressng" required/></p>
                                                    <p><input type="text" placeholder="Piso" name="floor" required/></p>
                                                    <p><input type="text" placeholder="Departamento" name="department" required/></p>
                                                    <p><input type="text" placeholder="Entre calles" name="streets" /></p>
                                                    <p><textarea name="observation" id="bill" cols="30" rows="10" placeholder="Observación"></textarea></p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card single-accordion accordion-item">
                                    <div className="card-header" id="headingThree">
                                        <h5 className="mb-0 accordion-header">
                                            <button className="btn btn-link accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Detalle de la compra
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="card-body accordion-body">
                                            <div className="card-details">
                                                <table className="order-details">
                                                    <thead>
                                                        <tr>
                                                            <th>Producto</th>                                                            
                                                            <th>Precio</th>
                                                            <th>Cantidad</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="order-details-body">
                                                    { (cart.map(product => {
                                                        return(
                                                            <tr key={product.id}> 
                                                                <td>{product.title}</td>
                                                                <td>${product.price}</td>
                                                                <td>{product.quantity}</td>
                                                                <td>${product.quantity * product.price}</td>
                                                            </tr>
                                                        );
                                                    }))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="order-details-wrap">
                            <table className="order-details">
                                <thead>
                                    <tr>
                                        <th>Detalle de su pedido</th>
                                        <th>Precio</th>
                                    </tr>
                                </thead>
                                <tbody className="checkout-details">
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>${getTotal()}</td>
                                    </tr>
                                    <tr>
                                        <td>Envío</td>
                                        <td>$150</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>${getTotal() + 150}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="submit" className="cart-btn boxed-btn" onClick={onClick}>Hacer pedido</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
  
export default Order;