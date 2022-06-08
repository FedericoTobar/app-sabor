import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticuloManufacturadoXIdFetch, GuardaArticuloManufacturado } from './FuncionesApi';
import { Navigation } from './Navigation';
import ArticulosManufacturados from './ArticulosManufacturados';


export const Formulario = () => {

    const navigate = useNavigate();

    const {idarticulo} = useParams();
    const [Articulo, setArticulo] = useState<ArticulosManufacturados>(new ArticulosManufacturados());
    
   
    const getArticulo = async () => {
        if(Number(idarticulo) !== 0){
            let ArticuloSelect:ArticulosManufacturados = await getArticuloManufacturadoXIdFetch(Number(idarticulo));
            setArticulo(ArticuloSelect);
        }else{
            let ArticuloSelect:ArticulosManufacturados = new ArticulosManufacturados();
            setArticulo(ArticuloSelect);
        }
    }


    useEffect(() => {
        getArticulo();
    }, []);

    const save = async () => {
        console.log(Articulo.denominacion);
        await GuardaArticuloManufacturado(Articulo);
        navigate('/grilla'); 
      }
    
    return (
        <>
        <Navigation></Navigation>
        <div className="center">
        <Form className="form-control">
            <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el nombre del Articulo" defaultValue={Articulo?.denominacion} onChange={e => Articulo.denominacion = String(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el precio" defaultValue={Articulo?.precio} onChange={e => Articulo.precio = Number(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRubro">
                <Form.Label>Marca</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el tiempo estimado de coccion" defaultValue={Articulo?.tiempoEstimado} onChange={e => Articulo.tiempoEstimado = String(e.target.value)}/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicImagenPath">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese la direccion de la imagen" defaultValue={Articulo?.imagen} onChange={e => Articulo.imagen = String(e.target.value)}/>
            </Form.Group>
            
            <br/>
            
            <br/><br/>
            <Button onClick={save}  variant="primary" type="button">
                Guardar
            </Button>
        </Form>
        </div>
        </>
    )
}