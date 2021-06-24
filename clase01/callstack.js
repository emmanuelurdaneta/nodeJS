function m1(){
    console.log('antes de llamar a m2')
    m2()
    console.log('Despues de llamar a m2')
}

function m2(){
    console.log('antes de llamar a m3')
    m3()
    console.log('Despues de llamar a m3')
}

function m3(){
    console.log('antes de llamar a m4')
    m4()
    console.log('Despues de llamar a m4')
}

function m4(){
    console.log('Llegue a m4')
    /*
    setTimeout(()=>m1(),1)
    for (let index = 0; index < 1000; index++) {
        console.log(index)        
    }    */
    //m1()
    throw new Error('descripcion')
}
try{
    m1()
} catch (error){
    console.log(error)
}
