const carrito = []

const seguros = [                  
                    {dibujo: '🏠', codigo: 1, tipo: 'Seguro para el Hogar', precio: 12000},      
                    {dibujo: '🏠', codigo: 2, tipo: 'Seguro para el Hogar', precio: 12000},
                    {dibujo: '🚤', codigo: 3, tipo: 'Seguro para lanchas', precio: 8500},
                    {dibujo: '🛵', codigo: 4, tipo: 'Seguro para motos', precio: 2500},
                    {dibujo: '💻📱', codigo: 5, tipo: 'Seguro para celulares y laptop', precio: 1500},
                    {dibujo: '.🎰', codigo: 6, tipo: 'Seguro para local comercial', precio: 25000},
                    {dibujo: '👨‍🔬', codigo: 7, tipo: 'Seguro para medico', precio: 10000},
                    {dibujo: '⛪', codigo: 8, tipo: 'Seguro de vida', precio: 50000} ,
                    {dibujo: '🚲', codigo: 9, tipo: 'Seguro para bicicletas', precio: 1500},
                    {dibujo: '👨‍👩‍👦‍👦', codigo: 10, tipo: 'Seguro familiar', precio: 129000}

]

function elegirSeguro(codigo) {
    let resultado = seguros.find((seguro)=> seguro.codigo === parseInt(codigo) )
            return resultado
}

function finalizarCompra () {
    if (carrito.length === 0) {
        console.warn ("El carrito esta vacio")
        return
    }
    const Segurola = new Compra (carrito)
     alert('El costo total del seguro es de: $'+ compra.obtenerSubTotal() )
     
     let respuesta = confirm ("Si realizo la eleccion confirme el pago")
            (respuesta === true) 
            {
                alert('Confirmamos tu seguro de : $ ' + compra.obtenerSubTotal() + "\n Muchas Gracias por elegirnos")
                carrito.length = 0
            }

}
function comprar () {
    let codigo = prompt(mensajeInicial) 
    if (!parseInt(codigo)) {
        alert ("Error en el codigo ingresado")
        let respuesta = confirm ('Deseas ingresar una opcion valida ')
        if(respuesta === true)
        comprar()
        return

    }
    let seguroElegido = elegirSeguro(codigo)
        console.log(seguroElegido.dibujo+ '' + seguroElegido.tipo)
}