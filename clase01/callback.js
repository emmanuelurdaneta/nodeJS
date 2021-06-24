function sumaAsync(a, b, resolucion) {
    setTimeout(() => {
    resolucion(a + b)
    }, 2000)
    
    console.log('salgo de la funcion')
}

sumaAsync(5, 5, r => { console.log(r)})