import ArticulosManufacturados from "./ArticulosManufacturados";

export async function getArticuloManufacturadoFetch(){
	let urlServer = 'http://localhost:3000/articulos';
	let response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
       
	});
	return await response.json();
}

export async function getArticuloManufacturadoXID(termino:String){
	let urlServer = 'http://localhost:3000/articulos/'+termino;
	let response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	console.log(response);
	return await response.json();
}

export async function getArticuloManufacturadoXIdFetch(id:number){
	let urlServer = 'http://localhost:3000/articulos/'+id;
	let response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	return await response.json() as ArticulosManufacturados;
    
}

export async function BorraArticuloManufacturadoXId(id:number){
	console.log("Eliminar Articulo ID " + id);
	let urlServer = 'http://localhost:3000/delete/'+id;
	await fetch(urlServer, {
		method: 'DELETE',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
}


export async function GuardaArticuloManufacturado(ArticulosManufacturado?: any) {
	let urlServer = 'http://localhost:3000/articulos';
	let method:string = "POST";
	if(ArticulosManufacturado && ArticulosManufacturado.id > 0){
		urlServer = 'http://localhost:3000/articulos/'+ ArticulosManufacturado.id;
		method = "PUT";
	}
	await fetch(urlServer, {
	  "method": method,
	  "body": JSON.stringify(ArticulosManufacturado),
	  "headers": {
		"Content-Type": 'application/json'
	  }
	});
  }