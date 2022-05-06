import React from 'react';
import logo from '../logo.png';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const Navbar = () => {
    return (
        <div className="top-header-area" id="sticker">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 text-center">
                        <div className="main-menu-wrap">
                            <div className="site-logo">
                                <a href="/">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                            <nav className="main-menu">
                                <ul>
                                    <li className="current-list-item"><a href="/">Inicio</a></li>
                                    <li><a href="/">Nosotros</a></li>
                                    <li><a href="/">Productos</a>
                                        <ul className="sub-menu">
                                            <li><a href="/">Tortas</a></li>
                                            <li><a href="/">CupCake</a></li>
                                            <li><a href="/">Galletas</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Contacto</a></li>
                                    <li>
                                        <CartWidget />
								    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Navbar;