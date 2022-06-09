import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticuloManufacturadoXIdFetch, GuardaArticuloManufacturado } from './FuncionesApi';
import { Navigation } from './Navigation';
import ArticulosManufacturados from './ArticulosManufacturados';
import ArticulosManufacturadosTransfer from "./ArticulosManufacturadoTransfer";


export const Formulario = () => {

    const navigate = useNavigate();

    const {idarticulo} = useParams();
    const [Articulo, setArticulo] = useState<ArticulosManufacturadosTransfer>(new ArticulosManufacturadosTransfer());
    
   
    const getArticulo = async () => {
        if(Number(idarticulo) !== 0){
            //let articuloSelect:ArticulosManufacturadosTransfer = await getArticuloManufacturadoXIdFetch(Number(idarticulo));
            //setArticulo(ArticuloSelect);
        }else{
            let articuloSelect:ArticulosManufacturadosTransfer = new ArticulosManufacturadosTransfer();
            setArticulo(articuloSelect);
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
                <Form.Control type="Text" placeholder="Ingrese el precio" defaultValue={Articulo?.precio.precioVenta} onChange={e => Articulo.precio.precioVenta = Number(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrecioCosto">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el precio costo" defaultValue={Articulo?.precio.precioCompra} onChange={e => Articulo.precio.precioCompra = Number(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTiempoEstimadoCoccion">
                <Form.Label>Tiempo Estimado De Coccion</Form.Label>
                <Form.Control type="Text" placeholder="Ingrese el tiempo estimado de coccion" defaultValue={Articulo?.tiempoEstimadoCocina} onChange={e => Articulo.tiempoEstimadoCocina = Number(e.target.value)}/>
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