import plato from "./platos";

export function getPlatoJSON()
{    
    let datos:plato[]=[{
        id:1,
        menu:"Ensalada Completa",
        imagen:"EnsaladaA.jpg",
        precio: 800,
    },
    {    
        id:2,
        menu:"Baggette Salame",
        imagen:"ffood4.jpg",
        precio: 500,
    }
    
    ];
    return datos;
}

export function getPlatoXID(id:number){
    let datos:plato = new plato();
    if(id ===1){
    datos = {
        id:1,
        menu:"Ensalada Completa",
        imagen:"EnsaladaA.jpg",
        precio: 800,
    }
    return datos;
}else if(id===2){
    datos = {
        id:2,
        menu:"Baggette Salame",
        imagen:"ffood4.jpg",
        precio: 500,
    }
    return datos;
}else{
    return datos;
}
}