
export interface Article{
    id:number,
    denominacion:string,
    price:number,
    cantidad: number,
    imagen:string
}

export class CartService {

    public get articulos() : Article[] {
        let data = localStorage.getItem('cart')
        let cart:Article[] = data !== null? JSON.parse(data!): []
        return [...cart]
    }
    
    public set articulos(v : Article[]) {
        localStorage.setItem('cart', JSON.stringify(v))
    }

    limpiarCarrito(){
        this.articulos = []
    }

    agregarArticulo(articulo:Article) {
        let exist = false;
        let cart:Article[] = this.articulos
        cart.forEach((a:Article) => {
            if(a.id === articulo.id){
                a.cantidad += articulo.cantidad;
                if(a.cantidad < 0)
                    a.cantidad = 0
                exist = true;
            }
        });
        if(exist === false){
            if(articulo.cantidad > 0){
                cart.push(articulo)
                this.articulos = cart
            }
        }
    }

    disminuirArticulo(id: number) {
        let cart:Article[] = this.articulos
        cart.forEach(a => {
            if(id === a.id)
                a.cantidad --;
                if(a.cantidad < 0)
                    a.cantidad = 0
        });
        this.articulos = cart
    }

    aumentarArticulo(id: number) {
        let cart:Article[] = this.articulos
        cart.forEach(a => {
            if(id === a.id)
                a.cantidad ++;
        });
        this.articulos = cart
    }

    quitarArticulo(id: number) {
        let cart:Article[] = this.articulos
        cart = cart.filter((a:Article)=>!(id === a.id))
        this.articulos = cart
    }
    
    cantidadDeArticulos():number {
        let cart = this.articulos
        let cantidad = 0;
        for (const articulo of cart) {
            cantidad +=  articulo.cantidad
        }
        return cantidad
    }
}