const fs = require('fs')
const asyncForLoop = require('./lib/asyncforloop')
let path = '/var/www/emma/logPrueba/'



function leerCarpeta(onFinish) {
    fs.readdir(path, (err, arrArchivos)=>{
        if(err){
        console.log(err)
        return
        }
        //recorrer_y_mostrar(arrArchivos)
        onFinish(undefined, arrArchivos)
    })
}



function recorrer_y_mostrar(arrArchivos, onFinish) {
    asyncForLoop(arrArchivos.length, (idx, next)=>{
        let archivo = arrArchivos[idx]
        let pathCompleto = [path, archivo].join('')
        fs.readFile(pathCompleto, 'utf8', (err,contenido)=>{
            if (err) {
                console.log(err)
                return
            }
            setTimeout(()=>{
                console.log(contenido)
                next()
            },200)
        })
    }, ()=>{
        //console.log('fin de proceso')
        //recorrer_y_borrar(arrArchivos)
        onFinish()
    })    
}



function recorrer_y_borrar(arrArchivos, onFinish){
    asyncForLoop(arrArchivos.length, (idx, next)=>{
        let archivo = arrArchivos[idx]
        let pathCompleto = [path, archivo].join('')
        fs.unlink(pathCompleto, (err) => {
            if(err) {
                console.log(err)
                return
            }
            console.log([pathCompleto, 'borrado'].join(': '))
            next()
        })
    },()=>{
        //console.log('fin de proceso de borrado')
        onFinish()
    })
}


function recorrer_y_hacer(path, arrArchivos, hacer, onFinish){
    asyncForLoop(arrArchivos.length, (idx, next)=>{
        let archivo = arrArchivos[idx]
        let pathCompleto = [path, archivo].join('')
        hacer(pathCompleto,(err)=>{
            if(err) {
                console.log(err)
                return
            }
            next()
        })
    },()=>{        
        onFinish()
    })
}

function orquestacionUno(){
    leerCarpeta((err, arrArchivos)=>{
        recorrer_y_mostrar(arrArchivos, (err)=> {
            if (err) {
                console.log(err)
                return
            }
            recorrer_y_borrar(arrArchivos, (err) => {
                if(err) {
                    console.log(err)
                    return
                }
                console.log('fin de proceso de borrado')
            })
        })
    })
}

function segundaOrquetacion() {
    leerCarpeta((err, arrArchivos)=> {
        let path = '/var/www/emma/logPrueba/'
        recorrer_y_hacer(path, arrArchivos, haceralgo, z=>z)
    })
    function haceralgo(pathCompleto, onFinish){
        let leyenda = ['no hago nada', pathCompleto].join(': ')
        console.log(leyenda)
        onFinish(undefined)
    }
}

segundaOrquetacion()