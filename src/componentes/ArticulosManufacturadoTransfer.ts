
export default class ArticulosManufacturadosTransfer{
    
    id:number = 0;
    denominacion:string = "";
    imagen:string = "";
    tiempoEstimadoCocina:number= 0;
    RubroGeneralId:number = 1;
    CategoriaId:number = 1;
    precio:{
        precioVenta:number,
        precioCompra:number
    } = {precioCompra:0, precioVenta:0}
    
}