import React, { useEffect, useState } from "react";
import { Article, CartService } from "../service/Cart.service";


const CartPanel = () => {
    const [cartService] = useState<CartService>(new CartService());
    const [articulos, setArticulos] = useState<Article[]>([]);

    useEffect(() => {
        setArticulos( cartService.articulos )
    }, []);

    function aumentar(id:number) {
        cartService.aumentarArticulo(id)
        setArticulos( cartService.articulos )
    }

    function disminuir(id:number) {
        cartService.disminuirArticulo(id)
        setArticulos( cartService.articulos )
    }

    const Item = (props:{article: Article}) => {
        return(<>
            <div className="p-2 m-2 rounded-3 d-flex" style={{height:'80px', maxWidth:'100%', backgroundColor:'#fff', position:'relative'}}>
                <div className="align-self-center rounded-3 bg-info" style={{height:'100%', width:'65px'}}><img src={props.article.imagen? props.article.imagen:""}/></div>
                <div className="mx-2">
                    <p className="fs-5 mb-1 fw-bold">{props.article.denominacion}</p>
                    <span>${props.article.price}</span>
                    <div className="p-2 d-flex" style={{position:'absolute', display:'inline-block', right: '0px', top:'0px'}}>
                        <button onClick={()=>disminuir(props.article.id)} className="px-1 rounded-1 border border-secondary bg-transparent" style={{width:'27px', textAlign:'center'}}>-</button>
                        <span  style={{width:'30px', textAlign:'center'}}>{props.article.cantidad}</span>    
                        <button onClick={()=>aumentar(props.article.id)} className="px-1 rounded-1 border border-secondary bg-transparent" style={{width:'27px', textAlign:'center'}}>+</button>
                    </div>
                    <button className="btn btn-outline-danger position-absolute bottom-0 end-0 m-2 py-0 px-1">Eliminar</button>
                </div>
            </div>
        </>)
    }

    return (
        <>
            <div className="bg-light" style={{width:'360px', minHeight:'100vh'}}>
                {/*header */}
                <div className="p-2">
                    <h5 className="fs-2">My Orden</h5>
                </div>
                {/*items */}
                <div>
                    {articulos.map((a:Article) => <><Item article={a} key={a.id}></Item> <div className="m-2 bg-secondary" style={{height:'1px'}}></div></>)}
                </div>
                {/*options */}
                <div></div>
                {/*detalle */}
                <div>
                </div>
            </div>
        </>
    )
};
export default CartPanel;

