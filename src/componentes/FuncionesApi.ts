import ArticulosManufacturados from "./ArticulosManufacturados";

export async function getArticuloManufacturadoFetch(){
	let urlServer = 'http://localhost:8080/api/instrumentos';
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

export async function getArticuloManufacturadoXID(termino:String){
	let urlServer = 'http://localhost:8080/api/buscar/'+termino;
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

export async function getArticuloManufacturadoXIdFecth(id:number){
	let urlServer = 'http://localhost:8080/api/instrumentosxid/'+id;
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
	console.log("Eliminar Instrumento ID " + id);
	let urlServer = 'http://localhost:8080/api/delete/'+id;
	await fetch(urlServer, {
		method: 'DELETE',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
}


export async function GuardaArticuloManufacturado(ArticulosManufacturado?: ArticulosManufacturados) {
	let urlServer = 'http://localhost:8080/api/insert';
	let method:string = "POST";
	if(ArticulosManufacturado && ArticulosManufacturado.id > 0){
		urlServer = 'http://localhost:8080/api/update';
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