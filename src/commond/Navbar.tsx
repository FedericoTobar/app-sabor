import React, { useEffect, useState } from "react";
import { Article, CartService } from '../service/Cart.service';

const Navbar = () => {

    const [cartService] = useState<CartService>(new CartService());
    const [articulos, setArticulos] = useState<number>(0);
    useEffect(function(){
        setArticulos( cartService.cantidadDeArticulos() )
    },[])

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="#">EL BUEN SABOR</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                    
                    <div className="buttons">
                        <a href="" className="btn mx-2">
                            <i className="fa fa-sign-in me-1"></i>
                            Login</a>

                        <a href="" className="btn mx-2">
                            <i className="fa fa-user-plus me-1"></i>
                            Register</a>

                        <a href="" className="btn btn-outline-dark mx-2">
                            <i className="fa fa-shopping-cart me-1"></i>
                            Cart {articulos}</a>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar