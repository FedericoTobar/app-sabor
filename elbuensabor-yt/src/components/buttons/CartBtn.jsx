import React from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

const CartBtn = () => {
  const state = useSelector((state)=> state.handleCart )
  return (
    <div>
        <NavLink to="/carrito" className="btn btn-outline-dark ms-2">
              <span className="fa fa-shopping-cart me-1"></span>
              
              Cart ({state.length})</NavLink>
    </div>
  )
}

export default CartBtn