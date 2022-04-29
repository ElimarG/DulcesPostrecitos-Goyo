import React from 'react';
import logo from '../logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const Navbar = () => {
    return (
        <div class="top-header-area" id="sticker">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-sm-12 text-center">
                        <div class="main-menu-wrap">
                            <div class="site-logo">
                                <a href="index.html">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                            <nav class="main-menu">
                                <ul>
                                    <li class="current-list-item"><a href="/">Inicio</a></li>
                                    <li><a href="/">Productos</a>
                                        <ul class="sub-menu">
                                            <li><a href="/">Tortas</a></li>
                                            <li><a href="/">CupCake</a></li>
                                            <li><a href="/">Galletas</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Contacto</a></li>
                                    <li>
                                        <div class="header-icons">
                                            <a class="mobile-hide search-bar-icon" href="/">Login</a>
                                        </div>
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