import { useState } from 'react';
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';

type ArticuloParams = {
    id:number;
    denominacion:string;
    imagen:string;
    tiempoEstimado:string;
    precio:number;
    
}

export const ItemArticulo = (args: ArticuloParams) => {

    return (
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className='maxAltoImg' src={"http://localhost:3000/images/" + args.imagen.toLowerCase()}></Card.Img>
            <Card.Body className='tarjPpal'>
            <></>
            <Card.Title>{args.denominacion}</Card.Title>
                <Card.Text>
                    PRECIO = ${args.precio}
                </Card.Text>
                <Card.Text>
                    Tiempo Estimado = ${args.tiempoEstimado}
                </Card.Text>
            </Card.Body>
            </Card>
        </>
    )
}