class compra {
    constructor (carritoDeCompras){
        this.carrito = carritoDeCompras
    }
    obtenerSubTotal () {
        if (this.carrito.length > 0 ) {
            return this.carrito.reduce((acc, seguro)=> acc + seguro.precio, 0 )
        }
    }
}
