import { useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { getArticuloManufacturadoFetch, BorraArticuloManufacturadoXId } from './FuncionesApi';
import { ItemArticulo }  from './ItemArticulo';
import { Navigation } from './Navigation';
import ArticulosManufacturados from './ArticulosManufacturados';


export const GrillaArticulos = () => {
    
    const [Articulo, setArticulo] = useState<ArticulosManufacturados[]>([]);
      
      const getArticulo = async () => {
        let datos:ArticulosManufacturados[] = await getArticuloManufacturadoFetch();
        setArticulo(datos);
      }
  
      useEffect(() => {
        getArticulo();
      }, []);


      const deleteArticulo = async (idInstrumento:number) => {
        await BorraArticuloManufacturadoXId(idInstrumento);
        window.location.reload();
      }

      return(
         <>
            <Navigation></Navigation>
          <Container fluid="md">
            <br/>
            <Button href={`/formulario/0`} variant="outline-primary">Nuevo</Button>
            < Row>
                <Col md={1}>
                <b>ID</b>
                </Col>
                <Col md={3}>
                <b>Articulo</b>
                </Col>
                <Col md={2}>
                <b>Tiempo de coccion</b>
                </Col>
                <Col md={2}>
                <b>Precio</b>
                </Col>
                <Col md={2}>
                <b>Modificar</b>
                </Col>
                <Col md={2}>
                <b>Eliminar</b>
                </Col>
            </Row>
          {Articulo.map((Articulo:ArticulosManufacturados) => 
            <Row key={Articulo.id}>
                <Col md={1}>
                {Articulo.id}
                </Col>
                <Col md={3}>
                {Articulo.denominacion}
                </Col>
                <Col md={2}>
                {Articulo.tiempoEstimado}
                </Col>
                <Col md={2}>
                {Articulo.precio}
                </Col>
                <Col md={2}>
                <Button variant="outline-warning" href={`/formulario/` + Articulo.id}>Modificar</Button>
                </Col>
                <Col md={2}>
                <Button variant="outline-danger" onClick={(e) => deleteArticulo(Articulo.id)}>Eliminar</Button>
                </Col>
            </Row>
               )}
          </Container>
         </>   
    )
}