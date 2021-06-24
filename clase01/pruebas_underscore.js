const _ = require('underscore')

//console.log(_.range(100))

const rango = _.range(100)

for(let x = 0; x < rango.length; x++){
    rango[x] = x*x
}

// for (let x in rango){
//      console.log(x)
// }

// for (let x of rango){
//     console.log(x)
// }

let obt = {
    nombre: 'ernesto',
    apellido : 'calvo'
}

console.log(_.values(rango))
console.log(_.values(obt))
console.log(_.keys(obt))

console.log(_.filter(rango, z=> z % 2 === 0))
console.log(_.filter(rango, z=> z % 2 > 0))

_.times(10, ()=>{
    console.log(`diez veces`)
})

_.delay(()=>{},10)

_.defer(()=>{console.log('hola')})
console.log('antes del bucle')
for (let x = 0; x < 10000000000; x++){}
console.log('despues del bucle')




