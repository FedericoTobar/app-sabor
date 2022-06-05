import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { getArticuloManufacturadoFetch, getArticuloManufacturadoXID } from './FuncionesApi';
import { ItemArticulo }  from './ItemArticulo';
import { Navigation } from './Navigation';
import { useParams } from 'react-router-dom';
import ArticulosManufacturados from './ArticulosManufacturados';

export const Home = () => {

  const {termino} = useParams();

  const [Articulo, setArticuloManufacturado] = useState<ArticulosManufacturados[]>([]);
    
    const getArticuloManufacturado = async () => {
      console.log("TERMINO" + termino);
      
      if(termino && termino !== ""){
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
               {Articulo.map((articulo:ArticulosManufacturados)=>
               <ItemArticulo id={articulo.id} denominacion={articulo.denominacion}
               imagen={articulo.imagen} precio={articulo.precio} tiempoEstimado={articulo.tiempoEstimado}>
               </ItemArticulo>
               )}
              </Row>
          </Container>
        </>
    )

}
