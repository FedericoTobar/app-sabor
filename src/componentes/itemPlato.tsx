import { useState } from 'react';
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import plato from './platos';

type platoParams = {
    id:number;
    menu:string;
    imagen:string;
    precio:number;
}
export const ItemPlato = (args: platoParams) => {

    return(
        <>
            <Card style={{width: '18rem'}} >
                <Card.Img variant="top" className='maxAltoImg' src={"http://localhost:3000/images/"+args.imagen.toLowerCase()}></Card.Img>
                <Card.Body className='tarjPpal'>
                    <></>
                    <Card.Title>{args.menu}</Card.Title>
                    <Card.Text>
                        PRECIO = ${args.precio}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </>
    )
}