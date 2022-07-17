import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/actions";
import {useParams} from 'react-router'
import Skeleton from "react-loading-skeleton";
import {NavLink} from "react-router-dom";


const Product = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [cartBtn, setCartBtn] = useState('Agregar al carrito')
    const dispatch = useDispatch();
    
    
    const addProduct = (product) => {
      if(cartBtn === 'Agregar al carrito'){
          dispatch(addCart(product));
          setCartBtn('Quitar del carrito')
        }
        else{
          dispatch(delCart(product));
          setCartBtn('Agregar al carrito')
        }
      
    }



    const getProduct = async () => {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false)
  }
    useEffect(() => {
     
    
      getProduct()
    }, [])

    const Loading = () => {
        return (
          <>
            <div className="col-md-6">
              <Skeleton height={400} />
            </div>
            <div className="col-md-6" style={{lineHeight:2}}>
              <Skeleton height={50} width={300} />
              <Skeleton height={75} />
              <Skeleton height={25} width={150} />
              <Skeleton height={50} />
              <Skeleton height={150} />
              <Skeleton height={50} width={100} />
              <Skeleton height={50} width={100} style={{marginLeft:6}}/>
            </div>
            
          </>
        );
      };

      const ShowProduct = () => {
        return (
          <>
          <div className="col-md-6">
              <img src={product.image} alt={product.title} height="400px" width="400px"/>
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
          
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}  
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark my-5" onClick={()=> addProduct(product)}>{cartBtn}</button>
          <NavLink to="/carrito" className="btn btn-dark ms-2 px-3 py-2">Ir a carrito</NavLink>
          </div>
          </>
        )};
    
  return (
    <div>
      <div className="container py-5">
          <div className="row py-4">
              {loading ?  <Loading/> : <ShowProduct/>}
          </div>
      </div>
    </div>
  )
}

export default Product