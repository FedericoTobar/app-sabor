import { useEffect, useState } from 'react';
import { Alert, Button, Card, Container, Row } from 'react-bootstrap';
//import { DetalleInstrumento } from './DetalleInstrumento';
import { getPlatoJSON, getPlatoXID } from './FuncionesApi';
import { ItemPlato }  from './itemPlato';
import { Navigation } from './Navigation';
import plato from './platos';

export const Home = () => {
    
  const [platos, setPlatos] = useState<plato[]>([]);
    
    const getPlatosRest = () => {
      let datos:plato[] = getPlatoJSON();
      setPlatos(datos);
    }

    useEffect(() => {
      getPlatosRest();
    }, []);

    
    return (
        <>
        <Navigation />
          
          <Container fluid="md">
             
              <Row>  
               {platos.map((plato:plato) => 
                <ItemPlato key={plato.id} id={plato.id} menu={plato.menu} precio={plato.precio} imagen={plato.imagen}></ItemPlato>
               )}
              </Row>
          </Container>
        </>
    )
}
