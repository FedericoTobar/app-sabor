import { useEffect, useState } from 'react';
import { Alert, Button, Card, Container, Row } from 'react-bootstrap';
import { getArticuloManufacturadoFetch, getArticuloManufacturadoXID } from './FuncionesApi';
import { ItemArticulo }  from './ItemArticulo';
import { Navigation } from './Navigation';
import { useParams } from 'react-router-dom';
import ArticulosManufacturados from './ArticulosManufacturados';

export const Home = () => {

  const {termino} = useParams();

  const [ArticuloManufacturado, setArticuloManufacturado] = useState<ArticulosManufacturados[]>([]);
    
    const getArticuloManufacturado = async () => {
      console.log("TERMINO" + termino);
      
      if(termino && termino != ""){
        let datos:ArticulosManufacturados[] = await getArticuloManufacturadoXID(termino);
        setArticuloManufacturado(datos);
      }else{
        let datos:ArticulosManufacturados[] = await getArticuloManufacturadoFetch();
        setArticuloManufacturado(datos);
      }
    }

    useEffect(() => {
      getArticuloManufacturado();
    }, []);

    

    return (
        <>
        <Navigation ></Navigation>
          
          <Container fluid="md">
             
              <Row>  
               {ArticuloManufacturado.map((ArticuloManufacturado:ArticulosManufacturados) => 
                <ItemArticulo key={ArticuloManufacturado.id} id={ArticuloManufacturado.id} 
                denominacion={ArticuloManufacturado.denominacion} precio={ArticuloManufacturado.precio} 
                imagen={ArticuloManufacturado.imagen} tiempoEstimado={ArticuloManufacturado.tiempoEstimado}>
                </ItemArticulo>
               )}
              </Row>
          </Container>
        </>
    )

}
