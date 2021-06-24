function creaObjetoA() {
    return {
        hacer : () => {
            console.log('estoy en A')    
        }
    }
}

function creaObjetoB() {
    return {
        hacer : () => {
            console.log('estoy en B')    
        }
    }
}

let objA = creaObjetoA()
let objB = creaObjetoB()
let obj = null

for (let x = 0; x < 10; x++){
    if (x%2===0){
        obj = objA
    } else {
        obj = objB
    }
    obj.hacer()
}
