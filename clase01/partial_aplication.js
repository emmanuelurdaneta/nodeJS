const _ = require('underscore')

// partial application manual

function suma (x){
    return function (y){
        return x + y
    }
}

let suma2 = suma(2)
let suma6 = suma(6)

console.log(suma6(10))
console.log(suma2(4))

function sumaBis(x, y, z){
    return x + y + z
}

let suma100 = _.partial(sumaBis, 110)
let resultado = suma100(10, 10)
console.log(resultado)